import Patient from "../models/PatientModel.js";
import router from "../routes/patient.js";

export const addPatient = async (req, res) => {
  console.log("add patient api has been called");
  console.log("request body is", req.body);
  if (req.file) {
    req.body.profileImage = `/uploads/profiles/${req.file.filename}`;
  }
  const patientEmail = await Staff.findOne({ email:req.body.email });
    if (patientEmail) {
      return res.status(400).json({
        status: false,
        field: "email",
        msg: "patient email is already register",
      });
    }
  try {
    const newPatient = new Patient({
      ...req.body,
    });
    console.log("new data in the patient member is", newPatient);
    const savedPatient = await newPatient.save();
    console.log("saved patient is", savedPatient);
    return res.json({
      status: true,
      msg: "patient has been added",
      patient: savedPatient,
    });
  } catch (err) {
    console.log("err is", err);
  }
};
export const viewAllPatient = async (req, res) => {
  console.log("view all patient api called");
  try {
    const allPatient = await Patient.find();
    console.log("all staff ", allPatient);
    // if (allPatient.length === 0) {
    //   return res.status(400).json({ msg: "No staff members found" });
    // }
    return res
      .status(200)
      .json({
        status: true,
        msg: "successfully accessed sraff members",
        allPatient,
      });
  } catch (err) {
    console.log("Error is", err);
  }
};

export const updatePatientById = async (req, res) => {
  console.log("updata patient by id api called");
  console.log(req.params.id);
  console.log("body", req.body);
  const id = req.params.id;
  const data = {
    ...req.body,
    profileImage: req.file
      ? `/uploads/profiles/${req.file.filename}`
      : req.body.profileImage,
  };
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    return res
      .status(200)
      .json({ status: true, msg: "updated successfully", updatedPatient });
  } catch (err) {
    console.log("err is", err);
  }
};
export const deletePatientById = async (req, res) => {
  console.log("delete patient by id api called");
  const id = req.params.id;
  console.log("id is", id);
  try {
    const deletedPatient = await Patient.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({
        status: true,
        msg: "staff member deleted sucessfully",
        deletePatientById,
      });
  } catch (err) {
    console.log("error is", err);
  }
};
