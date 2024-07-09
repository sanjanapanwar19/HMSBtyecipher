import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ images }) => {
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(images.offEye);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [erros, setErros] = useState({});
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const passwordToggle = () => {
    if (type === "password") {
      setIcon(images.eye);
      setType("text");
    } else {
      setIcon(images.offEye);
      setType("password");
    }
  };
  const validateValues = (credentials) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
    if (!credentials.email) {
      errors.email = "plea'se enter email";
    } else if (!emailPattern.test(credentials.email)) {
      errors.email = "please enter a valid email";
    }
    if (!credentials.password) {
      errors.password = "please enter password";
    }
    console.log("erros in validate values", errors);
    return errors;
  };
  const handleChange = (e) => {
    setCredentials((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit function of login component has been called");
    console.log("credentials for login are", credentials);
    const err = validateValues(credentials);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    try {
      const res = await axios.post("/auth/login", credentials);
      console.log("response is", res);
      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.loggedUser));
        toast.success("login sucessfully");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      console.log("error is", err);
      console.log("err field", err.response.data.field);
      console.log("err message", err.response.data.msg);
      setErros({[err.response.data.field]:err.response.data.msg})
    }
  };
  return (
    <>
      <ToastContainer />
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
                        value={credentials.email}
                        onChange={handleChange}
                      />
                      {erros.email && (
                        <p className="required-validation">{erros.email}</p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label for="password" className="custom-form-label">
                        Password
                      </label>
                      <div className="possionIconInput">
                        <img
                          onClick={passwordToggle}
                          src={icon}
                          alt=""
                          class="eyeIconView"
                        />
                        <input
                          type={type}
                          className="custom-input-field"
                          id="lastname"
                          placeholder="Enter Password"
                          name="password"
                          value={credentials.password}
                          onChange={handleChange}
                        />
                      </div>
                      {erros.password && (
                        <p className="required-validation">{erros.password}</p>
                      )}
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
    </>
  );
};
export default Login;
