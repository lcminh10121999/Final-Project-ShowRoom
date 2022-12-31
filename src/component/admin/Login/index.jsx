import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../../../style/admin/Login.css";
import Input from "../../../common/admin/input";
import Button from "../../../common/admin/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, listUser } from "./loginSlide";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";

Login.propTypes = {};

function Login(props) {
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  // const userList = useSelector((sate) => sate.userLogin.userList);
  const [listError, setListError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // dispatch(listUser());
    if (!isLoading) {
      toast.success("Login success");
      navigate("admin/dashboard");
      console.log(isLoading);
    }
  }, [isLoading]);
  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    console.log(loginInput);
  };
  const emailLogin = loginInput.email;
  const passwordLogin = loginInput.password;
  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailLogin,
      password: passwordLogin,
    };

    if (!emailLogin && !passwordLogin) {
      console.log("2");
      toast.error("Woh! Some thing wrong");
      setListError({
        emailError: "Email ís Required",
        passwordError: "Password is Required",
      });
      return;
    } else if (!emailLogin) {
      console.log("email");
      toast.error("Woh! Some thing wrong");
      setListError({
        emailError: "Email ís Required",
        passwordError: "",
      });
    } else if (!passwordLogin) {
      console.log("password");
      setListError({
        emailError: "",
        passwordError: "Password is Required",
      });
      toast.error("Woh! Some thing wrong");
    } else if (emailLogin.length < 5) {
      setListError({
        emailError: "The email must be at least 5 characters.",
        passwordError: "",
      });
      toast.error("Woh! Some thing wrong");
    } else if (!mailformat.test(emailLogin)) {
      setListError({
        emailError: "Enter Corret Email Format",
        passwordError: "",
      });
      toast.error("Woh! Some thing wrong");
    } else if (passwordLogin.length < 5) {
      setListError({
        emailError: "",
        passwordError: "The Password must be at least 5 characters.",
      });
      toast.error("Woh! Some thing wrong");
      return;
    } else {
      setListError({
        emailError: "",
        passwordError: "",
      });
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post("/api/login", data).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_name", res.data.username);
            swal("success", res.data.message, "success");
            setIsLoading(false);
          } else if (res.data.status === 401) {
            // swal("Warning", res.data.message, "warning");

            setListError({
              emailError: "Wrong Email or Password",
              passwordError: "Wrong Email or Password",
            });
            toast.error("Woh! Some thing wrong");
          } else if (res.data.status === 403) {
            toast.warning("Woh! Permission Denied");
            setListError({
              emailError: res.data.message,
              passwordError: res.data.message,
            });
          } else {
            // setLoginInput({
            //   ...loginInput,
            //   error_list: res.data.validation_error,
            // });
            toast.warning("Woh! Some thing wrong");
            setListError({
              emailError: res.data.validation_error.email,
              passwordError: res.data.validation_error.password,
            });
          }
        });
      });
    }
    // else {
    //   userList.map((item) => {
    //     if (item.email !== loginInput.email) {
    //       console.log("f");
    //       setListError({
    //         emailError: "Wrong Email or Password",
    //         passwordError: "Wrong Email or Password",
    //       });
    //       return;
    //     } else {
    //       const data = {
    //         email: emailLogin,
    //         password: passwordLogin,
    //       };
    //       dispatch(loginAdmin(data));
    //       setTimeout(() => {
    //         navigate("admin/dashboard");
    //       }, 12000);
    //       return;
    //     }
    //   });
    // }
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <ToastContainer />
      <div
        class="row justify-content-center align-items-center login-row"
        style={{ height: "100%" }}
      >
        <div className="login-wrapper">
          <div className="login-form">
            <form action="" onSubmit={loginSubmit}>
              <div className="from-title">
                <h5>
                  Fibo<span>ERP</span>
                </h5>
              </div>
              <div className="login-input__group ">
                <Input
                  placeholder="Email"
                  name="email"
                  onchange={handleChange}
                  value={loginInput.email}
                  style={inputLogintStyle.style}
                  type="input"
                />
                {listError.emailError ? (
                  <span style={{ color: "red" }}> {listError.emailError}</span>
                ) : (
                  <span style={{ display: "none" }}> abc</span>
                )}

                {/* <span style={{ color: "red" }}>
                  {loginInput.error_list.email}
                </span> */}
              </div>
              <div className="login-input__group">
                <Input
                  placeholder="Password"
                  name="password"
                  onchange={handleChange}
                  value={loginInput.password}
                  style={inputLogintStyle.style}
                  type="password"
                />
                {listError.passwordError ? (
                  <span style={{ color: "red" }}>
                    {listError.passwordError}
                  </span>
                ) : (
                  <span style={{ display: "none" }}> abc</span>
                )}
                {/* <span style={{ color: "red" }}>
                  {loginInput.error_list.password}
                </span> */}
              </div>
              <div className="login-input__group login-input__group__checkbox">
                <div class="form-check">
                  <input
                    className="form-check-input checkbox-login"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="login-input__group">
                <div className="form-bottom">
                  <Button className="button-58" type="submit" text="Login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
