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
	signUp: (body) => {
		const url = "/auth/sign_up";
		return axiosClient.post(url, body);
	},
	/**
	 * @desc    Login user
	 *
	 * @param   {object} body
	 * @param   {string} body.email
	 * @param   {string} body.password
	 */
	signIn: (body) => {
		const url = "/auth/sign_in";
		return axiosClient.post(url, body);
	},
};
