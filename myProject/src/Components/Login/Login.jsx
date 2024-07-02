import axios from "axios";
import React, { useState} from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ images }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit function of login component has been called");
    const credentials = {
      email,
      password,
    };
    try {
      const res = await axios.post("/auth/login", credentials);
      console.log("response is", res);
      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.loggedUser));
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("error is", err);
    }
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-3 col-lx-6 col-lg-6 col-md-10 col-sm-11 col-11 mx-auto">
            <div className="login-form">
              <div className="header-img">
                <img src={images.dummyLogo} alt="" />
              </div>
              <div className="heading-text">
                <h3>Login</h3>
                <p>Hey, Enter your details to get sign in to your account</p>
              </div>
              <div className="form">
                <form className="row g-2">
                  <div className="col-md-12">
                    <label htmlFor="email" className="custom-form-label">
                      Email
                    </label>
                    <input
                      type="test"
                      className="custom-input-field"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="password" className="custom-form-label">
                      Password
                    </label>
                    <input
                      type="test"
                      className="custom-input-field"
                      id="lastname"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="forget-password">
                    <div className="form-check d-flex">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      &nbsp;
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Remember Me
                      </label>
                    </div>
                    <Link to={"/forgotPassword"} className="password-btn">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="col-md-12 mt-4">
                    <a
                      href="/sanja"
                      className="custom-btn"
                      onClick={handleSubmit}
                    >
                      Login
                    </a>
                  </div>
                  <p className="d-flex mt-4 justify-content-center">
                    Don’t have an Account ? &nbsp;
                    <Link to={"/"}>Sign Up</Link>
                    {/* <a href="signup.html">Sign Up</a> */}
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
export default Login;
