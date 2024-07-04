import React from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAppointment = ({ images, collaspeEvent }) => {
  const location = useLocation();
  console.log(
    "useLocation in view appointment component",
    location.state.eachAppointment
  );
  const { eachAppointment } = location.state || {};
  console.log("eachStaff", eachAppointment);
  const { collasped, setCollasped } = collaspeEvent;
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
                                <a href="appointment.html">Appointment</a>
                              </li>
                              <li
                                class="breadcrumb-item active"
                                aria-current="page"
                              >
                                View Appointment
                              </li>
                            </ol>
                          </nav>
                          <h3>Appointment</h3>
                        </div>
                      </div>
                    </div>

                    <div class="col-xxl-10">
                      <form class="row g-3">
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Patient Id{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            value={eachAppointment.patientId}
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Patient Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            value={eachAppointment.patientName}
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Patient Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            value={eachAppointment.patientEmail}
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="" class="custom-form-label">
                            Patient Image{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="file"
                            class="custom-input-field"
                            id=""
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor Id <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            value={eachAppointment.customD_ID}
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            value={eachAppointment.doctorName}
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="" class="custom-form-label">
                            Doctor Image{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="file"
                            class="custom-input-field"
                            id=""
                            disabled
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="time" class="custom-form-label">
                            Time <span class="required-validation">*</span>
                          </label>
                          <input
                            type="time"
                            class="custom-input-field"
                            id="time"
                            placeholder="dd-mm-yyyy"
                            value={eachAppointment.time}
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
                            id="dateofbirth"
                            placeholder="dd-mm-yyyy"
                            value={eachAppointment.patientDob}
                            disabled
                          />
                        </div>

                        <div class="col-md-8">
                          <label for="description" class="custom-form-label">
                            Description
                          </label>
                          <textarea
                            type="text"
                            class="custom-input-field"
                            id="description"
                            value={eachAppointment.description}
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
    </>
  );
};

export default ViewAppointment;
