import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "../../common/admin/input/index.jsx";
import { BiSearch, BiBell } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "../../style/admin/TopNav.css";
import { logoutAdmin } from "../../component/admin/Login/loginSlide.js";
import { useDispatch } from "react-redux";
TopNav.propTypes = {};

function TopNav(props) {
  const inputSearchStyle = {
    style: {
      background: "rgb(45, 51, 89)",
      border: "none",
      color: "white",
    },
  };
  const [userLogin, setUserLogin] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("auth_name");
    user ? setUserLogin(user) : navigate("/admin/login");
  }, []);

  const submitLogoutAdmin = (e) => {
    e.preventDefault();
    dispatch(logoutAdmin());
    navigate("/admin/login");
  };
  return (
    <div className="top-nav" style={props.style}>
      <div className="top-nav__wrapper">
        <div className="top-nav__left">
          <div className="search-box">
            <Input
              style={inputSearchStyle.style}
              placeholdercolor="red"
              type="text"
              placeholder="Search"
            />
            <span className="px-2">
              <BiSearch color="white" />
            </span>
          </div>
        </div>

        <div className="top-nav__right">
          <div className="profile">
            <ul>
              <li>
                <BiBell color="white" />
              </li>
              <li>
                <span>{userLogin}</span>
              </li>
              <li className="info-box__img">
                <img
                  className="top-nav__img"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80"
                  alt=""
                />
                <ul className="logout-box">
                  <li>
                    <a onClick={submitLogoutAdmin} href="">
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
