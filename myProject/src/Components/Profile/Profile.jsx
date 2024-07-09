import React, { useState } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = ({ images, collaspeEvent }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [erros, setErros] = useState({});
  const navigate = useNavigate();
  const { collasped, setCollasped } = collaspeEvent;
  const [loggedAdmin, setLoggedAdmin] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  console.log("logged admin in profile component", loggedAdmin);
  const handleChange = (e) => {
    console.log("handle change of profile component");
    const { name, value } = e.target;
    console.log("name is", name);
    console.log("value is", value);
    setLoggedAdmin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    console.log("handle change fun of updated profile called");
    console.log("file is",e.target.files[0]);
    setProfileImage(e.target.files[0]);
  };
  const validateValues = (admin) => {
    let errors = {};

    if (!admin.name) {
      errors.name = "this field is necessary";
    }
    if (!admin.email) {
      errors.email = "please enter email";
    }
    if (!admin.phoneNumber) {
      errors.phoneNumber = "please enter phone number";
    }
    console.log("erros in the valid inputs", errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanlde submit fun of profile component");
    const err = validateValues(loggedAdmin);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    console.log("finish submiting fun has been called");
    console.log("name of logged admin", loggedAdmin.name);
    console.log("email of logged admin",loggedAdmin.email);
    const formData = new FormData();
    formData.append("name", loggedAdmin.name);
      formData.append("email", loggedAdmin.email);
      formData.append("phoneNumber", loggedAdmin.phoneNumber);
      if (profileImage) formData.append('profileImage', profileImage);
    const id = loggedAdmin._id;
    const fun = async (req, res) => {
      try {
        const res = await axios.put(
          `/auth/updateAdminProfile/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("res", res);
        console.log("response is", res.data);
        console.log("updated logged user is", res.data.updatedLoggedUser);
        console.log("status is", res.data.status);
        if (res.data.status) {
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.updatedLoggedUser)
          );
          // navigate("/dashboard");
        }
      } catch (err) {
        console.log("error is", err);
      }
    };
    fun();
  };
  return (
    <div className="wrapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />
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
                        <h3>Profile</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 align-self-center">
                    <img src={images.profileImage} alt="" class="img-fluid" />
                  </div>

                  <div class="col-lg-6 align-self-center">
                    <form class="row g-3">
                      <div class="col-md-12">
                        <div class="addProjectlogo">
                          <div class="upload-img-box">
                            <div class="circle">
                              <img
                                src={
                                  profileImage
                                    ? URL.createObjectURL(profileImage)
                                    : `http://localhost:4000${loggedAdmin.profileImage}`
                                }
                                alt=""
                              />
                            </div>
                            <div class="p-image ml-auto">
                              <label for="logoSelect">
                                <div>
                                  <img src={images.camera} alt="" />
                                </div>
                              </label>
                              <input
                                class="file-upload"
                                id="logoSelect"
                                name="profileImage"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                            </div>
                          </div>
                          <h6>Profile Image</h6>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <label for="fullname" class="custom-form-label">
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="fullname"
                          name="name"
                          value={loggedAdmin.name}
                          onChange={handleChange}
                        />
                        {erros.name && (
                          <p className="required-validation">{erros.name}</p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <label for="email" class="custom-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="custom-input-field"
                          id="email"
                          name="email"
                          value={loggedAdmin.email}
                          onChange={handleChange}
                        />
                        {erros.email && (
                          <p className="required-validation">{erros.email}</p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <label for="contact-number" class="custom-form-label">
                          Contact Number{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="contact-number"
                          name="phoneNumber"
                          value={loggedAdmin.phoneNumber}
                          onChange={handleChange}
                        />
                        {erros.phoneNumber && (
                          <p className="required-validation">
                            {erros.phoneNumber}
                          </p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <label for="address" class="custom-form-label">
                          Address
                        </label>
                        <textarea
                          type="text"
                          class="custom-input-field"
                          id="address"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="col-md-12 mt-4">
                        <button
                          onClick={handleSubmit}
                          class="custom-btn col-md-6"
                        >
                          Save
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

export default Profile;
