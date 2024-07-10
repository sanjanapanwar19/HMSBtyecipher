import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddStaff = ({ images, collaspeEvent }) => {
  // const [profileImage, setProfileImage] = useState(null);
  const [newStaff, setNewStaff] = useState({
    profileImage: null,
    D_ID: "",
    role: "",
    fullName: "",
    email: "",
    dob: "",
    contactNumber: "",
    specialization: "",
    gender: "",
    description: "",
  });
  const [erros, setErros] = useState({});
  const { collasped, setCollasped } = collaspeEvent;
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      console.log("profile image");
      console.log(e.target.files[0]);
      setNewStaff((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setNewStaff((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validateValues = (staffItem) => {
    let errors = {};
    if (!staffItem.profileImage) {
      errors.profileImage = "please upload image";
    }
    if (!staffItem.D_ID) {
      errors.D_ID = "this field is necessary";
    }
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
    console.log("finish submiting fun of ass staff module called");
    console.log("newStaff is", newStaff);
    const formData = new FormData();
    Object.keys(newStaff).forEach((key) => {
      formData.append(key, newStaff[key]);
    });
    try {
      const res = await axios.post("/staff/addStaff", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res", res);
      if (res.data.status) {
        toast.success("staff is added sucessfully");
        setTimeout(() => {
          navigate("/staff");
        }, 2000);
      } else {
        console.log("else block of add staff module");
      }
    } catch (err) {
      console.log("catch block of add staff module");
      console.log("err is", err);
      console.log("err field is", err.response.data.field);
      console.log("err message is", err.response.data.msg);
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
                                <Link to={"/staff"}>Staff</Link>
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
                            <img
                              src={
                                newStaff.profileImage
                                  ? URL.createObjectURL(newStaff.profileImage)
                                  : `http://localhost:4000${newStaff.profileImage}`
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
                            />
                          </div>
                        </div>
                        {erros.profileImage && (
                          <p className="required-validation">
                            {erros.profileImage}
                          </p>
                        )}
                        <h6>
                          Profile Image{" "}
                          <span class="required-validation">*</span>
                        </h6>
                      </div>
                    </div>
                    <div class="col-xxl-10">
                      <form class="row g-3">
                        <div class="col-md-4">
                          <label for="fullname" class="custom-form-label">
                            Doctor ID <span class="required-validation">*</span>
                          </label>
                          <input
                            type="text"
                            class="custom-input-field"
                            id="fullname"
                            name="D_ID"
                            placeholder="Enter Full Name"
                            value={newStaff.D_ID}
                            onChange={handleChange}
                          />
                          {erros.D_ID && (
                            <p className="required-validation">{erros.D_ID}</p>
                          )}
                        </div>
                        <div class="col-md-4">
                          <label for="role" class="custom-form-label">
                            Select Role{" "}
                            <span class="required-validation">*</span>
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
                            Email <span class="required-validation">*</span>
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
