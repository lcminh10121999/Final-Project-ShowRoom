import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import "../../style/admin/MasterLayout.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import Dashboard from "../../component/admin/dashboard";
import TopNav from "./TopNav";

MasterLayout.propTypes = {};

function MasterLayout(props) {
  return (
    <div className="container-fluid master-layout">
      <div class="row master-layout__row">
        <SideBar />
        {/* <TopNav /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default MasterLayout;
