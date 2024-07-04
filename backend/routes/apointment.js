import express from "express";
import {
  addAppointment,
  deleteAppointmentById,
  updateAppointmentById,
  viewAllAppointments,
} from "../controllers/appointment.js";

const router = express();

router.post("/addAppointment", addAppointment);
router.get("/viewAllAppointments", viewAllAppointments);
router.put("/updateAppointmentById/:id", updateAppointmentById);
router.delete("/deleteAppointmentById/:id", deleteAppointmentById);
export default router;
