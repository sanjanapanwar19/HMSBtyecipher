import React, { useEffect } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewStaff = ({ images, collaspeEvent }) => {
  const location = useLocation();
  console.log("useLocation in view component", location.state.eachStaff);
  const { eachStaff } = location.state || {};
  console.log("eachStaff", eachStaff);
  const { collasped, setCollasped } = collaspeEvent;

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
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                              <a href="staff.html">Staff</a>
                            </li>
                            <li
                              class="breadcrumb-item active"
                              aria-current="page"
                            >
                              View Staff
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
                          <img
                            src={
                              eachStaff.profileImage
                                ? `http://localhost:4000${eachStaff.profileImage}`
                                : images.avatar
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <h6>Profile Image</h6>
                    </div>
                  </div>
                  <div class="col-xxl-10">
                    <form class="row g-3">
                      <div class="col-md-4">
                        <label for="role" class="custom-form-label">
                          Select Role <span class="required-validation">*</span>
                        </label>
                        <select
                          class="custom-input-field"
                          value={eachStaff.role}
                          disabled
                        >
                          <option>Select Role Type</option>
                          <option value="Doctor" selected>
                            Doctor
                          </option>
                          <option value="Nurse">Nurse</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="fullname" class="custom-form-label">
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="test"
                          class="custom-input-field"
                          id="fullname"
                          value={eachStaff.fullName}
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="email" class="custom-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="custom-input-field"
                          id="email"
                          value={eachStaff.email}
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="dateofbirth" class="custom-form-label">
                          Date of Birth{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="date"
                          class="custom-input-field"
                          id={eachStaff.dob}
                          disabled
                        />
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
                          value={eachStaff.contactNumber}
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="specialization " class="custom-form-label">
                          Specialization{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="specialization"
                          value={eachStaff.specialization}
                          disabled
                        />
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
                              checked={eachStaff.gender === "male"}
                            />
                            <label for="male">Male</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={eachStaff.gender === "female"}
                              disabled
                            />
                            <label for="female">Female</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="other"
                              type="radio"
                              name="gender"
                              value="other"
                              checked={eachStaff.gender === "other"}
                              disabled
                            />
                            <label for="other">Other</label>
                          </div>
                        </span>
                      </div>

                      <div class="col-md-8">
                        <label for="description" class="custom-form-label">
                          Description
                        </label>
                        <textarea
                          type="text"
                          class="custom-input-field"
                          id="description"
                          value={eachStaff.description}
                          rows="6"
                          disabled
                        ></textarea>
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

export default ViewStaff;
