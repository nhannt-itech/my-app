import { Navigate } from "react-router-dom";
import { Auth } from "../helpers";

export const PrivateRoute = ({ children }) => {
	const auth = new Auth();

	if (!auth.isLogin()) {
		return <Navigate to="/identity/sign-in" />;
	} else if (!auth.isConfirmed()) {
		return <Navigate to="/reconfirm-email" />;
	} else return children;
};

export default PrivateRoute;
