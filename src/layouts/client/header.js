/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout, Menu } from "antd";
import { Divider, Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { IdentityUrl } from "../../constants";
import { DownOutlined } from "@ant-design/icons";
import { Auth } from "../../helpers";
import { useDispatch } from "react-redux";
import { signOutUser } from "../../redux/identity.slice";

export const Header = () => {
	const auth = new Auth();
	const dispatch = useDispatch();

	const menu = (
		<Menu>
			<Menu.Item onClick={() => SignOut()} danger>
				Sign out
			</Menu.Item>
		</Menu>
	);

	const SignOut = () => {
		dispatch(signOutUser());
	};

	return (
		<Layout.Header className="header">
			<div className="logo">Charity Logo</div>

			<div className="identity-menu">
				{auth.isLogin() ? (
					<>
						<Divider type="vertical" />
						<Dropdown overlay={menu}>
							<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
								{auth.getEmail()} <DownOutlined />
							</a>
						</Dropdown>
					</>
				) : (
					<div>
						<Divider type="vertical" />
						<Link to={IdentityUrl.SIGN_IN}>
							<Button className="btn">Login</Button>
						</Link>
						<Link to={IdentityUrl.SIGN_UP}>
							<Button className="btn sign-in-btn" type="primary">
								Sign Up
							</Button>
						</Link>
					</div>
				)}
			</div>

			<Menu className="menu" mode="horizontal">
				<Menu.Item key="about">About</Menu.Item>
				<Menu.Item key="auction-item">Auction Item</Menu.Item>
				<Menu.Item key="faq">FAQ</Menu.Item>
				<Menu.Item key="terms">Terms and conditions</Menu.Item>
			</Menu>

			<Divider />
		</Layout.Header>
	);
};

export default Header;
