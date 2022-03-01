import axiosClient from "./axiosClient";

export const ItemAPI = {
	getAll: () => {
		const url = `/items`;
		return axiosClient.get(url);
	},
};
