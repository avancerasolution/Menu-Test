import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../Redux/action/order";

import Modal from "react-bootstrap/Modal";
import OrderDetail from "../common/OrderDetail";
import { toast } from "react-toastify";
import { clearOrderError } from "../Redux/reducer/orderreducer";
const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState();
  const [modalShow, setModalShow] = useState(false);
  const { order, loading, error } = useSelector((state) => state.order);
  const { data } = useSelector((state) => state.auth);
  const id = data?.user?.customer_id;
  console.log(order, "order");
  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [dispatch, id]);

  const handleModal = async (id) => {
    await setShowDetail(id);
    setModalShow(true);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearOrderError());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>My Order History </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid tableContent">
        <div className="tabres">
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
              order.map((data) => (
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
    </Fragment>
  );
};

export default Profile;
