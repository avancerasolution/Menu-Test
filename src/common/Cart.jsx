import React, { useEffect, useState } from "react";
import { BsCartDash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = ({
  setorderCount,
  orderCount,
  isAuthenticated,
  setCartItems,
  cartItems,
  singleOrderQuantity,
  setSingleOrderQuantity,
}) => {
  const { state } = useLocation();
  const { data } = state;

  const [quantityCount, setquantityCount] = useState(0);
  const [update, setUpdate] = useState([]);
  const items = JSON.parse(localStorage.getItem("items"));

  const handleAddtoCart = (item, singleOrderQuantity) => {
    if (isAuthenticated) {
      const existingItem = items.find(
        (cartItem) => cartItem.item_id === item.item_id
      );

      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.item_id === item.item_id) {
            toast.success(
              `${singleOrderQuantity} ${data.item_name} is added in your cart`
            );
            return {
              ...cartItem,
              quantity: cartItem.quantity + singleOrderQuantity,
            };
          }
          setorderCount(orderCount + cartItem.quantity);
          return cartItem;
        });
        setCartItems(updatedCartItems);
      } else {
        toast.success(
          `${singleOrderQuantity} ${data.item_name} is added in your cart`
        );
        const updatedCartItems = [
          ...cartItems,
          { ...item, item, quantity: singleOrderQuantity },
        ];
        setCartItems(updatedCartItems);
      }
    } else {
      toast.error("Please Login To Access this Resource");
    }
  };

  // const handleAddtoCart = (data, singleOrderQuantity) => {
  //   const i = items.findIndex((e) => e.item_id === data.item_id);
  //   console.log(i)
  //   if (i.length === -1) {
  //     alert("matched");
  //
  //   }
  //   const item = [...items];
  //   const updatedData = item.map((i, e) => {
  //     if (i.item_id === data.item_id) {
  //       i.quantity += singleOrderQuantity;

  //       setCartItems([...item]);
  //       alert("nomatched");
  //       return i;
  //     }
  //     return i;
  //   });
  // };
  if (quantityCount < 0) {
    setorderCount(singleOrderQuantity);
  }
  if (singleOrderQuantity < 1) {
    setSingleOrderQuantity(1);
  }
  const calculateTotalPrice = (price, quantity) => {
    const taxRate = 0.13; // 13% tax rate
    const subtotal = price * quantity;
    const taxAmount = subtotal * taxRate;
    const totalPrice = subtotal + taxAmount;

    return totalPrice;
  };
  useEffect(() => {
    setSingleOrderQuantity(1);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems, setSingleOrderQuantity]);
  return (
    <div
      onClick={() => {
        console.log(cartItems, "<==== items cart");
      }}
      className="cartItem container "
    >
      <Toaster />
      <div className="row">
        <div className="col-sm-6">
          <img
            src={
              "http://154.12.253.133:5000/assets/" +
              data.item_main_picture_url_thumb
            }
            alt=""
          />
        </div>
        <div className="col-sm-6">
          <h2>{data.item_name}</h2>
          <h6>
            Price:
            <span>
              <del> ${data.item_price2}</del> ${data.item_price1}
            </span>
          </h6>
          <p>Deal No : {data.item_hot_deal}</p>
          {/* <p>Category :{data.items_Category.category_code}</p> */}
          <p>{data.item_short_description}</p>
          <p>{data.item_description_html}</p>
          <div className="btnSection">
            <button
              onClick={() => setSingleOrderQuantity(singleOrderQuantity - 1)}
            >
              -
            </button>
            <p>
              Qty: <span> {singleOrderQuantity} </span>
            </p>
            <button
              onClick={() => setSingleOrderQuantity(singleOrderQuantity + 1)}
            >
              +
            </button>
            <button onClick={() => handleAddtoCart(data, singleOrderQuantity)}>
              <BsCartDash /> Add to Cart
            </button>
          </div>
          Total {calculateTotalPrice(data.item_price1, singleOrderQuantity)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
