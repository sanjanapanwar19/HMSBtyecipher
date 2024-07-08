import dummyLogo from "../assets/images/dummy_logo.png";
import Dashboard from "../assets/icons/Dashboard.svg";
import appointment from "../assets/icons/appointment.svg";
import patient from "../assets/icons/patient.svg";
import staff from "../assets/icons/staff.svg";
import collaspebtn from "../assets/icons/collaps-btn.svg";
import avtar from "../assets/icons/avatar.png";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const AddAppointment = ({ images, collaspeEvent }) => {
  console.log("add appointment component has been rendered");
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    patientEmail: "",
    doctorName: "",
    doctorEmail: "",
    time: "",
    description: "",
  });
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewAppointment((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const validateValues = (appointmentItem) => {
    let errors = {};

    if (!appointmentItem.patientName) {
      errors.patientName = "this field is necessary";
    }
    if (!appointmentItem.patientEmail) {
      errors.patientEmail = "this field is necessary";
    }
    if (!appointmentItem.doctorName) {
      errors.doctorName = "this field is necessary";
    }
    if (!appointmentItem.doctorEmail) {
      errors.doctorName = "this field is necessary";
    }
    if (!appointmentItem.time) {
      errors.time = "this field is necessary";
    }
    if (!appointmentItem.description) {
      errors.description = "please select your gender";
    }
    console.log("erros in the valid inputs", errors);
    return errors;
  };
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    console.log("handle appointment fun has been called");
    const err = validateValues(newAppointment);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    console.log("finish submiting of add appointment fun has been called");
    console.log("new appointment is", newAppointment);
    try {
      const res = await axios.post(
        "/appointment/addAppointment",
        newAppointment
      );
      console.log("res", res);
      console.log("new added appointment is", res.data.bookedAppointment);
      if (res.data.status) {
        toast.success("appointment  is booked sucessfully");
        setTimeout(() => {
          navigate("/appointment");
        }, 2000);
      }
    } catch (err) {
      console.log("error is", err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div class="wapper">
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
                                <a href="appointment.html">My Appointment</a>
                              </li>
                              <li
                                class="breadcrumb-item active"
                                aria-current="page"
                              >
                                Add Appointment
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
                            id="fullname"
                            name="patientName"
                            placeholder="Enter Patient Name"
                            value={newAppointment.patientName}
                            onChange={handleChange}
                          />
                          {erros.patientName && (
                            <p className="required-validation">
                              {erros.patientName}
                            </p>
                          )}
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
                            placeholder="Enter Patient Email"
                            value={newAppointment.patientEmail}
                            onChange={handleChange}
                          />
                          {erros.patientEmail && (
                            <p className="required-validation">
                              {erros.patientEmail}
                            </p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="" class="custom-form-label">
                            Patient Image{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input type="file" class="custom-input-field" id="" />
                        </div>

                        <div class="col-md-4">
                          <label for="doctorid" class="custom-form-label">
                            Doctor Name{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="doctorid"
                            placeholder="Enter Doctor Name"
                            name="doctorName"
                            value={newAppointment.doctorName}
                            onChange={handleChange}
                          />
                          {erros.doctorName && (
                            <p className="required-validation">
                              {erros.doctorName}
                            </p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="doctorid" class="custom-form-label">
                            Doctor Email{" "}
                            <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="doctorid"
                            placeholder="Enter Doctor email"
                            name="doctorEmail"
                            value={newAppointment.doctorEmail}
                            onChange={handleChange}
                          />
                          {erros.doctorEmail && (
                            <p className="required-validation">
                              {erros.doctorEmail}
                            </p>
                          )}
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
                            name="time"
                            value={newAppointment.time}
                            onChange={handleChange}
                          />
                          {erros.time && (
                            <p className="required-validation">{erros.time}</p>
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
                            placeholder="Enter Description"
                            rows="6"
                            name="description"
                            value={newAppointment.description}
                            onChange={handleChange}
                          ></textarea>
                          {erros.description && (
                            <p className="required-validation">
                              {erros.description}
                            </p>
                          )}
                        </div>
                        <div class="col-md-12 mt-4">
                          <button
                            onClick={handleAppointmentSubmit}
                            class="custom-btn col-md-4"
                          >
                            Add Appointment
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
export default AddAppointment;
