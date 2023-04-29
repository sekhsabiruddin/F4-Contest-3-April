import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTheProduct } from "../actions/actions";
import LoadingAnimation from "./Loading";
import { fetchData } from "../actions/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const data = useSelector((state) => state.data.data.products);
  const loading = useSelector((state) => state.data.loading);
  const cartData = useSelector((state) => state.data.cartData);
  // console.log("product is present ", isProductPresent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [loading]);
  //when user click add to cart button data will be data
  if (loading) {
    return <LoadingAnimation />;
  }
  const addToCartBtn = (e) => {
    console.log("sucessfully");
    const { id, title, price, thumbnail } = e;
    // { id, title, price, thumbnail }
    const isProductAlreadyAdded = cartData.some((item) => item.id === id);
    dispatch(addTheProduct({ id, title, price, thumbnail }));
    console.log("isndie btn", isProductAlreadyAdded);

    if (isProductAlreadyAdded) {
      toast.warn("🦄 Product is Alredy Added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("🥰 Product is added ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <div className="home-container">
        {data &&
          data.map((value, i) => (
            <div className="box" key={i}>
              <img src={value.images[0]} alt="" />
              <p>Title : {value.title}</p>
              <p>Price :{value.price}</p>
              <button
                onClick={(e) => {
                  addToCartBtn(value);
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
