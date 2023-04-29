import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteTheProduct, reset } from "../actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const data = useSelector((state) => state.data.cartData);
  const totalAmount = useSelector((state) => state.data.totalAmount);
  const dispatch = useDispatch();
  //delete product from card
  const deleteProduct = (e) => {
    // console.log("Delete");
    dispatch(deleteTheProduct(e));
  };

  //Reset The redux store
  const resetTheReudxStore = () => {
    console.log("Reset");
    dispatch(reset());
    toast.success("🥰 Items have been checkout out", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div className="card-container">
        <div className="card-left-side">
          {data &&
            data.map((value, i) => (
              <div className="left-box" key={i}>
                <img src={value.thumbnail} />
                <div className="card-left-content">
                  <p className="title">{value.title}</p>
                  <p className="price">
                    <BsCurrencyRupee />
                    {value.price}
                  </p>
                </div>
                <Link>
                  <AiFillDelete
                    className="delete-icon"
                    onClick={(e) => {
                      deleteProduct(value.id);
                    }}
                  />
                </Link>
              </div>
            ))}
        </div>
        <div className="card-right-side">
          <h3>Check out List</h3>
          {data &&
            data.map((value, i) => (
              <>
                <div className="itme-box" key={i}>
                  <span className="itm-name">{value.title}</span>
                  <span className="itm-price">
                    <BsCurrencyRupee />
                    {value.price}
                  </span>
                </div>
                <hr className="checkbox-line" />
              </>
            ))}
          {/* total amount box */}
          <div className="total-amount">
            <span className="itm-name">Total</span>
            <span className="itm-price">
              <BsCurrencyRupee />
              {totalAmount}
            </span>
          </div>

          <button className="checkout-btn" onClick={() => resetTheReudxStore()}>
            Chechkout
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
