import mongoose, { Schema } from "mongoose";
const staffSchema = new mongoose.Schema(
  {
    D_ID: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
    specialization: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("staffs", staffSchema);
export default Staff;
