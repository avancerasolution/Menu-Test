import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartItem = ({ setCartItems, cartItems, orderCount }) => {
  const navigate = useNavigate();
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };
  const items = JSON.parse(localStorage.getItem("items"));

  return (
    <div className="cartItem1">
      <div className="cartItemHeader">
        <h1>Shopping Cart</h1>
        <Link to="/">Home</Link>
      </div>
      {cartItems.map((data) => (
        <div className="cartItemDetail row">
          <div className="col-sm-5">
            <img
              src={
                "http://192.168.100.12:5000/assets/" +
                data.item_main_picture_url_thumb
              }
              alt=""
            />
          </div>
          <div className="col-sm-4 cartItemDetailsub">
            <h4>{data.item_name}</h4>
            <h6>{data.Items_Category.category_code}</h6>
            <p>{data.item_description_html}</p>
            <p>{orderCount}Qty</p>
          </div>
          <div className="col-sm-2">
            <button onClick={() => removeItemFromCart(data._id)}>Remove</button>
          </div>
        </div>
      ))}
      <button
        onClick={() =>
          navigate("/confirmorder", {
            state: {
              item: cartItems,
            },
          })
        }
      >
        Check Out
      </button>
    </div>
  );
};

export default CartItem;
