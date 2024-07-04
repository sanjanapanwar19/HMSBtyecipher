import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteAppointment = ({ data }) => {
  console.log("data is the delete appointment component", data);
  console.log("delete appointment component has been rendered");
  const { images, isDeleteClick, deleteHandle } = data;
  console.log("images are", images);
  const { flag, eachAppointment } = isDeleteClick;
  console.log("flag is", flag, "each appointment is", eachAppointment);
  console.log("is delete click", isDeleteClick);
  console.log(
    "handle delete fun in delete appointment component is",
    deleteHandle
  );
  const myStyle = {
    display: flag ? "block" : "none",
  };
  const deleteStaffMember = (eachAppointment) => {
    const id = eachAppointment._id;
    console.log(
      "delete appointment fun of delete appointment component called"
    );
    const fun = async (req, res) => {
      try {
        const res = await axios.delete(
          `/appointment/deleteAppointmentById/${id}`
        );
        console.log("res is", res.data);
        console.log(
          "res.data.deleted appointments",
          res.data.deletedAppointment
        );
        if (res.data.status) {
          toast.success("appointment is deleted sucessfully");
          setTimeout(() => {
            deleteHandle(false, res.data);
          }, 1000);
        }
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun();
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`modal fade customDesign ${flag && "show"}`}
        id="exampleModal"
        tabindex="-1"
        aria-hidden={flag ? "true" : "false"}
        style={myStyle}
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
                onClick={() => {
                  deleteHandle(false, eachAppointment);
                }}
              ></button>
            </div>
            <div class="modal-body">
              <img src={images.deleteModelIcon} alt="" class="mainIconModal" />
              <h2>Delete Appointment</h2>
              <p>
                Are you sure you want to Delete {eachAppointment.patientName}?
              </p>
              <div class="footbutton">
                <button
                  type="button"
                  class="custom-btn cancelBtn"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    deleteHandle(false, eachAppointment);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteStaffMember(eachAppointment);
                  }}
                  type="button"
                  class="custom-btn custom-btnCus"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAppointment;
