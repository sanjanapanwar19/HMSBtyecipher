import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deletepatient = ({ data }) => {
  console.log("data is the delete patient component");
  console.log("delete patient component has been rendered");
  const { images, isDeleteClick, deleteHandle } = data;
  console.log("images are", images);
  const { flag, eachPatient } = isDeleteClick;
  console.log("flag is", flag, "each staff is", eachPatient);
  console.log("is delete click", isDeleteClick);
  console.log("handle delete fun is", deleteHandle);
  const myStyle = {
    display: flag ? "block" : "none",
  };
  const deleteStaffMember = (eachPatient) => {
    const id = eachPatient._id;
    console.log("delete patient fun of delete patinet component called");
    const fun = async (req, res) => {
      try {
        const res = await axios.delete(`/patient/deletePatientById/${id}`);
        console.log("res is", res.data);
        toast.success("patient is deleted sucessfully");
        setTimeout(() => {
          deleteHandle(false, res.data);
        }, 1000);
        
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
        aria-labelledby="exampleModalLabel"
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
                  deleteHandle(false, eachPatient);
                }}
              ></button>
            </div>
            <div class="modal-body">
              <img src={images.deleteModelIcon} alt="" class="mainIconModal" />
              <h2>Delete Patient</h2>
              <p>Are you sure you want to Delete {eachPatient.patientName}?</p>
              <div class="footbutton">
                <button
                  type="button"
                  class="custom-btn cancelBtn"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    deleteHandle(false, eachPatient);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteStaffMember(eachPatient);
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

export default Deletepatient;
