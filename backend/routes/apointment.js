import express from "express";
import { addAppointment, viewAllAppointments } from "../controllers/appointment.js";

const router = express();


router.post("/addAppointment", addAppointment);
router.get("/viewAllAppointments",viewAllAppointments)
export default router;