import React, { useState } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EditStaff = ({ images, collaspeEvent }) => {
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.state.eachStaff);
  const { eachStaff } = location.state;
  console.log("eachStaff", eachStaff);
  const [staffDetails, setStaffDeatils] = useState(eachStaff || {});
  console.log("dob is", staffDetails.dob);
  console.log("locationnnnnn", location.state);
  const handleChange = (e) => {
    console.log("handleChange of edit staff called");
    const { name, value } = e.target;
    console.log("name is", name);
    console.log("value is", value);
    setStaffDeatils((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateValues = (staffItem) => {
    let errors = {};
    if (!staffItem.D_ID) {
      errors.D_ID = "this field is necessary";
    }
    if (staffItem.role !== "Doctor" && staffItem.role !== "Nurse") {
      errors.role = "Please select role";
    }
    if (!staffItem.fullName) {
      errors.fullName = "this field is necessary";
    }
    if (!staffItem.email) {
      errors.email = "this field is necessary";
    }
    if (!staffItem.dob) {
      errors.dob = "this field is necessary";
    }

    if (!staffItem.contactNumber) {
      errors.contactNumber = "this field is necessary";
    }
    if (!staffItem.specialization) {
      errors.specialization = "this field is necessary";
    }
    if (!staffItem.gender) {
      errors.gender = "please select your gender";
    }

    console.log("erros in the valid inputs", errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit fun of edit staff");
    console.log("data is", staffDetails);
    const err = validateValues(staffDetails);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    const id = staffDetails._id;
    console.log("id is", id);
    const fun = async (req, res) => {
      try {
        const res = await axios.put(
          `/staff/updateStaffById/${id}`,
          staffDetails
        );
        console.log("response is", res.data);
        if (res.data.status) {
          toast.success("staff is edited sucessfully");
          setTimeout(() => {
            navigate("/staff");
          }, 2000);
        }
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun();
  };
  return (
    <>
      <ToastContainer />
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
                          <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                              <li class="breadcrumb-item">
                                <a href="staff.html">Staff</a>
                              </li>
                              <li
                                class="breadcrumb-item active"
                                aria-current="page"
                              >
                                Edit Staff
                              </li>
                            </ol>
                          </nav>
                          <h3>Staff</h3>
                        </div>
                      </div>
                    </div>

                    <div class="col-xxl-2">
                      <div class="addProjectlogo">
                        <div class="upload-img-box">
                          <div class="circle">
                            <img src="assets/images/dummy_logo.png" alt="" />
                          </div>
                          <div class="p-image ml-auto">
                            <label for="logoSelect">
                              <div>
                                <img src="assets/images/editIcon.png" alt="" />
                              </div>
                            </label>
                            <input
                              class="file-upload"
                              id="logoSelect"
                              name="projectLogo"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <h6>Profile Image</h6>
                      </div>
                    </div>
                    <div class="col-xxl-10">
                      <form class="row g-3">
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor ID <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            name="D_ID"
                            placeholder="Enter Full Name"
                            value={staffDetails.D_ID}
                            onChange={handleChange}
                          />
                            {erros.D_ID
                             && (
                            <p className="required-validation">{erros.D_ID}</p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="role" class="custom-form-label">
                            Select Role{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <select
                            class="custom-input-field"
                            name="role"
                            onChange={handleChange}
                          >
                            <option>Select Role Type</option>
                            <option value="Doctor" selected>
                              Doctor
                            </option>
                            <option value="Nurse">Nurse</option>
                          </select>
                          {erros.role && (
                            <p className="required-validation">{erros.role}</p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Full Name <span class="required-validation">*</span>
                          </label>
                          <input
                            type="test"
                            class="custom-input-field"
                            id="fullname"
                            name="fullName"
                            value={staffDetails.fullName}
                            onChange={handleChange}
                          />
                          {erros.fullName && (
                            <p className="required-validation">
                              {erros.fullName}
                            </p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="email" class="custom-form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="custom-input-field"
                            id="email"
                            name="email"
                            value={staffDetails.email}
                            onChange={handleChange}
                          />
                          {erros.email && (
                            <p className="required-validation">{erros.email}</p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label class="custom-form-label">
                            Date of Birth{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="date"
                            class="custom-input-field"
                            name="dob"
                            value={staffDetails.dob}
                            onChange={handleChange}
                          />
                          {erros.dob && (
                            <p className="required-validation">{erros.dob}</p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="contact-number" class="custom-form-label">
                            Contact Number{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="contact-number"
                            name="contactNumber"
                            value={staffDetails.contactNumber}
                            onChange={handleChange}
                          />
                          {erros.contactNumber && (
                            <p className="required-validation">
                              {erros.contactNumber}
                            </p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label
                            for="specialization "
                            class="custom-form-label"
                          >
                            Specialization{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="specialization"
                            name="specialization"
                            value={staffDetails.specialization}
                            onChange={handleChange}
                          />
                          {erros.specialization && (
                            <p className="required-validation">
                              {erros.specialization}
                            </p>
                          )}
                        </div>
                        <div class="col-md-12">
                          <label for="gender" class="custom-form-label">
                            Gender <span class="required-validation">*</span>
                          </label>
                          <span class="d-flex">
                            <div class="containGender">
                              <input
                                id="male"
                                type="radio"
                                name="gender"
                                value="male"
                                checked={staffDetails.gender === "male"}
                                onChange={handleChange}
                              />
                              <label for="male">Male</label>
                            </div>
                            <div class="containGender">
                              <input
                                id="female"
                                type="radio"
                                name="gender"
                                checked={staffDetails.gender === "female"}
                                value="female"
                                onChange={handleChange}
                              />
                              <label for="female">Female</label>
                            </div>
                            <div class="containGender">
                              <input
                                id="other"
                                type="radio"
                                name="gender"
                                value="other"
                                checked={staffDetails.gender === "other"}
                                onChange={handleChange}
                              />
                              <label for="other">Other</label>
                            </div>
                          </span>
                          {erros.gender && (
                            <p className="required-validation">
                              {erros.gender}
                            </p>
                          )}
                        </div>

                        <div class="col-md-8">
                          <label for="description" class="custom-form-label">
                            Description
                          </label>
                          <textarea
                            type="text"
                            class="custom-input-field"
                            id="description"
                            name="description"
                            value={staffDetails.description}
                            onChange={handleChange}
                            rows="6"
                          ></textarea>
                        </div>
                        <div class="col-md-12 mt-4">
                          <button
                            class="custom-btn col-md-4"
                            onClick={handleSubmit}
                          >
                            Update
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
    </>
  );
};

export default EditStaff;
