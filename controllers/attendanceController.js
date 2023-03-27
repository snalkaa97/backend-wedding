import Attendance from "../models/attendanceModel.js";
import dotenv from "dotenv";
dotenv.config();

export default {
	async getAll(req, res) {
		try {
			const attendances = await Attendance.find().sort({ _id: -1 });
			const result = {
				status: "success",
				title: "get all attendances",
				count: attendances.length,
				data: attendances,
				errors: null,
			};
			res.status(200).send(result);
		} catch (e) {
			console.log(e);
			res.json({ error: e });
		}
	},
	async create(req, res) {
		try {
			await Attendance.create({
				name: req.body.name,
				comment: req.body.comment,
			})
				.then(async (attendance) => {
					res.status(200).send({
						message: "Inserted successfully",
						data: {
							name: attendance.name,
							comment: attendance.comment,
						},
					});
				})
				.catch((e) => {
					console.log(e);
					res.json({ error: e });
				});
		} catch (e) {
			console.log(e);
			res.json({ error: e });
		}
	},
};
