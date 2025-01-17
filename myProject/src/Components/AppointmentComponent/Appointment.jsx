import add from "../assets/icons/add.svg";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteAppointment from "./DeleteAppointment";

const Appointment = ({ images, collaspeEvent }) => {
  const [appointment, setAppointment] = useState([]);
  const [searchAppointment, setSearchAppointment] = useState('');
  const [isDeleteClick, setIsDeleteClick] = useState({
    flag: false,
    eachAppointment: {},
  });
  const [searchString, setSearchString] = useState("");
  console.log("is delete clikc", isDeleteClick);
  console.log("collaspe event in appointment module", collaspeEvent);
  const { collasped, setCollasped } = collaspeEvent;
  const deleteHandle = (flag, eachAppointment) => {
    console.log("delete handle in staff called");
    console.log("each satff is", eachAppointment);
    setIsDeleteClick({
      flag: flag,
      eachAppointment: eachAppointment,
    });
  };
  useEffect(() => {
    console.log("use effect of patient module called");
    const fun = async (req, res) => {
      try {
        const res = await axios.get("/appointment/viewAllAppointments");
        console.log("res", res.data);
        setAppointment(res.data.allAppointments);
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun();
  }, [isDeleteClick]);

  const appointments = appointment.filter(value => {
    const searchString = searchAppointment.toLowerCase();
    return (
      value.patientName.toLowerCase().includes(searchString) ||
      value.doctorName.toLowerCase().includes(searchString) ||
      value.customD_ID.toLowerCase().includes(searchString)
      // value.gender.toLowerCase().startsWith(searchString) 
    );
  });

  return (
    <div class="wapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />
      <div className={`main-container ${collasped && "main-content_large"}`}>
        <Header images={images} collaspeEvent={{ collasped, setCollasped }} />
        <div class="content">
          <div class="row mb-3">
            <div class="col-xxl-12">
              <div class="row justify-content-between align-items-center mb-3">
                <div class="col-lg-4">
                  <div class="greetingsText">
                    <div class="greetingsText-heading">
                      <h3>My Appointments</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex">
                  <div class="buttons d-flex">
                    <Link to={"/addAppointment"} class="ctr-btn">
                      <img src={add} alt="" />
                    </Link>
                  </div>
                  <input
                    type="text"
                    class="custom-input-field"
                    placeholder="Search Appointments"
                    value={searchAppointment}
                    onChange={(e) => {
                      setSearchAppointment(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="table-responsive">
                    <table class="custom-table">
                      <thead>
                        <tr>
                          <th scope="col">Appointment ID</th>
                          <th scope="col">Patient Name</th>
                          <th scope="col">Doctor Id</th>
                          <th scope="col">Doctor Name</th>
                          <th scope="col">Time</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((eachAppointment, index) => (
                          <tr>
                            <td>A0{index + 1}</td>
                            <td>
                              <span className="d-flex align-items-center cusProfileCir">
                                <img
                                  src={
                                    eachAppointment.patientImage
                                      ? `http://localhost:4000${eachAppointment.patientImage}`
                                      : images.avatar
                                  }
                                  alt=""
                                />
                                <span>{eachAppointment.patientName}</span>
                              </span>
                            </td>
                            <td>{eachAppointment.customD_ID}</td>
                            <td class="d-flex">
                              <img src="/assets/images/picture.png" alt="" />
                              <span>
                                {eachAppointment.doctorName}
                                <small style={{ display: "block" }}>
                                  {eachAppointment.role}
                                </small>
                              </span>
                            </td>
                            <td>{eachAppointment.time}</td>
                            <td>{eachAppointment.patientDob}</td>
                            <td>
                              <div class="action-btn">
                                <Link
                                  to={"/editAppointment"}
                                  state={{ eachAppointment }}
                                >
                                  <img src={images.edit} alt="" />
                                </Link>
                                <Link
                                  onClick={(e) => {
                                    deleteHandle(true, eachAppointment);
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <img src={images.Delete} alt="" />
                                </Link>
                                <Link
                                  to={"/viewAppointment"}
                                  state={{ eachAppointment }}
                                >
                                  <img src={images.view} alt="" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteAppointment data={{ isDeleteClick, deleteHandle, images }} />
    </div>
  );
};
export default Appointment;
