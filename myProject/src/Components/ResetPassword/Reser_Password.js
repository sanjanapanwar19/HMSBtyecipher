import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dummyLogo from "../assets/images/dummy_logo.png";
const ResetPassword = ({ images }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { token } = useParams();
  const [passwordToggle, setPasswordToggle] = useState({
    password: false,
    confirmPassword: false,
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit fun of reset password hs been called");
    try {
      const res = await axios.post(`/auth/resetPassword/${token}`, {
        password,
        confirmPassword,
      });
      console.log("response is", res);
      if (res.data.status) {
        navigate("/login");
      }
      console.log(res.data);
    } catch (err) {
      console.log("error is", err);
    }
  };
  return (
    <>
      <div class="login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xxl-3 mx-auto login-formCenterAlign">
              <div class="login-form">
                <div class="header-img">
                  <img src={dummyLogo} alt="" />
                </div>
                <div class="heading-text">
                  <h3>Reset Password</h3>
                  <p>Please give some details to help fill out your account.</p>
                </div>
                <div class="form">
                  <form class="row g-2">
                    <div class="col-md-12">
                      <label for="newPassword" class="custom-form-label">
                        New Password
                      </label>
                      <div className="possionIconInput">
                      <img
                        onClick={(e) => {
                              handlePasswordToggle(
                                e,
                                "password",
                                !passwordToggle.password
                              );
                            }}
                        src={passwordToggle.password ? images.eye:images.offEye}
                        alt=""
                        class="eyeIconView"
                      />
                      <input
                        type={passwordToggle.password?"text":"password"}
                        class="custom-input-field"
                        id="newPassword"
                        placeholder="Enter New Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      </div>
                     
                    </div>
                    <div class="col-md-12">
                      <label for="confirmPassword" class="custom-form-label">
                        Confirm Password
                      </label>
                      <div>
                      <img
                        onClick={(e) => {
                              handlePasswordToggle(
                                e,
                                "confirmPassword",
                                !passwordToggle.confirmPassword
                              );
                            }}
                        src={passwordToggle.confirmPassword ? images.eye:images.offEye}
                        alt=""
                        class="eyeIconView"
                      />
                      <input
                        type="password"
                        class="custom-input-field"
                        id="confirmPassword"
                        placeholder="Enter Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                      </div>
                      
                    </div>
                    <div class="col-md-12 mt-4">
                      <button onClick={handleSubmit} class="custom-btn">
                        Reset Password
                      </button>
                    </div>
                    <p class="d-flex mt-4 justify-content-center">
                      <a href="forgot-password.html">Back</a>
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
export default ResetPassword;
