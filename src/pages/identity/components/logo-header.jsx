import { Link } from "react-router-dom";
import { ClientUrl } from "../../../constants";
import "./styles.scss";

export const LogoHeader = () => {
	return (
		<Link to={ClientUrl.HOME}>
			<div className="logo-header">Charity Logo</div>
		</Link>
	);
};
