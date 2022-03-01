import axiosClient from "./axiosClient";

export const IdentityAPI = {
	/**
	 * @desc    User register
	 *
	 * @param   {object }body
	 * @param   {string} body.name
	 * @param   {string} body.email
	 * @param   {string} body.password
	 */
	register: (body) => {
		const url = "/register";
		return axiosClient.post(url, body);
	},
	/**
	 * @desc    Login user
	 *
	 * @param   {object} body
	 * @param   {string} body.email
	 * @param   {string} body.password
	 */
	token: (body) => {
		const url = "/authorize";
		return axiosClient.post(url, body);
	},
};
