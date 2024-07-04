import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteStaff = ({ data }) => {
  console.log("delete staff component has been rendered");
  const { images, isDeleteClick, deleteHanlde } = data;
  console.log("images are", images);
  const { flag, eachStaff } = isDeleteClick;
  console.log("flag is", flag, "each staff is", eachStaff);
  console.log("is delete click", isDeleteClick);
  console.log("handle delete fun is", deleteHanlde);
  const myStyle = {
    display: flag ? "block" : "none",
  };
  const deleteStaffMember = (eachStaff) => {
    const id = eachStaff._id;
    console.log("delete staff member fun of delete staff component called");
    const fun = async (req, res) => {
      try {
        const res = await axios.delete(`/staff/deleteStaffById/${id}`);
        console.log("res is", res.data);
        if (res.data.status) {
          toast.success("staff is added sucessfully");
          setTimeout(() => {
            deleteHanlde(false, eachStaff);
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
                  deleteHanlde(false, eachStaff);
                }}
              ></button>
            </div>
            <div class="modal-body">
              <img src={images.deleteModelIcon} alt="" class="mainIconModal" />
              <h2>Delete Staff</h2>
              <p>Are you sure you want to Delete {eachStaff.fullName}</p>

              <div class="footbutton">
                <button
                  type="button"
                  class="custom-btn cancelBtn"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    deleteHanlde(false, eachStaff);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteStaffMember(eachStaff);
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

export default DeleteStaff;
