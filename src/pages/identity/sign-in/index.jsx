/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";

import { LogoHeader } from "../components";
import { RegEx, IdentityUrl } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, resetIdentityState } from "../../../redux/identity.slice";
import { Auth } from "../../../helpers";
import { ClientUrl } from "../../../constants";
import "./styles.scss";

export const SignInPage = () => {
	const dispatch = useDispatch();
	const auth = new Auth();
	const { state } = useLocation();

	const signInStatus = useSelector((state) => state.identity.signIn);

	const SignIn = (values) => {
		const req = { body: values };
		dispatch(signInUser(req));
	};

	const FormProps = {
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
	};

	useEffect(() => {
		return () => dispatch(resetIdentityState());
	}, []);

	if (auth.isLogin()) {
		return <Navigate to={state?.from || ClientUrl.HOME}></Navigate>;
	}
	return (
		<Card className="sign-in-page" title={<LogoHeader />} style={{ width: 400 }}>
			<Form name="sign-in" onFinish={SignIn}>
				<Form.Item name="email" {...FormProps.email}>
					<Input prefix={<MailOutlined />} placeholder="Email" />
				</Form.Item>
				<Form.Item name="password" {...FormProps.password}>
					<Input prefix={<LockOutlined />} placeholder="Password" type="password" />
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
