/* eslint-disable react-hooks/exhaustive-deps */
import { NotFoundPage } from "../../globals";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Status, ClientUrl } from "../../../constants";
import { Spin, Result, Button } from "antd";
import { Navigate, Link, useLocation } from "react-router-dom";
import { confirmEmail, signOutUser } from "../../../redux/identity.slice";
import "./styles.scss";

export const ConfirmEmailPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const confirmEmailStatus = useSelector((state) => state.identity.confirmEmail);

	const params = new URLSearchParams(location.search);
	const token = params.get("token");

	useEffect(() => {
		if (token) {
			const req = { params: { token } };
			dispatch(confirmEmail(req));
		}
	}, []);

	if (!token) return <Navigate to="/identity/not-found" />;
	return (
		<div>
			{confirmEmailStatus === Status.PENDING && (
				<div className="confirm-email-page">
					<Spin size="large" />
				</div>
			)}
			{confirmEmailStatus === Status.SUCCESS && (
				<Result
					status="success"
					title="Confirmed email success!"
					extra={
						<Link to={ClientUrl.HOME}>
							<Button type="primary">Back Home</Button>
						</Link>
					}
				/>
			)}
			{(confirmEmailStatus === Status.FAILED || !confirmEmailStatus) && <NotFoundPage />}
		</div>
	);
};
