import React, { useState } from "react";
import Header from "../../Header/Header";
import Sidebar from "../../SideBar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = ({ images, collaspeEvent }) => {
  const [erros, setErros] = useState({});
  const [passwordToggle, setPasswordToggle] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  console.log("change password component rendered");
  const navigate = useNavigate();
  console.log("collaspe event in patient module", collaspeEvent);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  console.log("logged user is change password component", loggedUser);

  const { collasped, setCollasped } = collaspeEvent;
  const handleChange = (e) => {
    setPassword((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const validateValues = (password) => {
    let errors = {};
    if (!password.oldPassword) {
      errors.oldPassword = "Please enter your old password";
    }
    if (!password.newPassword) {
      errors.newPassword = "please enter new password";
    } else if (password.length < 8) {
      errors.newPassword = "password length should be more than 8 characters";
    } else if (!password.confirmPassword) {
      errors.confirmPassword = "Please confirm your passsord";
    } else if (password.newPassword !== password.confirmPassword) {
      errors.newPassword = "Both passord should match";
      errors.confirmPassword = "Both passwod should match";
    }
    console.log("erros in the valid inputs", errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit of change password called");
    const err = validateValues(password);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const handlePasswordToggle = (e, key, value) => {
    e.preventDefault();
    console.log(
      "e in the handle password toggle fun of change passwrod component is",
      e
    );
    console.log("and same fun key is", key);
    setPasswordToggle((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const finishSubmiting = async () => {
    const id = loggedUser._id;
    console.log("id in the change password component is", id);
    const fun = async (req, res) => {
      try {
        const res = await axios.put(`/auth/changePassword/${id}`, password);
        console.log("response is", res.data);
        if (res.data.status) {
          navigate("/Dashboard");
        }
      } catch (err) {
        console.log("error is", err);
      }
    };
    fun();
  };
  return (
    <div className="wrapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />\
      <div className={`main-container ${collasped && "main-content_large"}`}>
        <Header images={images} collaspeEvent={{ collasped, setCollasped }} />
        <div class="content">
          <div class="row mb-3">
            <div class="col-xxl-12">
              <div class="form-body">
                <div class="row">
                  <div class="col-xxl-12">
                    <div class="greetingsText mb-3">
                      <div class="greetingsText-heading">
                        <h3>Change Password</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 align-self-center">
                    <img
                      src={images.ChangePasswordImg}
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-lg-6 align-self-center">
                    <form class="row g-3">
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          Old Password{""}
                          <span class="required-validation">*</span>
                        </label>
                        <div className="possionIconInput">
                          <img
                            onClick={(e) => {
                              handlePasswordToggle(
                                e,
                                "oldPassword",
                                !passwordToggle.oldPassword
                              );
                            }}
                            src={
                              passwordToggle.oldPassword
                                ? images.eye
                                : images.offEye
                            }
                            alt=""
                            class="eyeIconView"
                          />
                          <input
                            type={
                              passwordToggle.oldPassword ? "text" : "password"
                            }
                            class="custom-input-field"
                            id="fullname"
                            name="oldPassword"
                            placeholder="Enter Old Password"
                            value={password.oldPassword}
                            onChange={handleChange}
                          />
                        </div>

                        {erros.oldPassword && (
                          <p className="required-validation">
                            {erros.oldPassword}
                          </p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          New Password{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <div className="possionIconInput">
                          <img
                            onClick={(e) => {
                              handlePasswordToggle(
                                e,
                                "newPassword",
                                !passwordToggle.newPassword
                              );
                            }}
                            src={
                              passwordToggle.newPassword
                                ? images.eye
                                : images.offEye
                            }
                            alt=""
                            class="eyeIconView"
                          />
                          <input
                            type={
                              passwordToggle.newPassword ? "text" : "password"
                            }
                            class="custom-input-field"
                            id="fullname"
                            name="newPassword"
                            placeholder="Enter New Password"
                            value={password.newPassword}
                            onChange={handleChange}
                          />
                        </div>

                        {erros.newPassword && (
                          <p className="required-validation">
                            {erros.newPassword}
                          </p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          Confirm Password{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <div className="possionIconInput">
                          <img
                            onClick={(e) => {
                              handlePasswordToggle(
                                e,
                                "confirmPassword",
                                !passwordToggle.confirmPassword
                              );
                            }}
                            src={
                              passwordToggle.confirmPassword
                                ? images.eye
                                : images.offEye
                            }
                            alt=""
                            class="eyeIconView"
                          />
                          <input
                            type={
                              passwordToggle.confirmPassword
                                ? "text"
                                : "password"
                            }
                            class="custom-input-field"
                            id="fullname"
                            name="confirmPassword"
                            placeholder="Enter Confirm Password"
                            value={password.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>

                        {erros.confirmPassword && (
                          <p className="required-validation">
                            {erros.confirmPassword}
                          </p>
                        )}
                      </div>

                      <div class="col-md-12 mt-4">
                        <button
                          onClick={handleSubmit}
                          class="custom-btn col-md-4"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
