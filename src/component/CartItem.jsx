import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchVoucher } from "../Redux/action/voucher";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { checkout } from "../Redux/action/checkout";

const CartItem = ({ setCartItems, cartItems, orderCount, user }) => {
  const dispatch = useDispatch();
  const [voucher_code, setvoucher_code] = useState();
  const { message, error } = useSelector((state) => state.checkcout);

  const items = JSON.parse(localStorage.getItem("items"));
  const quantity = JSON.parse(localStorage.getItem("quantity"));

  let cart = [];
  for (var i = 0; i < items.length; i++) {
    cart.push({
      item_id: items[i].item_id ? items[i].item_id : <></>,
      qty: quantity,
    });
  }
  const [registeration, setregisteration] = useState({
    cart: cart,
    customer_id: user.customer_id,
    voucher_code: "",
    voucher_no: 1,
    t_date: "12-12-12",

    unit_price: 99.99,
    total_price: 10.05,
    temp_record: 105,
    session_id_temp: "this is session id",
    discount: 0.5,
    tax: 99.99,
    item_no: 99,
  });
  const [records, setrecords] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setregisteration({ ...registeration, [name]: value });
  };
  const submit = async (event) => {
    event.preventDefault();

    try {
      const formData = { ...registeration };

      setrecords([...records, formData]);
      await dispatch(checkout(formData));
    } catch (error) {
      const err = error.response.data.message;
      toast.error(err);
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <div className="cartItem1">
      <div className="cartItemHeader">
        <h1>Shopping Cart</h1>
        <Link to="/">Home</Link>
      </div>
      {items.map((data) => (
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
        </div>
      ))}
      <div className="checkoutBtn">
        <input
          value={voucher_code}
          onChange={handleChange}
          placeholder="Add Voucher"
          name="voucher_code"
        ></input>
        <button onClick={submit}>Check Out</button>
      </div>
    </div>
  );
};

export default CartItem;
