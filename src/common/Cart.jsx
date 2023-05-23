import React, { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Cart = ({ setorderCount, orderCount }) => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  const [quantityCount, setquantityCount] = useState(0);
  const handleAddtoCart = () => {
    toast.success(`your ${data.title} Added to Cart`);

    setorderCount(orderCount + quantityCount);
  };
  if (quantityCount < 0) {
    setquantityCount(0);
  }
  return (
    <div className="cartItem container ">
      <Toaster />
      <div className="row">
        <div className="col-sm-6">
          <img src={data.photo} alt="" />
        </div>
        <div className="col-sm-6">
          <h2>{data.title}</h2>
          <h6>
            Price: <span> ${data.price} </span>
          </h6>
          <p>{data.description}</p>
          <div className="btnSection">
            <button onClick={() => setquantityCount(quantityCount - 1)}>
              {" "}
              -
            </button>

            <p>
              Qty: <span> {quantityCount} </span>
            </p>
            <button onClick={() => setquantityCount(quantityCount + 1)}>
              +{" "}
            </button>
            <button onClick={handleAddtoCart}>
              <BsCartDash /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
