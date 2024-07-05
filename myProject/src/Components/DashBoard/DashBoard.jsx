import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const DashBoard = ({ images, collaspeEvent }) => {
  const [totalPatients, setTotalPatients] = useState([]);
  const [totalStaffMember, setTotalStaff] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState([]);
  console.log("total patients are", totalPatients.length);
  console.log("total staff members are", totalStaffMember.length);
  console.log("total appointments are", totalAppointments.length);
  console.log("collaspse event is dashboard component", collaspeEvent);
  const { collasped, setCollasped } = collaspeEvent;

  useEffect(() => {
    const fun1 = async (req, res) => {
      try {
        const res1 = await axios.get("/patient/viewAllPatient");
        console.log("res 1", res1.data.allPatient);
        setTotalPatients(res1.data.allPatient);
      } catch (err) {
        console.log("err is", err);
      }
    };
    const fun2 = async (req, res) => {
      try {
        const res2 = await axios.get("/staff/viewAllStaff");
        console.log("res 2", res2.data.allStaff);
        setTotalStaff(res2.data.allStaff);
      } catch (err) {
        console.log("err is", err);
      }
    };
    const fun3 = async (req, res) => {
      try {
        const res3 = await axios.get("/appointment/viewAllAppointments");
        console.log("res 3", res3.data.allAppointments);
        setTotalAppointments(res3.data.allAppointments);
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun1();
    fun2();
    fun3();
  }, []);

  return (
    <div class="wapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />
      <div className={`main-container ${collasped && "main-content_large"}`}>
        <Header images={images} collaspeEvent={{ collasped, setCollasped }} />
        <div class="content">
          <div class="row mb-3">
            <div class="col-xxl-12">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="greetingsText">
                    <div class="greetingsText-heading">
                      <h3>Dashboard</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 mb-3">
                      <div class="custom-card offlineEmployee">
                        <div class="left-data">
                          <div class="heading">
                            <h2 class="count">Welcome</h2>
                            <span>Health Care</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6  mb-3">
                      <div class="custom-card presentEmployee">
                        <div class="left-data">
                          <div class="heading">
                            <h2 class="count">{totalAppointments.length}</h2>
                            <span>Today's Appointments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6  mb-3">
                      <div class="custom-card presentEmployee">
                        <div class="left-data">
                          <div class="heading">
                            <h2 class="count">{totalPatients.length}</h2>
                            <span>Total Patients</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6  mb-3">
                      <div class="custom-card absentEmployee">
                        <div class="left-data">
                          <div class="heading">
                            <h2 class="count">{totalStaffMember.length}</h2>
                            <span>Total Staff</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default DashBoard;
