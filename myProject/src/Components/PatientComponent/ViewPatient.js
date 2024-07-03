import React from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ViewPatient = ({ images, collaspeEvent }) => {
  
  const location = useLocation();
  console.log("useLocation in view component", location.state.eachPatient);
  const { eachPatient } = location.state || {};
  console.log("eachStaff", eachPatient);
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
                              <a href="patient.html">Patient</a>
                            </li>
                            <li
                              class="breadcrumb-item active"
                              aria-current="page"
                            >
                              View Patient
                            </li>
                          </ol>
                        </nav>
                        <h3>Patient</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-2">
                    <div class="addProjectlogo">
                      <div class="upload-img-box">
                        <div class="circle">
                          <img src="assets/images/dummy_logo.png" alt="" />
                        </div>
                      </div>
                      <h6>Profile Image</h6>
                    </div>
                  </div>
                  <div class="col-xxl-10">
                    <form class="row g-3">
                      <div class="col-md-4">
                        <label for="fullname" class="custom-form-label">
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="test"
                          class="custom-input-field"
                          id="fullname"
                          value={eachPatient.fullName}
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
                          value={eachPatient.email}
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
                          id={eachPatient.dob}
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
                          value={eachPatient.contactNumber}
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="disease" class="custom-form-label">
                          Disease <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="disease"
                          value={eachPatient.disease}
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="bloodgroup" class="custom-form-label">
                          Blood Group <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="bloodgroup"
                          value={eachPatient.bloodgroup}
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
                              cchecked={eachPatient.gender === "male"}
                            />
                            <label for="male">Male</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={eachPatient.gender === "female"}
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
                              checked={eachPatient.gender === "other"}
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
                          name="description"
                          value={eachPatient.description}
                          rows="6"
                          disabled
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </textarea>
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

export default ViewPatient;
