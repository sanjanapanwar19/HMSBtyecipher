import express from "express";
import {
  addPatient,
  deletePatientById,
  updatePatientById,
  viewAllPatient,
} from "../controllers/patient.js";
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
const router = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads/profiles');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

router.post("/addPatient",upload.single('profileImage'), addPatient);
router.get("/viewAllPatient", viewAllPatient);
router.put("/updatePatientById/:id",upload.single('profileImage'), updatePatientById);
router.delete("/deletePatientById/:id", deletePatientById);

export default router;
