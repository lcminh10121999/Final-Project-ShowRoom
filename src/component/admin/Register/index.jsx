import React from "react";
import PropTypes from "prop-types";
import "../../../style/admin/Login.css";
import Input from "../../../common/admin/input";
import Button from "../../../common/admin/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "./registerSlide";
Register.propTypes = {};

function Register(props) {
  const inputLogintStyle = {
    style: {
      background: "rgb(45, 51, 89)",
      border: "none",
      color: "white",
      borderRadius: "0px",
      height: "100%",
    },
  };
  const inputCheckBoxLogintStyle = {
    style: {
      background: "rgb(45, 51, 89)",
      border: "none",
      color: "white",
      borderRadius: "0px",
      height: "100%",
    },
  };

  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };
    dispatch(addNewUser(data));
    
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div
        class="row justify-content-center align-items-center login-row"
        style={{ height: "100%" }}
      >
        <div className="login-wrapper">
          <div className="login-form">
            <form action="" onSubmit={registerSubmit}>
              <div className="from-title">
                <h5>
                  Fibo<span>ERP</span>
                </h5>
              </div>
              <div className="login-input__group ">
                <Input
                  placeholder="User Name"
                  name="name"
                  style={inputLogintStyle.style}
                  onchange={handleInput}
                  value={registerInput.name}
                  type="text"
                />
              </div>
              <div className="login-input__group ">
                <Input
                  name="email"
                  placeholder="Email"
                  onchange={handleInput}
                  value={registerInput.email}
                  style={inputLogintStyle.style}
                  type="email"
                />
              </div>
              <div className="login-input__group">
                <Input
                  name="password"
                  placeholder="Password"
                  onchange={handleInput}
                  value={registerInput.password}
                  style={inputLogintStyle.style}
                  type="password"
                />
              </div>

              <div className="login-input__group">
                <div className="form-bottom">
                  <Button className="button-58" type="submit" text="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
