import React from "react";
import PropTypes from "prop-types";

Input.propTypes = {};

function Input(props) {
  return (
    <div className="form-group ">
      <label>{props.label}</label>
      <input
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onchange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
