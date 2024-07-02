import dummyLogo from "../assets/images/dummy_logo.png";
import Dashboard from "../assets/icons/Dashboard.svg";
import appointment from "../assets/icons/appointment.svg";
import patient from "../assets/icons/patient.svg";
import staff from "../assets/icons/staff.svg";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import collaspebtn from "../assets/icons/collaps-btn.svg";
import avtar from "../assets/icons/avatar.png";
import dummyProfile from "../assets/images/dummyProfile.png";
import camera from "../assets/images/camera.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Addpatient = ({ images, collaspeEvent }) => {
  const [erros, setErros] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const [newpatient, setNewpatient] = useState({
    fullName: "",
    email: "",
    dob: "",
    contactNumber: "",
    disease: "",
    bloodgroup: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewpatient((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
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
  const handlePatientSubmit = async (e) => {
    e.preventDefault();
    console.log("newPatient is", newpatient);
    const err = validateValues(newpatient);
    console.log("err", err);
    setErros(err);
    setSubmitting(true);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    try {
      const res = await axios.post("/patient/addPatient", newpatient);
      console.log("res", res.data);
      if (res.data.status) {
        navigate("/patient");
        // console.log("navigate to patient route");
      }
    } catch (err) {
      console.log("error is", err);
    }
  };
  return (
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
                              <a href="patient.html">Patient</a>
                            </li>
                            <li
                              class="breadcrumb-item active"
                              aria-current="page"
                            >
                              Add Patient
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
                          <img src={dummyProfile} alt="" />
                        </div>
                        <div class="p-image ml-auto">
                          <label for="logoSelect">
                            <div>
                              <img src={camera} alt="" />
                            </div>
                          </label>
                          <input
                            class="file-upload"
                            id="logoSelect"
                            name="projectLogo"
                            type="file"
                            accept="image/*"
                          />{" "}
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
                          placeholder="Enter Full Name"
                          value={newpatient.fullName}
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
                          placeholder="Enter Email"
                          value={newpatient.email}
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
                          value={newpatient.dob}
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
                          placeholder="Enter Contect Nubmer"
                          value={newpatient.contactNumber}
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
                          placeholder="Enetr Disease"
                          value={newpatient.disease}
                          onChange={handleChange}
                        />
                        {erros.disease && (
                          <p className="required-validation">{erros.disease}</p>
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
                          placeholder="Enetr Blood Group"
                          value={newpatient.bloodgroup}
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
                              checked={newpatient.gender === "male"}
                              onChange={handleChange}
                            />
                            <label className="ps-1" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div class="containGender">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={newpatient.gender === "female"}
                              onChange={handleChange}
                            />
                            <label className="ps-1" for="female">
                              Female
                            </label>
                          </div>
                          <div class="containGender">
                            <input
                              id="other"
                              type="radio"
                              name="gender"
                              value="other"
                              checked={newpatient.gender === "other"}
                              onChange={handleChange}
                            />
                            <label className="ps-1" for="other">
                              Other
                            </label>
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
                          placeholder="Enter Description"
                          value={newpatient.description}
                          onChange={handleChange}
                          rows="6"
                        ></textarea>
                      </div>
                      <div class="col-md-12 mt-4">
                        <button
                          onClick={handlePatientSubmit}
                          class="custom-btn col-md-4"
                        >
                          Add Patient
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
export default Addpatient;
