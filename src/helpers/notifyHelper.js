import { notification, message } from "antd";

const Swal = require("sweetalert2");

export const NotifyHelper = {
	pending: (title) => {
		Swal.fire({
			title: title,
			didOpen: () => {
				Swal.showLoading();
			},
		});
	},
	successSweet: (title) => {
		Swal.fire({
			title: "Success",
			html: title,
			icon: "success",
		});
	},
	warningSweet: (title) => {
		Swal.fire({
			title: "Failed",
			html: title,
			icon: "warning",
		});
	},
	success: (message, title = "Success") => {
		notification["success"]({
			message: title,
			description: message,
			style: { marginTop: "40px" },
		});
	},

	info: (message, title = "Info") => {
		notification["info"]({
			message: title,
			description: message,
			style: { marginTop: "40px" },
		});
	},

	warning: (message, title = "Warning") => {
		notification["warning"]({
			message: title,
			description: message,
			style: { marginTop: "40px" },
		});
	},

	error: (message, title = "Error") => {
		notification["error"]({
			message: title,
			description: message,
			style: { marginTop: "40px" },
		});
	},

	mini: {
		success: (description) => {
			message.success(description);
		},
		info: (description) => {
			message.info(description);
		},
		warning: (description) => {
			message.warning(description);
		},
		error: (description) => {
			message.error(description);
		},
	},
};
