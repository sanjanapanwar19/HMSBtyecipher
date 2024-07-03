import Appointment from "../models/AppointmentModel.js";
import Patient from "../models/PatientModel.js";
import Staff from "../models/StaffModel.js";

export const addAppointment = async (req, res) => {
  console.log("add appointment api called");
  const newappointment = req.body;
  const { patientName, doctorName, patientEmail, time, description } = req.body;
  console.log("patient name is", patientName);
  console.log("doctor name is", doctorName);
  console.log("patient email is", patientEmail);
  console.log("time is", time);
  console.log("description is", description);
  try {
    const patientData = await Patient.findOne({ fullName: patientName });
    if (!patientData) {
      return res.json({status:false,msg:"patient does not exits"})
    }
    const staffData = await Staff.findOne({ fullName: doctorName });
    if (!staffData) {
      return res.json({status:false,msg:"staff does not exits"})
    }
    console.log("patient data is", patientName);
    log
  } catch (err) {
    console.log("err is",err);
  }
};
export const viewAllAppointments = async (req, res) => {
  console.log("view all appointment api called");
};
