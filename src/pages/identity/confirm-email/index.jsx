import { NotFoundPage } from "../../globals";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Status, ClientUrl } from "../../../constants";
import { Spin, Result, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import { confirmEmail } from "../../../redux/identity.slice";
import "./styles.scss";

export const ConfirmEmailPage = () => {
	const dispatch = useDispatch();
	const { token } = useParams();

	const confirmEmailStatus = useSelector((state) => state.identity.confirmEmail);

	useEffect(() => {
		if (token) {
			const req = { params: { token } };
			dispatch(confirmEmail(req));
		}
	}, [dispatch, token]);

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
