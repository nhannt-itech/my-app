export class Auth {
	auth = JSON.parse(localStorage.getItem("auth"));

	isLogin = () => {
		console.log("hi");
		return this.auth !== null;
	};

	isConfirmed = () => {
		return this.auth.user.email_confirmed_at !== null;
	};

	getEmail = () => {
		return this.auth.user.email;
	};
}
