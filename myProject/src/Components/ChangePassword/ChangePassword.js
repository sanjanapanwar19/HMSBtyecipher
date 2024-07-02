import React, { useState } from "react";
import Header from "../../Header/Header";
import Sidebar from "../../SideBar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = ({ images, collaspeEvent }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("change password component rendered");
  const navigate = useNavigate();
  console.log("collaspe event in patient module", collaspeEvent);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  console.log("logged user is change password component", loggedUser);

  const { collasped, setCollasped } = collaspeEvent;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit of change password called");
    const data = {
      oldPassword,
      newPassword,
      confirmPassword,
    };
    const id = loggedUser._id;
    console.log("id in the change password component is", id);
    const fun = async (req, res) => {
      try {
        const res = await axios.put(`/auth/changePassword/${id}`, data);
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

                  <div class="col-xxl-6 align-self-center">
                    <img
                      src="assets/images/changePassword.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-xxl-6 align-self-center">
                    <form class="row g-3">
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          Old Password{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="password"
                          class="custom-input-field"
                          id="fullname"
                          name="Old Password"
                          placeholder="Enter Old Password"
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          New Password{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="password"
                          class="custom-input-field"
                          id="fullname"
                          name="New Password"
                          placeholder="Enter New Password"
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          Confirm Password{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="password"
                          class="custom-input-field"
                          id="fullname"
                          name="Confirm Password"
                          placeholder="Enter Confirm Password"
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                        />
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
