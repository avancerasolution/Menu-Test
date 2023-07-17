import React, { Fragment, useEffect } from "react";
import { BsCartDash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// import global stats
const Cart = ({
  setorderCount,
  orderCount,
  isAuthenticated,
  setCartItems,
  cartItems,
  singleOrderQuantity,
  setSingleOrderQuantity,
}) => {
  // get data from state
  const { state } = useLocation();
  const { data } = state;

  // get data from localstorage
  const items = JSON.parse(localStorage.getItem("items"));

  //add to cart function
  const handleAddtoCart = (item, singleOrderQuantity) => {
    if (isAuthenticated) {
      const existingItem = items?.find(
        (cartItem) => cartItem.item_id === item.item_id
      );

      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          setorderCount(orderCount + cartItem.quantity);
          if (cartItem.item_id === item.item_id) {
            toast.success(
              `${singleOrderQuantity} ${data.item_name} is added in your cart`
            );

            setorderCount(orderCount + cartItem.quantity);
            return {
              ...cartItem,
              quantity: cartItem.quantity + singleOrderQuantity,
            };
          }

          return cartItem;
        });
        setCartItems(updatedCartItems);
        setSingleOrderQuantity(1);
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

  if (singleOrderQuantity < 1) {
    setSingleOrderQuantity(1);
  }
  //price calculation
  const calculateTotalPrice = (price, quantity) => {
    const subtotal = price * quantity;

    const totalPrice = subtotal;

    return totalPrice;
  };
  //set default quantity
  useEffect(() => {
    setSingleOrderQuantity(1);
  }, [setSingleOrderQuantity]);
  //set data on localstorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems, setSingleOrderQuantity]);
  return (
    <Fragment>
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>{data.item_name}</h2>
          </div>
        </div>
      </div>

      <div className="cartItem container ">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={window.env.ASSETS_URL + data.item_main_picture_url_thumb}
              alt=""
            />
          </div>
          <div className="col-sm-6 texts">
            <h2>{data.item_name}</h2>
            <h6>
              Price:
              <span>
                <del> ${data.item_price1}</del> ${data.item_price2}
              </span>
            </h6>
            <p>Deal No : {data.item_hot_deal}</p>

            <p>{data.item_short_description}</p>
            <p>{data.item_description_html}</p>
            <div className="btnSection">
              <span className="qtty">
                <button
                  onClick={() =>
                    setSingleOrderQuantity(singleOrderQuantity - 1)
                  }
                >
                  -
                </button>
                <p>
                  Qty: <span> {singleOrderQuantity} </span>
                </p>
                <button
                  onClick={() =>
                    setSingleOrderQuantity(singleOrderQuantity + 1)
                  }
                >
                  +
                </button>
              </span>
              Total {calculateTotalPrice(data.item_price2, singleOrderQuantity)}
            </div>
            <button
              onClick={() => handleAddtoCart(data, singleOrderQuantity)}
              className="cartbtn"
            >
              <BsCartDash /> Add to Cart
            </button>
            <></>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
