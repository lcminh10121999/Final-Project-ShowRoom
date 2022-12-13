import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
