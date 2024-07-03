import mongoose, { Schema } from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    patientDob: {
      type: String,
    },
    patientEmail: {
      type: String,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("appointments", appointmentSchema);
export default Appointment;
