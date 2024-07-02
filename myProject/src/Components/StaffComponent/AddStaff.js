import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { useState } from "react";
import axios from "axios";

const AddStaff = ({ images, collaspeEvent }) => {
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");

  const handlePhoto = (e) => {
    e.preventDefault();
    console.log("handle photo fun called");
    setPhoto(e.target.files[0]);
    console.log("photo", photo);
  };
  const handleStaffSubmit = async (e) => {
    
    e.preventDefault();
    console.log("handleStaffSubmit fun has been called");
    console.log("role is", role);
    console.log("full name is", fullName);
    console.log("email is", email);
    console.log("dob is", dob);
    console.log("contact number is", contactNumber);
    console.log("specialization is", specialization);
    console.log("gender is", gender);
    console.log("description is", description);
    const newStaff = {
      role,
      fullName,
      email,
      dob,
      contactNumber,
      specialization,
      gender,
      description,
    };
    console.log("newStaff is", newStaff);
    try {
      const res = await axios.post("/staff/addStaff", newStaff);
      console.log("res", res);
      if (res.data.status) {
        navigate("/staff");
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
                              <a href="staff.html">Staff</a>
                            </li>
                            <li
                              class="breadcrumb-item active"
                              aria-current="page"
                            >
                              Add Staff
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
                          <img src={images.dummyProfile} alt="" />
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
                            name="projectLogo"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handlePhoto}
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
                          value={role}
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        >
                          <option>Select Role Type</option>
                          <option value="Doctor">Doctor</option>
                          <option value="Nurse">Nurse</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="fullname" class="custom-form-label">
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
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
                        <label for="specialization" class="custom-form-label">
                          Specialization{" "}
                          <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="specialization"
                          placeholder="Enetr Specialization"
                          value={specialization}
                          onChange={(e) => {
                            setSpecialization(e.target.value);
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
                          rows="6"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div class="col-md-12 mt-4">
                        <button
                          onClick={handleStaffSubmit}
                          class="custom-btn col-md-4"
                        >
                          Add Staff
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
export default AddStaff;
