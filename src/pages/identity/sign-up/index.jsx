/* eslint-disable react-hooks/exhaustive-deps */
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetIdentityState, signUpUser } from "../../../redux/identity.slice";
import { RegEx, IdentityUrl, ClientUrl, Status } from "../../../constants";
import { LogoHeader } from "../components";
import { Link, Navigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { Auth } from "../../../helpers";
import "./styles.scss";

export const SignUpPage = () => {
	const signUpStatus = useSelector((state) => state.identity.signUp);
	const dispatch = useDispatch();
	const auth = new Auth();
	useEffect(() => {
		return () => dispatch(resetIdentityState());
	}, []);

	const SignUp = (values) => {
		const req = { body: values };
		dispatch(signUpUser(req));
	};

	//Component
	const FormProps = {
		name: {
			rules: [{ required: true, message: "This field is required!" }],
		},
		email: {
			rules: [
				{ required: true, message: "This field is required!" },
				{ type: "email", message: "Invalid email!" },
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

	if (signUpStatus === Status.SUCCESS) return <Navigate to={IdentityUrl.SIGN_IN} />;
	if (auth.isLogin()) return <Navigate to={ClientUrl.HOME} />;
	return (
		<Card className="sign-up-page" title={<LogoHeader />} style={{ width: 400 }}>
			<Form name="sign-up" initialValues={{ remember: true }} onFinish={SignUp}>
				<Form.Item name="name" {...FormProps.name}>
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
