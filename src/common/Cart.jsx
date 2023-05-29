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
}) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = state;
  console.log(data);
  const [quantityCount, setquantityCount] = useState(0);
  const handleAddtoCart = (data) => {
    if (isAuthenticated) {
      setCartItems([...cartItems, data]);

      toast.success(
        `${quantityCount}  ${data.item_name} is Added in your Cart`
      );

      setorderCount(orderCount + quantityCount);
    } else {
      toast.error("Please Login to access this resourse");
    }
  };
  if (quantityCount < 0) {
    setquantityCount(0);
  }
  const calculateTotalPrice = (price, quantity) => {
    const taxRate = 0.13; // 13% tax rate
    const subtotal = price * quantity;
    const taxAmount = subtotal * taxRate;
    const totalPrice = subtotal + taxAmount;

    return totalPrice;
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="cartItem container ">
      <Toaster />
      <div className="row">
        <div className="col-sm-6">
          <img
            src={
              "http://192.168.100.12:5000/assets/" +
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
          <p>Category :{data.Items_Category.category_code}</p>
          <p>{data.item_short_description}</p>
          <p>{data.item_description_html}</p>
          <div className="btnSection">
            <button onClick={() => setquantityCount(quantityCount - 1)}>
              -
            </button>
            <p>
              Qty: <span> {quantityCount} </span>
            </p>
            <button onClick={() => setquantityCount(quantityCount + 1)}>
              +
            </button>
            <button onClick={() => handleAddtoCart(data)}>
              <BsCartDash /> Add to Cart
            </button>
          </div>
          Total {calculateTotalPrice(data.item_price1, quantityCount)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
