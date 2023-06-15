import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { checkout } from "../Redux/action/checkout";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsCartDash } from "react-icons/bs";

const CartItem = ({
  setCartItems,
  cartItems,
  orderCount,
  setorderCount,
  user,
  singleOrderQuantity,
  setSingleOrderQuantity,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [voucher_code, setvoucher_code] = useState();
  const { message, error } = useSelector((state) => state.checkcout);
  const [data, setData] = useState([]);

  const items = JSON.parse(localStorage.getItem("items"));

  //isk o useeffect m wrap karo wrna yeh bar baar chalta rahega, bhot ziada masley h , aik sitting m nahi hoga properly.
  const cart = [];

  for (var i = 0; i < items.length; i++) {
    cart.push({
      item_id: items[i].item_id ? items[i].item_id : <></>,
      qty: items[i].quantity ? items[i].quantity : <></>,
    });
  }

  const [registeration, setregisteration] = useState({
    // customer_id: user.customer_id,
    cart: cart,
    voucher_code: "",
    voucher_no: 1,
    t_date: "12-12-12",
    unit_price: 99.99,
    total_price: 10.05,
    temp_record: 105,
    session_id_temp: "this is session id",
    discount: 0,
    tax: 1,
    item_no: "",
  });
  const [records, setrecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setregisteration({ ...registeration, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    const userId = user.customer_id;
    registeration.customer_id = user.customer_id;
    try {
      const register = {
        voucher_code: registeration.voucher_code,
        cart: cart,
        voucher_no: 1,
        t_date: "12-12-12",
        unit_price: 99.99,
        total_price: 10.05,
        temp_record: 105,
        customer_id: userId,
        session_id_temp: "this is session id",
        discount: 0.5,
        tax: 99.99,
        item_no: 99,
      };
      const formData = { ...register };
      console.log(formData, "datataata");
      setrecords([...records, formData]);
      await dispatch(checkout(formData));
      toast.success("Order Submitted Successfully");
      navigate("/myprofile");
    } catch (error) {
      toast.error(error);
    }
  };
  const removeElement = (index, quantityindex) => {
    setData(data.filter((_, i) => i !== index));
    setorderCount(orderCount - quantityindex);
  };

  const calculateTotalPrice = (price, quantity) => {
    const taxRate = 0.13; // 13% tax rate
    const subtotal = price * quantity;
    const taxAmount = subtotal * taxRate;
    const totalPrice = subtotal + taxAmount;

    return Math.round(totalPrice);
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
  useEffect(() => {
    setData(items);
  }, []);

  const setQuantity = (qty, point) => {
    let currentStream = [...data];
    console.log(currentStream, "<==== before");
    currentStream = currentStream.map((item, indx) => {
      if (indx === point) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    console.log(currentStream, "<=== updated");
    setData(currentStream);
  };

  return (
    <div className="cartItem1">
      <div className="cartItemHeader">
        <h1
          onClick={() => {
            console.log(data, "<=== data");
          }}
        >
          Shopping Cart
        </h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {data.map((data, index) => (
            <tbody>
              <tr>
                <td>
                  <div className="d-flex cardImage">
                    <div>
                      <img
                        src={
                          "http://154.12.253.133:5000/assets/" +
                          data.item_main_picture_url_thumb
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <h2> {data.item_name} </h2>
                      <h5>product code is {data.item_department_code}</h5>
                    </div>
                  </div>
                </td>
                <td>{data.item_price2}</td>
                <td>
                  <div className="btnSection1">
                    <button
                      onClick={() =>
                        // setSingleOrderQuantity(singleOrderQuantity - 1,index)
                        setQuantity(data.quantity - 1, index)
                      }
                    >
                      -
                    </button>
                    <p>
                      <span> {data.quantity} </span>
                    </p>
                    <button
                      onClick={() =>
                        // setSingleOrderQuantity(singleOrderQuantity + 1, index)
                        setQuantity(data.quantity + 1, index)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button onClick={() => removeElement(index, data.quantity)}>
                    <ImCross />
                  </button>
                </td>
                <td>{calculateTotalPrice(data.item_price1, data.quantity)}$</td>
              </tr>
            </tbody>
            // <div className="cartItemDetail row">
            //   <div className="col-sm-5">
            //     <img
            //       src={
            //         "http://154.12.253.133:5000/assets/" +
            //         data.item_main_picture_url_thumb
            //       }
            //       alt=""
            //     />
            //   </div>
            //   <div className="col-sm-4 cartItemDetailsub">
            //     <h4>{data.item_name}</h4>
            //     <h5>{data.item_code}</h5>
            //     <h3>{data.item_cost}</h3>
            //     <h5>{data.item_department_code}</h5>
            //     <h6>{data.item_hot_deal}</h6>
            //     <h5>{data.item_price1}</h5>
            //     <h5>{data.item_price2}</h5>
            //     <button onClick={() => quantity[index] - 1}>-</button>
            //     <p>{quantity[index]}Qty</p>
            //     <button onClick={() => quantity[index] + 1}>+</button>
            //   </div>
            // </div>
          ))}
        </table>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <input
            value={"Tax 13%"}
            readOnly
            placeholder="Add Voucher"
            name="voucher_code"
          ></input>
        </div>
        <div className="col-sm-3">
          <input
            value={"Discount 00$"}
            onChange={handleChange}
            placeholder="Add Voucher"
            name="voucher_code"
          ></input>
        </div>
        <div className="col-sm-6">
          <input
            value={voucher_code}
            onChange={handleChange}
            placeholder="Add Voucher"
            name="voucher_code"
            style={{ width: "500px" }}
          ></input>
          <button className="checkOutBtn" onClick={submit}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
