import { Schema, model } from "mongoose";

const attendance = Schema({
	name: {
		type: "string",
		required: true,
	},
	comment: {
		type: "string",
		required: true,
	},
});

export default model("Attendance", attendance);
