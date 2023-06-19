import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../Redux/action/order";

import Modal from "react-bootstrap/Modal";
import OrderDetail from "../common/OrderDetail";
import { toast } from "react-hot-toast";
const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState();
  const [modalShow, setModalShow] = useState(false);
  const { order, loading, error } = useSelector((state) => state.order);
  const id = user && user.customer_id ? user.customer_id : "";
  useEffect(() => {
    dispatch(fetchOrder({ id }));
  }, [dispatch, id]);

  const handleModal = async (id) => {
    await setShowDetail(id);
    setModalShow(true);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className="container-fluid tableContent">
      <div>
        <table>
          <thead>
            <th>Transaction id</th>
            <th>Date</th>

            <th>Action</th>
          </thead>

          {loading ? (
            <></>
          ) : (
            order &&
            order.result &&
            order.result.map((data) => (
              <tbody>
                <td>{data.transaction_id}</td>
                <td>{data.createdAt.split("T")[0]}</td>

                <td>
                  <button onClick={() => handleModal(data.order_id)}>
                    View Detail
                  </button>
                </td>
              </tbody>
            ))
          )}
        </table>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Order Details</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderDetail id={showDetail} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModalShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
