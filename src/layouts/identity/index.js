import "./styles.scss";
import { Outlet } from "react-router-dom";

export const IdentityLayout = () => {
	return (
		<div
			id="identity-layout"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Outlet />
		</div>
	);
};
