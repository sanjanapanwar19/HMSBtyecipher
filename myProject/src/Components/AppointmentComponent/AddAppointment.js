import dummyLogo from "../assets/images/dummy_logo.png";
import Dashboard from "../assets/icons/Dashboard.svg";
import appointment from "../assets/icons/appointment.svg";
import patient from "../assets/icons/patient.svg";
import staff from "../assets/icons/staff.svg";
import collaspebtn from "../assets/icons/collaps-btn.svg";
import avtar from "../assets/icons/avatar.png";
const AddAppointment = () => {
  return (
    <div class="wapper">
      <div class="sidebar">
        <header>
          <img src={dummyLogo} alt="" class="logo" />
        </header>
        <div class="menu">
          <div class="item">
            <a href="dashboard.html">
              <img src={Dashboard} alt="" />
              <span>Dashboard</span>
            </a>
          </div>
          <div class="item active">
            <a href="appointment.html">
              <img src={appointment} alt="" />
              <span>My Appointments</span>
            </a>
          </div>
          <div class="item">
            <a href="patient.html">
              <img src={patient} alt="" />
              <span>Patients</span>
            </a>
          </div>
          <div class="item">
            <a href="staff.html">
              <img src={staff} alt="" />
              <span>Staff</span>
            </a>
          </div>
        </div>
      </div>
      <div class="main-container">
        <nav class="header-nav">
          <div class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="row w-100">
                <div class="col-xxl-12 d-flex justify-content-between ">
                  <button class="collapse-btn">
                    <img src={collaspebtn} alt="" />
                  </button>
                  <div class="avatar">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={avtar} alt=""></img>
                        <h6>
                          Amit Shah<span>Admin</span>
                        </h6>
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="profile.html">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="change-password.html">
                            Change Password
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="login.html">
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
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
                          Patient Id <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="fullname"
                          placeholder="Enter Patient Id"
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
                          placeholder="Enter Patient Name"
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
                        <label for="doctorName" class="custom-form-label">
                          Doctor Id <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="doctorName"
                          placeholder="Enter Doctor Id"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="doctorid" class="custom-form-label">
                          Doctor Name <span class="required-validation">*</span>
                        </label>
                        <input
                          type="text"
                          class="custom-input-field"
                          id="doctorid"
                          placeholder="Enter Doctor Name"
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
                        <label for="email" class="custom-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="custom-input-field"
                          id="email"
                          placeholder="Enter Email"
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
                          placeholder="Enter Description"
                          rows="6"
                        ></textarea>
                      </div>
                      <div class="col-md-12 mt-4">
                        <a href="/dummyLink" class="custom-btn col-md-4">
                          Add Appointment
                        </a>
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
export default AddAppointment;