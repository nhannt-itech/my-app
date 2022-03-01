/* eslint-disable react-hooks/exhaustive-deps */
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { RegEx, IdentityUrl } from "../../../constants";
import { Link } from "react-router-dom";
import { LogoHeader } from "../components";
import { Form, Input, Button, Card } from "antd";
import "./styles.scss";

export const SignUpPage = () => {
	//Component
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
		<Card className="sign-up-page" title={<LogoHeader />} style={{ width: 400 }}>
			<Form name="sign-up" initialValues={{ remember: true }}>
				<Form.Item name="name" {...FormProps.email}>
					<Input prefix={<UserOutlined />} placeholder="Name" />
				</Form.Item>
				<Form.Item name="email" {...FormProps.email}>
					<Input prefix={<MailOutlined />} placeholder="Email" />
				</Form.Item>
				<Form.Item name="password" {...FormProps.password}>
					<Input.Password prefix={<LockOutlined />} placeholder="Password" />
				</Form.Item>
				<Form.Item name="confirmPassword" {...FormProps.rePassword}>
					<Input.Password prefix={<LockOutlined />} placeholder="Confirm password" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="button">
						Sign up
					</Button>
				</Form.Item>
				<div className="float-left">
					Already have an account? <Link to={IdentityUrl.SIGN_IN}>Sign in now!</Link>
				</div>
			</Form>
		</Card>
	);
};
