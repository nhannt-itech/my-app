import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

axiosClient.interceptors.request.use(async (config) => {
	const auth = JSON.parse(localStorage.getItem("auth"));
	const token = auth ? auth.token : null;
	if (token) {
		config.headers.authorization = `Authorization: ${token}`;
	}
	return config;
});

axiosClient.interceptors.response.use(
	async (response) => {
		if (response && response.data) {
			return response.data;
		}
		return response.data;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem("auth");
			window.location.reload();
		}
		throw error;
	}
);

export default axiosClient;
