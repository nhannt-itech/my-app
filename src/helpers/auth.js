export class Auth {
	auth = JSON.parse(localStorage.getItem("auth"));

	isLogin = () => {
		return this.auth !== null;
	};
}
