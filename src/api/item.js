import axiosClient from "./axiosClient";
import { Version } from "../constants";

export const CourseAPI = {
	getAll: () => {
		const url = `/items`;
		return axiosClient.get(url);
	},
};
