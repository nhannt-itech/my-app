import Header from "./header";
import "./styles.css";
import { Outlet } from "react-router-dom";

export const ClientLayout = () => {
	return (
		<div>
			<Header />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};
