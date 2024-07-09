import React, { useState, useEffect } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Deletepatient from "../PatientComponent/Deletepatient";

const Patient = ({ images, collaspeEvent }) => {
  console.log("patinet component rendered");
  const [patient, setPatient] = useState([]);
  console.log("total patients are",patient);
  const [searchString, setSearchString] = useState("");
  const [isDeleteClick, setIsDeleteClick] = useState({
    flag: false,
    eachPatient: {},
  });
  console.log("is delete clikc", isDeleteClick);
  console.log("collaspe event in patient module", collaspeEvent);
  const { collasped, setCollasped } = collaspeEvent;
  const deleteHandle = (flag, eachPatient) => {
    console.log("delete handle in staff called");
    console.log("each satff is", eachPatient);
    setIsDeleteClick({
      flag: flag,
      eachPatient: eachPatient,
    });
  };

  
  useEffect(() => {
    console.log("use effect of patient module called");
    const fun = async (req, res) => {
      try {
        const res = await axios.get("/patient/viewAllPatient");
        console.log("res", res.data.allPatient);
        setPatient(res.data.allPatient);
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun();
  }, [isDeleteClick]);
  return (
    <div className="wrapper">
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
                      <h3>Patients</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex">
                  <div class="buttons d-flex">
                    <Link to="/AddPatient" class="ctr-btn">
                      <img src={images.add} alt="" />
                    </Link>
                  </div>
                  <input
                    type="text"
                    class="custom-input-field"
                    placeholder="Search Patient"
                    value=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="table-responsive">
                    <table class="custom-table">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Patient Name</th>
                          <th scope="col">Disease</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patient.map((eachPatient, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <span className="d-flex align-items-center cusProfileCir">
                              <img
                      src={
                        eachPatient.profileImage
                          ? `http://localhost:4000${eachPatient.profileImage}`
                          : images.avatar
                      }
                      alt=""
                    />
                                <span>{eachPatient.fullName}</span>
                              </span>
                            </td>
                            <td>{eachPatient.disease}</td>
                            <td>{eachPatient.gender}</td>
                            <td>{eachPatient.dob}</td>
                            <td>
                              <div class="action-btn">
                                <Link to="/EditPatient" state={{ eachPatient }}>
                                  <img src={images.edit} alt="" />
                                </Link>
                                <Link
                                  onClick={(e) => {
                                    deleteHandle(true, eachPatient);
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <img src={images.Delete} alt="" />
                                </Link>
                                <Link
                                  to={"/ViewPatient"}
                                  state={{ eachPatient }}
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
      <Deletepatient data={{ isDeleteClick, deleteHandle, images }} />
    </div>
  );
};

export default Patient;
