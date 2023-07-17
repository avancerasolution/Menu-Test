import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOrderDetail } from "../Redux/action/orderDetail";
import { toast } from "react-toastify";

const OrderDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.orderdetail);
  console.log(data);
  useEffect(() => {
    dispatch(fetchOrderDetail(id));
  }, [dispatch, id]);

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
            <th>Voucher Number</th>

            <th>Quantity</th>
            <th>Transaction Id</th>
            <th>Tax</th>
            <th>Discount</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </thead>

          <tbody>
            {data &&
              data?.map((data) => (
                <tr>
                  <td>{data.voucher_no}</td>

                  <td>{data.qty}</td>
                  <td>{data.transaction_id}</td>
                  <td>{data.tax}</td>
                  <td>{data.discount}</td>
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
