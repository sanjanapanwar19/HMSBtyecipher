import React, { useContext, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ images }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const formSubmited = async (e) => {
    e.preventDefault();
    console.log("form submited fun has been called");
    let formErros = {};
    if (!name) formErros.name = "name is required";
    if (!phoneNumber) {
      formErros.phoneNumber = "phone num is required";
    } else if (phoneNumber.length !== 10) {
      formErros.phoneNumber = "phone number should be 10 digits";
    }
    if (!email) formErros.email = "email is required";
    if (!password) formErros.password = "password is requied";
    if (!confirmPassword)
      formErros.confirmPassword = "confirm password is required";
    if (phoneNumber.length !== 10) {
      formErros.phoneNumber = "phone number should be of 10 characters";
    }
    setErrors(formErros);
   
    console.log("phone number in the sign up component", phoneNumber);
    const newUser = { name, phoneNumber, email, password, confirmPassword };
    console.log("user is ", newUser);
    try {
      const res = await axios.post("/auth/register", newUser);
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors.name && (
                      <p className="required-validation">{errors.name}</p>
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
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email" className="custom-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="custom-input-field"
                      id="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="custom-form-label">
                      Password
                    </label>
                    <div className="possionIconInput">
                      <img src={images.eye} alt="" class="eyeIconView" />
                      <input
                        type="password"
                        className="custom-input-field"
                        id="lastname"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="custom-form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="custom-input-field"
                      id="lastname"
                      placeholder="Enter Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <a
                      href="dashboard.html"
                      className="custom-btn"
                      onClick={formSubmited}
                    >
                      Signup
                    </a>
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
