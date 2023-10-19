import Card from "react-bootstrap/Card";

import { BiFoodMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenuData } from "../Redux/action/menu";
import { toast } from "react-toastify";
import { fetchCategory } from "../Redux/action/category";
import ScrollContainer from "react-indiana-drag-scroll";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllData, setShowAllData] = useState(true);
  const { data, loading, error } = useSelector((state) => state.menu);
  const { category } = useSelector((state) => state.category);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryClick = (filterId) => {
    setShowAllData(false);
    const filteredResult = data.filter(
      (item) => item.item_category_id === filterId
    );

    setFilteredData(filteredResult);
  };

  useEffect(() => {
    if (loading) {
    }

    if (error) {
      toast.error(error);
    }
  }, [error, loading]);

  useEffect(() => {
    dispatch(fetchMenuData());
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      =
      <div className="menuHeader" id="menu">
        <h2>Menu </h2>
        <h1>Most Popular Items</h1>
      </div>
      <ScrollContainer className="scroll-container">
        <div className="row filterRow">
          <div className="col-sm-12">
            <div className="filterBtn">
              <button onClick={() => setShowAllData(true)}>
                <BiFoodMenu /> All
              </button>
              {category &&
                category.map((item) => (
                  <>
                    <button
                      onClick={() => handleCategoryClick(item.item_category_id)}
                      key={item._id}
                    >
                      <img
                        src={
                          process.env.REACT_APP_ASSET_URL +
                          item.main_picture_url
                        }
                        alt=""
                      />
                      {item.category_code}
                    </button>
                  </>
                ))}
            </div>
          </div>
        </div>
      </ScrollContainer>
      <div className="container menu">
        {!showAllData ? (
          <div className="row">
            {filteredData &&
              filteredData.map((data) => {
                return (
                  <div className="col-sm-4 cards" key={data.id}>
                    <Card className="col-sm-3 ">
                      <Card.Img
                        variant="top"
                        src={
                          process.env.REACT_APP_ASSET_URL +
                          data?.item_main_picture_url
                        }
                      />
                      <Card.Body>
                        <Card.Title>{data?.item_name}</Card.Title>
                        <hr />
                        <Card.Text>
                          {data?.item_short_description?.slice(0, 10)}
                        </Card.Text>
                        <p>
                          Price:
                          <span>
                            <del> ${data.item_price1}</del>${data.item_price2}
                          </span>
                        </p>
                        <button
                          variant="primary"
                          onClick={() => {
                            navigate("/cart", {
                              state: {
                                data: data,
                              },
                            });
                          }}
                        >
                          View Detail
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        ) : (
          <>
            <div className="row">
              {data &&
                data.map((data) => (
                  <div className="col-sm-4 cards" key={data.id}>
                    <Card style={{ width: "18rem" }} className="col-sm-3 ">
                      <Card.Img
                        variant="top"
                        src={
                          process.env.REACT_APP_ASSET_URL +
                          data.item_main_picture_url
                        }
                      />
                      <Card.Body>
                        <Card.Title>{data.item_name}</Card.Title>
                        <hr />
                        <Card.Text>{data.item_short_description}</Card.Text>
                        <p>
                          Price:
                          <span>
                            <del> ${data.item_price1}</del> ${data.item_price2}
                          </span>
                        </p>
                        <button
                          variant="primary"
                          onClick={() =>
                            navigate("/cart", {
                              state: {
                                data: data,
                              },
                            })
                          }
                        >
                          View Detail
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Menu;
