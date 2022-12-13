import React from "react";
import PropTypes from "prop-types";
import { BiSearch, BiCar } from "react-icons/bi";
DashboardCard.propTypes = {};

function DashboardCard(props) {
  return (
    <div className="single-card" style={props.style}>
      <div className="card-content">
        <h4>{props.title}</h4>
        <span>{props.price}</span>
      </div>
      <span>{props.icon}</span>
    </div>
  );
}

export default DashboardCard;
