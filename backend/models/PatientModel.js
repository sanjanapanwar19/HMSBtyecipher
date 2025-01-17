import mongoose, { Schema } from "mongoose";
const patientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    dob: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    bloodgroup: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("patients", patientSchema);
export default Patient;
