import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addpatient = ({ images, collaspeEvent }) => {
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const [newpatient, setNewpatient] = useState({
    profileImage: null,
    fullName: "",
    email: "",
    dob: "",
    contactNumber: "",
    disease: "",
    bloodgroup: "",
    gender:"",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      console.log("profile image");
      console.log(e.target.files[0]);
      setNewpatient((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setNewpatient((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validateValues = (patient) => {
    let errors = {};
    if (!patient.profileImage) {
      errors.profileImage = "please upload image";
    }
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
    const length = Object.keys(err).length;
    console.log("length in add patient ", length);
    if (length === 0) {
      finishSubmiting();
    }
  };
  const finishSubmiting = async () => {
    console.log("finish submiting fun of add patient called");
    const formData = new FormData();
    Object.keys(newpatient).forEach((key) => {
      formData.append(key, newpatient[key]);
    });
    try {
      const res = await axios.post("/patient/addPatient", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response of add patient api", res.data);
      if (res.data.status) {
        console.log("res.data.status", res.data.status);
        if (res.data.status) {
          toast.success("patient is added sucessfully");
          setTimeout(() => {
            navigate("/patient");
          }, 2000);
        }
      }
    } catch (err) {
      console.log("error is", err);
      setErros({[err.response.data.field]:err.response.data.msg})
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
                            <img
                              src={
                                newpatient.profileImage
                                  ? URL.createObjectURL(newpatient.profileImage)
                                  : `http://localhost:4000${newpatient.profileImage}`
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
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                        {erros.profileImage && (
                          <p className="required-validation">
                            {erros.profileImage}
                          </p>
                        )}
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
                            Email <span class="required-validation">*</span>
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
                            <p className="required-validation">
                              {erros.disease}
                            </p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="bloodgroup" class="custom-form-label">
                            Blood Group{" "}
                            <span class="required-validation">*</span>
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
    </>
  );
};
export default Addpatient;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
