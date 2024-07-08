import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";

const EditAppointment = ({ images, collaspeEvent }) => {
  console.log("edit appointment component has been rendered");
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.state.eachAppointment);
  const { eachAppointment } = location.state;
  console.log("eachAppointment", eachAppointment);
  const [appointmentDetails, setPatientDeatils] = useState(
    eachAppointment || {}
  );
  console.log("dob is", appointmentDetails.patientDob);
  console.log("locationnnnnn", location.state);

  const handleChange = (e) => {
    console.log("handleChange of edit appointment called");
    const { name, value } = e.target;
    console.log("name is", name);
    console.log("value is", value);
    setPatientDeatils((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateValues = (appointment) => {
    let errors = {};

    if (!appointment.patientName) {
      errors.fullName = "please enter this field";
    }
    if (!appointment.patientEmail) {
      errors.email = "please enter this field";
    }
    if (!appointment.doctorName) {
      errors.dob = "please enter this field";
    }
    if (!appointment.doctorEmail) {
      errors.contactNumber = "please enter this field";
    }
    if (!appointment.time) {
      errors.disease = "please enter this field";
    }
    if (!appointment.description) {
      errors.bloodgroup = "please enter this field";
    }
    console.log("erros in the valid inputs", errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit fun of edit appointment");
    console.log("data is", appointmentDetails);
    const err = validateValues(appointmentDetails);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };

  const finishSubmiting = () => {
    const id = appointmentDetails._id;
    const fun = async (req, res) => {
      try {
        const res = await axios.put(
          `/appointment/updateAppointmentById/${id}`,
          appointmentDetails
        );
        console.log("response is", res.data);
        if (res.data.status) {
          toast.success("appointment details are edited sucessfully");
          setTimeout(() => {
            navigate("/appointment");
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
      <div className="wraper">
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
                                Edit Appointment
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
                            Patient Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="patientName"
                            name="patientName"
                            value={appointmentDetails.patientName}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Patient Email{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            name="patientEmail"
                            value={appointmentDetails.patientEmail}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="" class="custom-form-label">
                            Patient Image{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input type="file" class="custom-input-field" id="" />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="doctorName"
                            name="doctorName"
                            value={appointmentDetails.doctorName}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor Eamil{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="doctorEmail"
                            name="doctorEmail"
                            value={appointmentDetails.doctorEmail}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="" class="custom-form-label">
                            Doctor Image{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input type="file" class="custom-input-field" id="" />
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
                            name="time"
                            value={appointmentDetails.time}
                            onChange={handleChange}
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
                            name="description"
                            value={appointmentDetails.description}
                            rows="6"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div class="col-md-12 mt-4">
                          <button
                            onClick={handleSubmit}
                            class="custom-btn col-md-4"
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

export default EditAppointment;
