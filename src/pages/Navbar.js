import React from "react";
import { Link } from "react-router-dom";
import { fetchData, addTheProduct, deleteTheProduct } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const data = useSelector((state) => state.data.cartData);

  return (
    <div>
      <header>
        <div className="logo">
          <span>Shoping Cart</span>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/cart" className="card-btn">
            {data.length > 0 ? (
              <div className="icon-div">
                <span className="card-icon">{data.length}</span>
              </div>
            ) : (
              ""
            )}

            <span>Cart</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
