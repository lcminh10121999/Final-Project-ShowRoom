import React from "react";
import PropTypes from "prop-types";
import "../../../style/admin/TitleContent.css";
TitleContent.propTypes = {};

function TitleContent(props) {
  return <div className="title">{props.title}</div>;
}

export default TitleContent;
