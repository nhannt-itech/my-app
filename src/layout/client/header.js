import { Layout, Menu } from "antd";
import { Divider, Button } from "antd";

export const Header = () => {
	return (
		<Layout.Header className="header">
			<div className="logo">Charity Logo</div>

			<div className="identity-menu">
				<Divider type="vertical" />
				<Button className="btn">Login</Button>
				<Button className="btn sign-in-btn" type="primary">
					Sign Up
				</Button>
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
