import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddStaff = ({ images, collaspeEvent }) => {
  const [newStaff, setNewStaff] =useState (
    {
      role: "",
      fullName: "",
      email: "",
      dob: "",
      contactNumber: "",
      specialization: "",
      gender: "",
    },
  )
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();

  const handlePhoto = (e) => {
    e.preventDefault();
    console.log("handle photo fun called");
    setPhoto(e.target.files[0]);
    console.log("photo", photo);
  };

  const handleChange = (e) => {
    setNewStaff((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const validateValues = (staffItem) => {
    let errors = {};

    if (!staffItem.role) {
      errors.role = "this field is necessary";
    }
    if (!staffItem.fullName) {
      errors.fullName = "this field is necessary";
    }
    if (!staffItem.email) {
      errors.email = "this field is necessary";
    }
    if (!staffItem.dob) {
      errors.dob = "this field is necessary";
    }

    if (!staffItem.contactNumber) {
      errors.contactNumber = "this field is necessary";
    }
    if (!staffItem.specialization) {
      errors.specialization = "this field is necessary";
    }
    if (!staffItem.gender) {
      errors.gender = "please select your gender";
    }

    console.log("erros in the valid inputs", errors);
    return errors;
  };
  const handleStaffSubmit = async (e) => {
    e.preventDefault();
    const err = validateValues(newStaff);
    console.log("err", err);
    setErros(err);
    const length = Object.keys(err).length;
    if (length === 0) {
      finishSubmiting();
    }
  };

  const finishSubmiting = async () => {
    console.log("newStaff is", newStaff);
    try {
      const res = await axios.post("/staff/addStaff", newStaff);
      console.log("res", res);
      if (res.data.status) {
        toast.success("staff is added sucessfully");
        setTimeout(() => {
          navigate("/staff");
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
                          name="role"
                          value={newStaff.role}
                          onChange={handleChange}
                        >
                          <option>Select Role Type</option>
                          <option value="Doctor">Doctor</option>
                          <option value="Nurse">Nurse</option>
                        </select>
                        {erros.role && (
                          <p className="required-validation">{erros.role}</p>
                        )}
                      </div>
                      <div class="col-md-4">
                        <label for="fullname" class="custom-form-label">
                          Full Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="fullname"
                          name="fullName"
                          placeholder="Enter Full Name"
                          value={newStaff.fullName}
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
                          placeholder="Enter Email"
                          name="email"
                          value={newStaff.email}
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
                          value={newStaff.dob}
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
                          value={newStaff.contactNumber}
                          onChange={handleChange}
                        />
                        {erros.contactNumber && (
                          <p className="required-validation">
                            {erros.contactNumber}
                          </p>
                        )}
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
                          name="specialization"
                          value={newStaff.specialization}
                          onChange={handleChange}
                        />
                        {erros.specialization && (
                          <p className="required-validation">
                            {erros.specialization}
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
                              checked={newStaff.gender === "male"}
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
                              checked={newStaff.gender === "female"}
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
                              checked={newStaff.gender === "other"}
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
                          placeholder="Enter Description"
                          rows="6"
                          name="description"
                          value={newStaff.description}
                          onChange={handleChange}
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
      </>
  );
};
export default AddStaff;
