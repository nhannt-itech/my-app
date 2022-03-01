import Header from "./header";
import "./styles.css";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
	return (
		<div>
			<Header />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};

export default ClientLayout;
