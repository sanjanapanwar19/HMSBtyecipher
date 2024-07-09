import Appointment from "../models/AppointmentModel.js";
import Patient from "../models/PatientModel.js";
import Staff from "../models/StaffModel.js";

export const addAppointment = async (req, res) => {
  console.log("add appointment api called");
  const {
    patientName,
    patientEmail,
    doctorName,
    doctorEmail,
    time,
    description,
  } = req.body;
  console.log("patient name is", patientName);
  console.log("patient email is", patientEmail);
  console.log("doctor name is", doctorName);
  console.log("doctor email is", doctorEmail);
  console.log("time is", time);
  console.log("description is", description);
  try {
    const isExitsPatient = await Patient.findOne({ email: patientEmail });
    if (!isExitsPatient) {
      return res.json({ status: false, msg: "unknown patient" });
    }
    console.log("is exists patient is", isExitsPatient);
    const isExitsStaff = await Staff.findOne({ email: doctorEmail });
    if (!isExitsStaff) {
      return res.json({ status: false, msg: "unknown patient" });
    }
    console.log("is existing staff is", isExitsStaff);
    const newAppointment = new Appointment({
      ...req.body,
      patientId: isExitsPatient._id,
      staffId: isExitsStaff._id,
      customD_ID: isExitsStaff.D_ID,
      patientDob: isExitsPatient.dob,
    });
    const bookedAppointment = await newAppointment.save();
    console.log("booked appointment is", bookedAppointment);
    return res.json({
      status: true,
      mag: "appointment booked sucessfully",
      bookedAppointment,
    });
  } catch (err) {
    console.log("error is", err);
  }
};
export const viewAllAppointments = async (req, res) => {
  console.log("view all appointment api called");
  try {
    const allAppointments = await Appointment.find();
    console.log("all staff ", allAppointments);
    // if (allStaff.length === 0) {
    //   return res.status(400).json({ msg: "No staff members found" });
    // }
    return res
      .status(200)
      .json({
        status: true,
        msg: "successfully accessed appointment data",
        allAppointments,
      });
  } catch (err) {
    console.log("Error is", err);
  }
};
export const deleteAppointmentById = async (req, res) => {
  console.log("delete appointment by id called");
  const id = req.params.id;
  console.log("id is", id);
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({
        status: true,
        msg: "patient member deleted sucessfully",
        deletedAppointment,
      });
  } catch (err) {
    console.log("error is", err);
  }
};
export const updateAppointmentById = async (req, res) => {
  console.log("updata appointment  by id api called");
  console.log(req.params.id);
  console.log("body", req.body);
  const id = req.params.id;
  const data = req.body;
  const {
    patientName,
    patientEmail,
    doctorName,
    doctorEmail,
    time,
    description,
  } = req.body;
  console.log("patient name is", patientName);
  console.log("patient email is", patientEmail);
  console.log("doctor name is", doctorName);
  console.log("doctor email is", doctorEmail);
  console.log("time is", time);
  console.log("description is", description);
  try {
    const isExitsPatient = await Patient.findOne({ email: patientEmail });
    if (!isExitsPatient) {
      return res
        .status(400)
        .json({ status: false, field: "patientName", msg: "unknown patient" });
    }
    console.log("is exists patient is", isExitsPatient);
    if (isExitsPatient.fullName.toLowerCase() !== patientName.toLowerCase()) {
      return res.json({
        status: false,
        field: "patientName",
        msg: "patient name with this email doex not exists",
      });
    }
    const isExitsStaff = await Staff.findOne({ email: doctorEmail });
    if (!isExitsStaff) {
      return res
        .status(404)
        .json({ status: false, field: "doctorName", msg: "unknown staff" });
    }
    if (isExitsStaff.fullName.toLowerCase() !== doctorName.toLowerCase()) {
      return res
        .status(401)
        .json({
          status: false,
          field: "doctorName",
          msg: "staff name this email doex not exists ",
        });
    }
    console.log("is existing staff is", isExitsStaff);
    const newObj = {
      patientName,
      patientEmail,
      doctorName,
      doctorEmail,
      time,
      description,
      patientId: isExitsPatient._id,
      staffId: isExitsStaff._id,
      customD_ID: isExitsStaff.D_ID,
    };
    console.log("new updated obj", newObj);
    const updatedPatient = await Appointment.findByIdAndUpdate(
      { _id: id },
      { $set: newObj },
      { new: true }
    );
    return res
      .status(200)
      .json({ status: true, msg: "updated successfully", updatedPatient });
  } catch (err) {
    console.log("err is", err);
  }
};
