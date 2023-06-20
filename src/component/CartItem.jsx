import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { checkout } from "../Redux/action/checkout";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { fetchVoucherCode } from "../Redux/action/vouchercode";

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

  const { message, error } = useSelector((state) => state.checkcout);
  const { voucherbycode } = useSelector((state) => state.vouchercode);
  const [data, setData] = useState([]);
  const [Total, setTotal] = useState();

  const items = JSON.parse(localStorage.getItem("items"));

  const cart = [];

  for (var i = 0; i < items?.length; i++) {
    cart.push({
      item_id: items[i].item_id ? items[i].item_id : <></>,
      qty: items[i].quantity ? items[i].quantity : <></>,
    });
  }

  const [registeration, setregisteration] = useState({
    // customer_id: user.customer_id,
    cart: cart,

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
    registeration.voucher_code = value;
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
      if (registeration.voucher_code) {
        register.voucher_code = registeration.voucher_code;
      }
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
  const removeElement = async (index, quantityindex) => {
    const updateItems = data.filter((_, i) => i !== index);
    setData(updateItems);
    setCartItems(updateItems);
    items.filter((_, i) => i !== index);
    await localStorage.setItem("items", JSON.stringify(updateItems));
    setorderCount(orderCount - quantityindex);
  };

  const calculateTotalPrice = (price, quantity) => {
    const subtotal = price * quantity;

    return Math.round(subtotal);
  };

  const totalAmount = function (total) {
    var total = 0;
    for (var i = 0; i < data?.length; i++) {
      total = total + data[i].item_price1;
    }
    setTotal(total);
    console.log(Total);
    return total;
  };

  useEffect(() => {
    totalAmount();
  });

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

  const handleApplyVoucherCode = () => {
    const code = registeration.voucher_code;
    dispatch(fetchVoucherCode({ code }));
  };

  const setQuantity = (qty, point) => {
    let currentStream = [...data];
    console.log(currentStream, "<==== before");
    currentStream = currentStream.map((item, indx) => {
      if (indx === point) {
        if (qty === 0) {
          removeElement(point);
        }
        return { ...item, quantity: qty };
      }
      return item;
    });
    console.log(currentStream, "<=== updated");
    setData(currentStream);
  };
  var totalPrice = data.reduce(
    (acc, obj) => acc + obj.item_price2 * obj.quantity,
    0
  );

  function calculateFinalPrice(price) {
    const taxPercentage = 13;
    const discountPercentage = voucherbycode?.discount
      ? voucherbycode.discount
      : 0;

    const totalPriceWithTax = price * (1 + taxPercentage / 100);
    const finalPrice = totalPriceWithTax * (1 - discountPercentage / 100);
    return Math.round(finalPrice);
  }

  useEffect(() => {
    calculateFinalPrice();
  });
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
          {data?.map((data, index) => (
            <tbody>
              <tr>
                <td>
                  <div className="d-flex cardImage">
                    <div>
                      <img
                        src={
                          window.env.ASSETS_URL +
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
                      onClick={() => setQuantity(data.quantity - 1, index)}
                    >
                      -
                    </button>
                    <p>
                      <span> {data.quantity} </span>
                    </p>
                    <button
                      onClick={() => setQuantity(data.quantity + 1, index)}
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
                <td>{calculateTotalPrice(data.item_price2, data.quantity)}$</td>
              </tr>
            </tbody>
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
            value={
              voucherbycode === undefined
                ? ""
                : voucherbycode.discount === undefined
                ? ""
                : `discount ${
                    voucherbycode.discount ? voucherbycode.discount : "00"
                  }$`
            }
            onChange={handleChange}
            placeholder="Discount"
            name="voucher_code"
          ></input>
        </div>
        <div className="col-sm-3">
          <input
            value={` totalPrice ${calculateFinalPrice(totalPrice)}`}
            onChange={handleChange}
            placeholder="Discount"
            name="voucher_code"
          ></input>
        </div>
        <div className="col-sm-3">
          <input
            onChange={handleChange}
            placeholder="Add Voucher"
            name="voucher_code"
          ></input>
          <button className="checkOutBtn" onClick={handleApplyVoucherCode}>
            Apply Voucher
          </button>
        </div>
        <div>
          <button className="checkOutBtn1" onClick={submit}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
