import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { ClientUrl } from "../../../constants";

export const NotFoundPage = () => {
	return (
		<div>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Link to={ClientUrl.HOME}>
						<Button type="primary">Back Home</Button>
					</Link>
				}
			/>
		</div>
	);
};
