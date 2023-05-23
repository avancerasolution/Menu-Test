import Card from "react-bootstrap/Card";
import { data } from "../assets/data";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BiFoodMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenuData, getMenu } from "../Redux/action/menu";
import { toast, Toaster } from "react-hot-toast";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.menu);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // const filteredData = data.menuItems.filter((item) =>
  //   selectedCategory ? item.category === selectedCategory : true
  // );
  useEffect(() => {
    if (loading) {
    }

    if (error) {
      toast.error(error);
    }
  }, [error, loading]);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);
  console.log(data);
  return (
    <>
      <Toaster />
      <div className="menuHeader">
        <h2>Menu</h2>
        <h1>Most Popular Items</h1>
      </div>
      <div className="filterBtn">
        <button onClick={() => handleCategoryClick("")}>
          <BiFoodMenu /> All
        </button>

        <button onClick={() => handleCategoryClick("BreakFast")}>
          <AiOutlineCoffee />
          Popular Breakfast
        </button>
        <button onClick={() => handleCategoryClick("Lunch")}>
          <FaHamburger />
          Special Lunch
        </button>
        <button onClick={() => handleCategoryClick("Dinner")}>
          <ImSpoonKnife /> lovely Dinner
        </button>
      </div>
      <div className="container menu">
        <div className="row">
          {data.map((data) => (
            <div className="col-sm-4 cards" key={data.id}>
              <Card style={{ width: "18rem" }} className="col-sm-3 ">
                <Card.Img
                  variant="top"
                  src={data.item_main_picture_url_thumb}
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <hr />
                  <Card.Text>{data.item_short_description}</Card.Text>
                  <p>
                    Price: <span> ${data.item_price1} </span>
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
      </div>
    </>
  );
}

export default Menu;
