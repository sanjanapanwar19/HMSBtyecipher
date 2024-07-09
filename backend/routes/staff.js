import express from "express";
import {
  addStaff,
  deleteStaffById,
  updateStaffById,
  viewAllStaff,
} from "../controllers/staff.js";
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


router.post("/addStaff",upload.single('profileImage'), addStaff);
router.get("/viewAllStaff", viewAllStaff);
router.put("/updateStaffById/:id", updateStaffById);
router.delete("/deleteStaffById/:id", deleteStaffById);

export default router;
