import React from "react";
import PropTypes from "prop-types";
import Input from "../../common/admin/input/index.jsx";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../style/admin/TopNav.css";
TopNav.propTypes = {};

function TopNav(props) {
  return (
    <div className="top-nav">
      <div className="top-nav__wrapper">
        <div className="search-box">
          <Input type="text" label="abc" placeholder="Nhập ký tự" />
          <span>
            <BiSearch />
          </span>
        </div>
        <div className="top-nav__right">
          <div className="profile">
            <Link to="/admin/dashboard">
              <img
                src="https://finewinestore.vn/img/ruou-vang-phap-nhap-khau-hang-va-bang-gia-ruou-vang-phap-uy-tin-3.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
