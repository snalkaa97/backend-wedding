import express from "express";
import attendanceController from "../controllers/attendanceController.js";
const route = express.Router();

route.get("/", (req, res) => {
	res.status(200).send({ message: "OK" });
});

route.get("/api/attendance", attendanceController.getAll);
route.post("/api/attendance", attendanceController.create);
export default route;
