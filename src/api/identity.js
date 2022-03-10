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
	/**
	 * @desc    User confirm email
	 *
	 * @param   {object} params
	 * @param   {string} params.token
	 */
	confirmEmail: (params) => {
		const url = "/auth/confirm_email";
		return axiosClient.get(url, { params });
	},
};
