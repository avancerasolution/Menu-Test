import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOrderDetail } from "../Redux/action/orderDetail";
import Moment from "react-moment";
const OrderDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { orderdetail, loading, error } = useSelector(
    (state) => state.orderdetail
  );
  useEffect(() => {
    dispatch(fetchOrderDetail({ id }));
  }, [dispatch, id]);

  return (
    <div className="orderDetail">
      <div>
        <table>
          <thead>
            <th>Voucher Number</th>
            <th>Internal Notes</th>

            <th>Quantity</th>
            <th>Transaction Id</th>
            <th>Tax</th>
            <th>Discount</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </thead>

          <tbody>
            {orderdetail &&
              orderdetail.map((data) => (
                <tr>
                  <td>{data.voucher_no}</td>
                  <td>{data.internal_notes}</td>

                  <td>{data.qty}</td>
                  <td>{data.transaction_id}</td>
                  <td>{data.tax}</td>
                  <td>{data.unit_price}</td>
                  <td>{data.total_price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
