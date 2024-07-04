import { useState } from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import DashBoard from "./Components/DashBoard/DashBoard";
import ForgotPassword from "./Components/ForgotPassword/Forgot_Password";
import ResetPassword from "./Components/ResetPassword/Reser_Password";

import Profile from "./Components/Profile/Profile";
import Patient from "./Components/Patient/Patient";
import Staff from "./Components/Staff/Staff";
import add from "../src/Components/assets/icons/add.svg";
import appointmentImg from "../src/Components/assets/icons/appointment.svg";
import avatar from "../src/Components/assets/icons/avatar.png";
import collapsBtn from "../src/Components/assets/icons/collaps-btn.svg";
import dashboard from "../src/Components/assets/icons/Dashboard.svg";
import Delete from "../src/Components/assets/icons/Delete.svg";
import edit from "../src/Components/assets/icons/Edit.svg";
import patient from "../src/Components/assets/icons/patient.svg";
import search from "../src/Components/assets/icons/search.svg";
import staff from "../src/Components/assets/icons/staff.svg";
import view from "../src/Components/assets/icons/view.svg";
import camera from "../src/Components/assets/images/camera.png";
import deleteModelIcon from "../src/Components/assets/images/deleteModal_icon.png";
import dummyLogo from "../src/Components/assets/images/dummy_logo.png";
import dummyProfile from "../src/Components/assets/images/dummyProfile.png";
import editIcon from "../src/Components/assets/images/editIcon.png";
import Ellipse7 from "../src/Components/assets/images/Ellipse 7.png";
import eye from "../src/Components/assets/images/eye.png";
import loginBg from "../src/Components/assets/images/login-bg.png";
import offEye from "../src/Components/assets/images/off-eye.png";
import picture from "../src/Components/assets/images/picture.png";
import sidebarBg from "../src/Components/assets/images/sidebar_bg.png";
import smallLogo from "../src/Components/assets/images/small_logo.png";
import ChangePasswordImg from "../src/Components/assets/images/changePassword.png";
import AddStaff from "./Components/StaffComponent/AddStaff";
import EditStaff from "./Components/StaffComponent/EditStaff";
import ViewStaff from "./Components/StaffComponent/ViewStaff";
import Addpatient from "./Components/PatientComponent/AddPatient";
import EditPatient from "./Components/PatientComponent/EditPatient";
import ViewPatient from "./Components/PatientComponent/ViewPatient";
import Appointment from "./Components/AppointmentComponent/Appointment";
import AddAppointment from "./Components/AppointmentComponent/AddAppointment";
import EditAppointment from "./Components/AppointmentComponent/EditAppointment";
import ViewAppointment from "./Components/AppointmentComponent/ViewAppointment";

import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import ChangePassword from "./Components/ChangePassword/ChangePassword";

function App() {
  const [collasped, setCollasped] = useState(false);
  const images = {
    add,
    appointmentImg,
    avatar,
    collapsBtn,
    dashboard,
    Delete,
    edit,
    patient,
    search,
    staff,
    view,
    camera,
    deleteModelIcon,
    dummyLogo,
    dummyProfile,
    editIcon,
    Ellipse7,
    eye,
    loginBg,
    offEye,
    picture,
    sidebarBg,
    smallLogo,
    ChangePasswordImg,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp images={images} />} />
        <Route path="/login" element={<Login images={images} />} />
        <Route
          path="/forgotPassword"
          element={<ForgotPassword images={images} />}
        />
        <Route
          path="/resetPassword/:token"
          element={<ResetPassword images={images} />}
        />
        <Route
          path="/changePassword"
          element={
            <ChangePassword
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/appointment"
          element={
            <Appointment
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/addAppointment"
          element={
            <AddAppointment
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/editAppointment"
          element={
            <EditAppointment
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/viewAppointment"
          element={
            <ViewAppointment
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/patient"
          element={
            <Patient
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/addPatient"
          element={
            <Addpatient
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/editPatient"
          element={
            <EditPatient
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/ViewPatient"
          element={
            <ViewPatient
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/staff"
          element={
            <Staff
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/AddStaff"
          element={
            <AddStaff
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/EditStaff"
          element={
            <EditStaff
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
        <Route
          path="/ViewStaff"
          element={
            <ViewStaff
              images={images}
              collaspeEvent={{ collasped, setCollasped }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
