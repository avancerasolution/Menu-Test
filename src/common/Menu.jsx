import Card from "react-bootstrap/Card";
import { BsCartDash } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenuData } from "../Redux/action/menu";
import { toast, Toaster } from "react-hot-toast";
import { fetchCategory } from "../Redux/action/category";
import banner2 from "../assets/banner2.jpg";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.menu);
  const { category } = useSelector((state) => state.category);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryClick = (filterId) => {
    const filteredResult = data.filter(
      (item) => item.Items_Category.item_category_id === filterId
    );

    setFilteredData(filteredResult);
  };
  console.log(filteredData, "okok");
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
      <Toaster />
      <div className="menuHeader">
        <h2>Menu</h2>
        <h1>Most Popular Items</h1>
      </div>
      <div className="filterBtn">
        <button onClick={() => handleCategoryClick()}>
          <BiFoodMenu /> All
        </button>
        {category &&
          category.map((item) => (
            <>
              <button
                onClick={() => handleCategoryClick(item.item_category_id)}
                key={item._id}
              >
                {/* <img src={item.category_code} alt="img" /> */}
                {item.category_code}
              </button>
            </>
          ))}
      </div>
      <div className="container menu">
        {filteredData.length > 0 ? (
          <div className="row">
            {filteredData &&
              filteredData.map((data) => (
                <div className="col-sm-4 cards" key={data.id}>
                  <Card style={{ width: "18rem" }} className="col-sm-3 ">
                    <Card.Img
                      variant="top"
                      src={
                        "http://192.168.100.12:5000/assets/" +
                        data.item_main_picture_url_thumb
                      }
                    />
                    <Card.Body>
                      <Card.Title>{data.item_name}</Card.Title>
                      <hr />
                      <Card.Text>{data.item_short_description}</Card.Text>
                      <p>
                        Price:{" "}
                        <span>
                          {" "}
                          <del> ${data.item_price2}</del>${data.item_price1}
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
                        <BsCartDash /> Add to Cart
                      </button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        ) : (
          <>
            <div className="row">
              {filteredData &&
                filteredData.map((data) => (
                  <div className="col-sm-4 cards" key={data.id}>
                    <Card style={{ width: "18rem" }} className="col-sm-3 ">
                      <Card.Img
                        variant="top"
                        src={
                          "http://192.168.100.12:5000/assets/" +
                          data.item_main_picture_url_thumb
                        }
                      />
                      <Card.Body>
                        <Card.Title>{data.item_name}</Card.Title>
                        <hr />
                        <Card.Text>{data.item_short_description}</Card.Text>
                        <p>
                          Price:
                          <span>
                            <del> ${data.item_price2}</del> ${data.item_price1}
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
                          <BsCartDash /> Add to Cart
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
