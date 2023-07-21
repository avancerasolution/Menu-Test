import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOrderDetail } from "../Redux/action/orderDetail";
import { toast } from "react-toastify";

const OrderDetail = ({ id }) => {
  const dispatch = useDispatch();
  const [total,setTotal]=useState(0)
  const { data, loading, error } = useSelector((state) => state.orderdetail);
  useEffect(() => {
    dispatch(fetchOrderDetail(id));
    getTotal()
  }, [dispatch, id]);

const getTotal=()=>{
  let total=0
  data.forEach(element => {
    total=total+element.total_price
  });
  setTotal(total)
}


  useEffect(() => {
    if (loading) {
    }

    if (error) {
      toast.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loading]);
  return (
    <div className="orderDetail">
      <div>
        <table>
          <thead>

            <th>Quantity</th>
            <th>Transaction Id</th>
            <th>Tax</th>
            <th>Discount</th>
            <th>Unit Price</th>
            <th>Subtotal</th>
          </thead>

          <tbody>
            {data &&
              data?.map((data) => {
                // setTotal((prev)=>prev+data.total_price)
                return <tr>
                  <td>{data.qty}</td>
                  <td>{data.transaction_id}</td>
                  <td>{data.tax}</td>
                  <td>{data.discount}</td>
                  <td>{data.unit_price}</td>
                  <td>{data.total_price}</td>
                </tr>
              })}
              <tr><td>Total</td><td>{total}</td></tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default OrderDetail;
