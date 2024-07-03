import React, { useState } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EditPatient = ({ images, collaspeEvent }) => {
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.state.eachPatient);
  const { eachPatient } = location.state;
  console.log("eachStaff", eachPatient);
  const [patientDetails, setPatientDeatils] = useState(eachPatient || {});
  console.log("dob is", patientDetails.dob);
  console.log("locationnnnnn", location.state);
  const handleChange = (e) => {
    console.log("handleChange of edit patient called");
    const { name, value } = e.target;
    console.log("name is", name);
    console.log("value is", value);
    setPatientDeatils((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateValues = (patient) => {
    let errors = {};

    if (!patient.fullName) {
      errors.fullName = "please enter the name of the patient";
    }
    if (!patient.email) {
      errors.email = "please enter email";
    }
    if (!patient.dob) {
      errors.dob = "please enter date of birth of the patient";
    }
    if (!patient.contactNumber) {
      errors.contactNumber = "please enter contact number";
    }
    if (!patient.disease) {
      errors.disease = "please enter disease";
    }
    if (!patient.bloodgroup) {
      errors.bloodgroup = "please enter blood group";
    }
    if (!patient.gender) {
      errors.gender = "please select your gender";
    }
    console.log("erros in the valid inputs", errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit fun of edit patient");
    console.log("data is", patientDetails);
    const err = validateValues(patientDetails);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = () => {
    const id = patientDetails._id;
    const fun = async (req, res) => {
      try {
        const res = await axios.put(
          `/patient/updatePatientById/${id}`,
          patientDetails
        );
        console.log("response is", res.data);
        toast.success("patient details are edited sucessfully");
        setTimeout(() => {
          navigate("/patient");
        }, 2000);
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
                              <a href="patient.html">Patient</a>
                            </li>
                            <li
                              class="breadcrumb-item active"
                              aria-current="page"
                            >
                              Edit Patient
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
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="test"
                          class="custom-input-field"
                          id="fullname"
                          name="fullName"
                          value={patientDetails.fullName}
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
                          value={patientDetails.email}
                          onChange={handleChange}
                        />
                         {erros.email && (
                          <p className="required-validation">{erros.email}</p>
                        )}
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
                          name="dob"
                          placeholder="dd-mm-yyyy"
                          value={patientDetails.dob}
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
                          value={patientDetails.contactNumber}
                          onChange={handleChange}
                        />
                          {erros.contactNumber && (
                          <p className="required-validation">
                            {erros.contactNumber}
                          </p>
                        )}
                      </div>
                      <div class="col-md-4">
                        <label for="disease" class="custom-form-label">
                          Disease <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="disease"
                          name="disease"
                          value={patientDetails.disease}
                          onChange={handleChange}
                        />
                         {erros.disease && (
                          <p className="required-validation">
                            {erros.disease}
                          </p>
                        )}
                      </div>
                      <div class="col-md-4">
                        <label for="bloodgroup" class="custom-form-label">
                          Blood Group <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="bloodgroup"
                          name="bloodgroup"
                          value={patientDetails.bloodgroup}
                          onChange={handleChange}
                        />
                         {erros.bloodgroup && (
                          <p className="required-validation">
                            {erros.bloodgroup}
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
                              checked={patientDetails.gender === "male"}
                              onChange={handleChange}
                            />
                            <label for="male">Male</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={patientDetails.gender === "female"}
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
                              checked={patientDetails.gender === "other"}
                              onChange={handleChange}
                            />
                            <label for="other">Other</label>
                          </div>
                        </span>
                        {erros.gender && (
                          <p className="required-validation">{erros.gender}</p>
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
                          value={patientDetails.description}
                          onChange={handleChange}
                          rows="6"
                        >
                        </textarea>
                      </div>
                      <div class="col-md-12 mt-4">
                        <button
                          onClick={handleSubmit}
                          href="#"
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

export default EditPatient;
