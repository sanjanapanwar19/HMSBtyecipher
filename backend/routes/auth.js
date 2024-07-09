import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  chnagePassword,
  updateAdminProfile,
} from "../controllers/auth.js";
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

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);
router.put("/changePassword/:id", chnagePassword);
router.put("/updateAdminProfile/:id",upload.single('profileImage'),updateAdminProfile);
export default router;
