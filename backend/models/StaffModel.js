import mongoose, { Schema } from "mongoose";
const staffSchema = new mongoose.Schema(
  {
    D_ID: {
      type: String,
      unique: true
    },
    role: {
      type: String,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    dob: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
    },
    specialization: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    profileImage: {
      type:String
    },
  },
 
  { timestamps: true }
);

const Staff = mongoose.model("staffs", staffSchema);
export default Staff;
