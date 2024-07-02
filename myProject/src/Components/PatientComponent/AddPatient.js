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
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [disease, setDiases] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");

  const handlePatientSubmit = async (e) => {
    e.preventDefault();
    console.log("handle patient Submit fun has been called");
    console.log("patient name is", fullName);
    console.log("email is", email);
    console.log("dob is", dob);
    console.log("contact number is", contactNumber);
    console.log("disease is", disease);
    console.log("blood group is", bloodgroup);
    console.log("gender is", gender);
    console.log("description is", description);

    const newPatient = {
      fullName,
      email,
      dob,
      contactNumber,
      disease,
      bloodgroup,
      gender,
      description,
    };
    console.log("newPatient is", newPatient);
    try {
      const res = await axios.post("/patient/addPatient", newPatient);
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
                          placeholder="Enter Full Name"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
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
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
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
                          value={dob}
                          onChange={(e) => {
                            setDob(e.target.value);
                          }}
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
                          placeholder="Enter Contect Nubmer"
                          value={contactNumber}
                          onChange={(e) => {
                            setContactNumber(e.target.value);
                          }}
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
                          placeholder="Enetr Disease"
                          value={disease}
                          onChange={(e) => {
                            setDiases(e.target.value);
                          }}
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
                          placeholder="Enetr Blood Group"
                          value={bloodgroup}
                          onChange={(e) => {
                            setBloodGroup(e.target.value);
                          }}
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
                              checked={gender === "male"}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label for="male">Male</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={gender === "female"}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label for="female">Female</label>
                          </div>
                          <div class="containGender">
                            <input
                              id="other"
                              type="radio"
                              name="gender"
                              value="other"
                              checked={gender === "other"}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
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
                          placeholder="Enter Description"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
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
