import mongoose, { Schema } from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      // required: true,
      index: true,
    },
    patientEmail: {
      type: String,
       required: true,
    },
    staffId: {
      type: String,
      required: true,
    },
    customD_ID: {
      type: String,
      required: true,
      unique : true
    },
    doctorName: {
      type: String,
      // required: true,
    },
    doctorEmail: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    patientDob: {
      type: String,
      required: true,
    },
    patientImage: {
      type: String,
    },
    doctorImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("appointments", appointmentSchema);
export default Appointment;
