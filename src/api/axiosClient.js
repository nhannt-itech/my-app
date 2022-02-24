import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:3001/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

axiosClient.interceptors.response.use(
	async (response) => {
		if (response && response.data) {
			return response.data;
		}
		return response.data;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
