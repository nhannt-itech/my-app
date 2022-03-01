/* eslint-disable react-hooks/exhaustive-deps */
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { LogoHeader } from "../components";
import { RegEx, IdentityUrl } from "../../../constants";
import "./styles.scss";

export const SignInPage = () => {
	const FormProps = {
		lastName: {
			rules: [{ required: true, message: "This field is required!" }],
			style: { display: "inline-block", width: "calc(50% - 8px)" },
		},
		firstName: {
			rules: [{ required: true, message: "This field is required!" }],
			style: { display: "inline-block", width: "calc(50% - 8px)", margin: "0 0 0 16px" },
		},
		email: {
			rules: [
				{ required: true, message: "This field is required!" },
				{ type: "email", message: "Invalid email!" },
			],
		},
		userName: {
			rules: [
				{ required: true, message: "This field is required!" },
				{
					pattern: RegEx.USERNAME,
					message: "Invalid username!",
				},
			],
		},
		password: {
			rules: [
				{
					required: true,
					message: "This field is required!",
				},
				{
					pattern: RegEx.PASSWORD,
					message: "Password must be 8-20 characters including uppercase, lowercase and number",
				},
			],
			hasFeedback: true,
		},
		rePassword: {
			rules: [
				{ required: true, message: "This field is required!" },
				({ getFieldValue }) => ({
					validator(_, value) {
						if (!value || getFieldValue("password") === value) {
							return Promise.resolve();
						}
						return Promise.reject(new Error("Confirmation password does not match"));
					},
				}),
			],
			dependencies: ["password"],
			hasFeedback: true,
		},
	};

	return (
		<Card className="sign-in-page" title={<LogoHeader />} style={{ width: 400 }}>
			<Form name="sign-in" initialValues={{ remember: true }}>
				<Form.Item name="userName" {...FormProps.userName}>
					<Input prefix={<UserOutlined />} placeholder="Username" />
				</Form.Item>
				<Form.Item name="password" {...FormProps.password}>
					<Input prefix={<LockOutlined />} placeholder="Password" type="password" />
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember</Checkbox>
					</Form.Item>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="button">
						Sign in
					</Button>
				</Form.Item>
				<div className="float-left">
					Or <Link to={IdentityUrl.SIGN_UP}>Sign up now!</Link>
				</div>
			</Form>
		</Card>
	);
};
