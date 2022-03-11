import { Result, Button } from "antd";
import { Link, Navigate } from "react-router-dom";
import { ClientUrl } from "../../../constants";
import { Auth } from "../../../helpers";

export const ReconfirmEmailPage = () => {
	const auth = new Auth();
	if (auth.isLogin() && !auth.isConfirmed())
		return (
			<div>
				<Result
					status="404"
					title="404"
					subTitle="Sorry, you have not confirmed your email yet."
					extra={
						<Link to={ClientUrl.HOME}>
							<Button type="primary">Back Home</Button>
						</Link>
					}
				/>
			</div>
		);
	return <Navigate to={ClientUrl.HOME} />;
};

ReconfirmEmailPage.displayName = "ReconfirmEmailPage";
