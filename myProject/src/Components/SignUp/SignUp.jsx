import React, { useContext, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ images }) => {
  const navigate = useNavigate();
  const [errosstate, setErrosstate] = useState({});
  const [signUpCredentials, setSignCredentials] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [type1, setType1] = useState("password");
  const [icon1, setIcon1] = useState(images.offEye);
  const [type2, setType2] = useState("password");
  const [icon2, setIcon2] = useState(images.offEye);
  console.log("icon is", icon1);

  const passwordToggle = () => {
    if (type1 === "password") {
      setIcon1(images.eye);
      setType1("text");
    } else {
      setIcon1(images.offEye);
      setType1("password");
    }
  };
  const confirmpasswordToggle = () => {
    if (type2 === "password") {
      setIcon2(images.eye);
      setType2("text");
    } else {
      setIcon2(images.offEye);
      setType2("password");
    }
  };
  const validateValues = (item) => {
    let errors = {};
    if (!item.name) {
      errors.name = "name is required";
    }
    if (!item.phoneNumber) {
      errors.phoneNumber = "please enter phone number";
    } else if (item.phoneNumber < 10) {
      errors.phoneNumber = "enter 10 digits valid number";
    }
    if (!item.email) {
      errors.email = "please enter email";
    }

    if (!item.password) {
      errors.password = "please enter password";
    }
    if (!item.confirmPassword) {
      errors.confirmPassword = "please enter confirm password";
    } else if (item.password !== item.confirmPassword) {
      errors.password = "both password should match";
      errors.confirmPassword = "both password should match";
    }
    console.log("erros in the validate fun", errors);
    return errors;
  };
  const handleChange = (e) => {
    setSignCredentials((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const formSubmited = async (e) => {
    e.preventDefault();
    console.log("sign up credential are", signUpCredentials);
    const err = validateValues(signUpCredentials);
    console.log("err", err);
    setErrosstate(err);
    console.log("err state is after setting", errosstate);
    console.log("length is", Object.keys(errosstate).length);
    console.log("length of error state", Object.keys(errosstate).length);
    console.log("err normal variable length", Object.keys(err).length);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    console.log("finish submiting fun has been called");
    try {
      const res = await axios.post("/auth/register", signUpCredentials);
      console.log("resss", res);
      if (res.data.status) {
        navigate("/login");
      }
    } catch (err) {
      console.log("error is", err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-3 col-lx-6 col-lg-6 col-md-10 col-sm-11 col-11 mx-auto">
            <div className="login-form">
              <div className="header-img">
                <img src={images.logo} alt="" />
              </div>
              <div className="heading-text">
                <h3>Signup</h3>
                <p>Hey, Enter your details to get sign un to your account</p>
              </div>
              <div className="form">
                <form className="row g-2">
                  <div className="col-md-12">
                    <label htmlfor="name" className="custom-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="custom-input-field"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      value={signUpCredentials.name}
                      onChange={handleChange}
                    />
                    {errosstate.name && (
                      <p className="required-validation">{errosstate.name}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="phoneNuber" className="custom-form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="custom-input-field"
                      id="phoneNuber"
                      placeholder="Enter Number"
                      name="phoneNumber"
                      value={signUpCredentials.phoneNumber}
                      onChange={handleChange}
                    />
                    {errosstate.phoneNumber && (
                      <p className="required-validation">
                        {errosstate.phoneNumber}
                      </p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email" className="custom-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="custom-input-field"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      value={signUpCredentials.email}
                      onChange={handleChange}
                    />
                    {errosstate.email && (
                      <p className="required-validation">{errosstate.email}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="custom-form-label">
                      Password
                    </label>
                    <div className="possionIconInput">
                      <img
                        onClick={passwordToggle}
                        src={icon1}
                        alt=""
                        class="eyeIconView"
                      />
                      <input
                        type={type1}
                        className="custom-input-field"
                        id="lastname"
                        placeholder="Enter Password"
                        name="password"
                        value={signUpCredentials.password}
                        onChange={handleChange}
                      />
                    </div>
                    {errosstate.password && (
                      <p className="required-validation">
                        {errosstate.password}
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="custom-form-label">
                      Confirm Password
                    </label>
                    <div className="possionIconInput">
                      <img
                        onClick={confirmpasswordToggle}
                        src={icon2}
                        alt=""
                        class="eyeIconView"
                      />
                      <input
                        type={type2}
                        className="custom-input-field"
                        id="lastname"
                        name="confirmPassword"
                        placeholder="Enter Password"
                        value={signUpCredentials.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    {errosstate.confirmPassword && (
                      <p className="required-validation">
                        {errosstate.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div className="col-md-12 mt-4">
                    <button
                      className="custom-btn"
                      // className={`custom-btn ${submitting && "disabled"}`}
                      onClick={formSubmited}
                    >
                      Signup
                    </button>
                  </div>
                  <p className="d-flex mt-4 justify-content-center">
                    Already Have an Account? &nbsp;
                    <Link to={"/login"}>Login</Link>
                    {/* <a href="/login">Login</a> */}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
