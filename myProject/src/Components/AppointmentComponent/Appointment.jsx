import dummy_logo from "../assets/images/dummy_logo.png";
import dashboard from "../assets/icons/Dashboard.svg";
import appointment from "../assets/icons/appointment.svg";
import patient from "../assets/icons/patient.svg";
import staff from "../assets/icons/staff.svg";
import collaspeBtn from "../assets/icons/collaps-btn.svg";
import avatar from "../assets/icons/avatar.png";
import add from "../assets/icons/add.svg";
import edit from "../assets/icons/Edit.svg";
import view from "../assets/icons/view.svg";
import Delete from "../assets/icons/Delete.svg";
import Ellipse from "../assets/images/Ellipse 7.png";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

const Appointment = ({ images, collaspeEvent }) => {
  const { collasped, setCollasped } = collaspeEvent;
  return (
    <div class="wapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />
      <div className={`main-container ${collasped && "main-content_large"}`}>
        <Header images={images} collaspeEvent={{ collasped, setCollasped }} />
        <div class="content">
          <div class="row mb-3">
            <div class="col-xxl-12">
              <div class="row justify-content-between align-items-center mb-3">
                <div class="col-xxl-3">
                  <div class="greetingsText">
                    <div class="greetingsText-heading">
                      <h3>My Appointments</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 d-flex">
                  <div class="buttons d-flex">
                    <Link to={'/addAppointment'} class="ctr-btn">
                      <img src={add} alt="" />
                    </Link>
                  </div>
                  <input
                    type="text"
                    class="custom-input-field"
                    placeholder="Search Appointments"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="table-responsive">
                    <table class="custom-table">
                      <thead>
                        <tr>
                          <th scope="col">Patient Id</th>
                          <th scope="col">Patient Name</th>
                          <th scope="col">Doctor Id</th>
                          <th scope="col">Doctor Name</th>
                          <th scope="col">Time</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>A01</td>
                          <td>
                            <img src="/assets/images/Ellipse 7.png" alt="" />
                            <span>Pooja Patel</span>
                          </td>
                          <td>D01</td>
                          <td class="d-flex">
                            <img src="/assets/images/picture.png" alt="" />
                            <span>
                              Vijay Sharma
                              <small style={{ display: "block" }}>Doctor</small>
                            </span>
                          </td>
                          <td>01:30 PM</td>
                          <td>20/10/1992</td>
                          <td>
                            <div class="action-btn">
                              <a href="edit-appointment.html">
                                <img src={edit} alt="" />
                              </a>
                              <a
                                href="/sanjana"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <img src={Delete} alt="" />
                              </a>
                              <a href="view-appointment.html">
                                <img src={view} alt="" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>A02</td>
                          <td class="d-flex">
                            <img src="/assets/images/picture.png" alt="" />
                            <span>Vijay Sharma</span>
                          </td>
                          <td>D02</td>
                          <td class="d-flex">
                            <img src="/assets/images/Ellipse 7.png" alt="" />
                            <span>
                              Pooja Patel
                              <small style={{ display: "block" }} alt="">
                                Doctor
                              </small>
                            </span>
                          </td>
                          <td>03:30 PM</td>
                          <td>20/10/1997</td>
                          <td class="d-flex">
                            <div class="action-btn">
                              <a href="edit-appointment.html">
                                <img src={edit} alt="" />
                              </a>
                              <a
                                href="/dummy-link"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <img src={Delete} alt="" />
                              </a>
                              <a href="view-appointment.html">
                                <img src={view} alt="" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>A03</td>
                          <td>
                            <img src={Ellipse} alt="" />
                            <span>Pooja Patel</span>
                          </td>
                          <td>D03</td>
                          <td class="d-flex">
                            <img src="/assets/images/picture.png" alt="" />
                            <span>
                              Vijay Sharma
                              <small style={{ display: "block" }}>Doctor</small>
                            </span>
                          </td>
                          <td>01:30 PM</td>
                          <td>20/10/1992</td>
                          <td>
                            <div class="action-btn">
                              <a href="edit-appointment.html">
                                <img src={edit} alt="" />
                              </a>
                              <a
                                href="/dummy-link"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <img src={Delete} alt="" />
                              </a>
                              <a href="view-appointment.html">
                                <img src={view} alt="" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>A04</td>
                          <td class="d-flex">
                            <img src="/assets/images/picture.png" alt="" />
                            <span>Vijay Sharma</span>
                          </td>
                          <td>D04</td>
                          <td class="d-flex">
                            <img src="/assets/images/Ellipse 7.png" alt="" />
                            <span>
                              Pooja Patel
                              <small style={{ display: "block" }}>Doctor</small>
                            </span>
                          </td>
                          <td>03:30 PM</td>
                          <td>20/10/1997</td>
                          <td class="d-flex">
                            <div class="action-btn">
                              <a href="edit-appointment.html">
                                <img src={edit} alt="" />
                              </a>
                              <a
                                href="/sanjana"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <img src={Delete} alt="" />
                              </a>
                              <a href="view-appointment.html">
                                <img src={view} alt="" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade customDesign"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                &nbsp;
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                src="assets/images/deleteModal_icon.png"
                alt=""
                class="mainIconModal"
              />
              <h2>Delete Appointment</h2>
              <p>Are you sure you want to Delete Vijay Sharma?</p>
              <div class="footbutton">
                <button
                  type="button"
                  class="custom-btn cancelBtn"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="custom-btn custom-btnCus">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointment;
