import axiosClient from "./axiosClient";

export const CourseAPI = {
	getAll: () => {
		const url = `/items`;
		return axiosClient.get(url);
	},
};
