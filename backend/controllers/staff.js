import Staff from "../models/StaffModel.js";
import { login } from "./auth.js";

export const addStaff = async (req, res) => {
  console.log("add staff api has been called");
  console.log("request body is", req.body);
  if (req.file) {
    req.body.profileImage = `/uploads/profiles/${req.file.filename}`;
  }
  try {
    const {
      role,
      fullName,
      email,
      dob,
      contactNumber,
      specialization,
      gender,
      description,
      D_ID,
      profileImage,
    } = req.body;

    const staffID = await Staff.findOne({ D_ID });
    if (staffID) {
      return res.status(400).json({
        status: false,
        field: "D_ID",
        msg: "doctor id can not be duplicate",
      });
    }
    const staffEmail = await Staff.findOne({ email });
    if (staffEmail) {
      return res.status(400).json({
        status: false,
        field: "email",
        msg: "doctor email is already register",
      });
    }
    const newStaffMember = new Staff({
      ...req.body,
    });
    console.log("new data in the staff member is", newStaffMember);
    const savedStaffMember = await newStaffMember.save();
    return res.json({
      status: true,
      msg: "staff has been addres",
      staffMember: savedStaffMember,
    });
  } catch (err) {
    console.log("err response is", err.errorResponse);
    return res.status(400).json({ status: false, errmsg: err.errorResponse });
  }
};

export const viewAllStaff = async (req, res) => {
  console.log("view staff api has been called");
  console.log("inside view staff api");
  try {
    const allStaff = await Staff.find();
    console.log("all staff ", allStaff);
    // if (allStaff.length === 0) {
    //   return res.status(400).json({ msg: "No staff members found" });
    // }
    return res.status(200).json({
      status: true,
      msg: "successfully accessed sraff members",
      allStaff,
    });
  } catch (err) {
    console.log("Error is", err);
  }
};

export const updateStaffById = async (req, res) => {
  console.log("updata staff by id  api called");
  console.log(req.params.id);
  console.log("body", req.body);
  const id = req.params.id;
  const { D_ID } = req.body;
  const{email} = req.body
  console.log("D_ID is", D_ID);
  console.log("email is",email);
  const isExistingStaffID = await Staff.find({
    D_ID: req.body.D_ID,
    _id: { $ne: id },
  });
  console.log("is existing staff",isExistingStaffID);
  console.log("is existing staff id", isExistingStaffID.length);
  if (isExistingStaffID.length>0) {
    console.log("id is alredy registerd");
    return res.status(400).json({ status:false,field:"D_ID",msg: "docot id can not be duplicate" });
  }
  const isExistingStaffEmail = await Staff.find({
    email: req.body.email,
    _id: { $ne: id },
  });
  console.log("is existing staff",isExistingStaffEmail);
  console.log("is existing staff email", isExistingStaffEmail.length);
  if (isExistingStaffEmail.length>0) {
    console.log("email is alredy registerd");
    return res.status(400).json({ status:false,field:"email",msg: "doctor email is already registered" });
  }
  const data = {
    ...req.body,
    profileImage: req.file
      ? `/uploads/profiles/${req.file.filename}`
      : req.body.profileImage,
  };
  try {
    const updatedStaffMember = await Staff.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    return res
      .status(200)
      .json({ status: true, msg: "updated successfully", updatedStaffMember });
  } catch (err) {
    // console.log("err is", err);
    console.log("something went wrong");
  }
};
export const deleteStaffById = async (req, res) => {
  console.log("delete staff by id api called");
  const id = req.params.id;
  console.log("id is", id);
  try {
    const deletedStaffMember = await Staff.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: true,
      msg: "staff member deleted sucessfully",
      deletedStaffMember,
    });
  } catch (err) {
    console.log("error is", err);
  }
};
