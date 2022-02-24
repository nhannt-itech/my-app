import { Row, Col, Typography, Button, Select, Card } from "antd";
import { ShareAltOutlined, FlagOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuctionItem from "./auction-item";
import "./styles.css";

const { Title, Text } = Typography;
const { Option } = Select;

export const HomePage = () => {
	return (
		<div className="home-page">
			<Row className="section" type="flex" align="middle" gutter={[24, 24]}>
				<Col span={24} md={12}>
					<div className="banner"></div>
				</Col>
				<Col span={24} md={12}>
					<div className="content-right">
						<Title>Lorem ipsum dolor sit amet consectetur adipisicing.</Title>
						<Text type="secondary">
							<div className="post-content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto a optio
								doloremque. Molestias ipsum optio deserunt veritatis tempore ex repudiandae amet et,
								minima dolorum a id excepturi neque qui.
							</div>
						</Text>
						<br />
						<Button icon={<ShareAltOutlined />}>SHARE</Button>
					</div>
				</Col>
			</Row>
			<Row className="section" type="flex" align="middle" gutter={[24, 0]}>
				<Col span={24} md={12}>
					<div className="content-left">
						<Title level={2}>About section</Title>
						<Text type="secondary">
							<div className="post-content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus, illum,
								magnam tempore velit dignissimos, mollitia dicta totam earum ut animi ad eos
								repudiandae consectetur cum tenetur? Qui officia deleniti perferendis tempore,
								incidunt nulla? Minima aliquam recusandae cumque doloribus, eius fugiat veniam,
								porro itaque inventore minus vitae natus! Itaque, deleniti.
							</div>
						</Text>
					</div>
				</Col>
				<Col span={24} md={12}>
					<div className="banner"></div>
				</Col>
			</Row>
			<div className="section">
				<Row>
					<Col span={12}>
						<Title level={2}>Auction items</Title>
					</Col>
					<Col style={{ textAlign: "right" }} span={12}>
						<Select showSearch placeholder="Sort by..." optionFilterProp="children">
							<Option value="highest-bid">Highest bid</Option>
						</Select>
					</Col>
				</Row>
				<Row gutter={[20, 20]}>
					<Col span={24} md={8}>
						<AuctionItem price={24.6} shippingCost={5.0} bids={3} />
					</Col>
					<Col span={24} md={8}>
						<AuctionItem price={24.6} shippingCost={5.0} bids={3} />
					</Col>
				</Row>
			</div>
			<Card className="section text-align-center">
				<Title level={2}>Not making any bids?</Title>
				<Text type="secondary">
					A little help goes a long way and you can still help our cause by making a donation
				</Text>
				<br />
				<Button style={{ marginTop: "30px" }} type="primary">
					DONATE HERE
				</Button>
			</Card>
			<Card className="section">
				<Row type="flex" align="middle">
					<Col span={12}>
						<Title level={2}>Have any questions?</Title>
					</Col>
					<Col className="text-align-right" span={12}>
						<div>
							<Button type="primary" className="btn">
								FAQ
							</Button>
							<Button className="btn">CONTACT</Button>
						</div>
					</Col>
				</Row>
			</Card>
			<Card className="section">
				<Row type="flex" align="middle">
					<Col span={12}>
						<FlagOutlined /> Report an issue
					</Col>
					<Col className="text-align-right" span={12}>
						<Link to="/">Report</Link>
					</Col>
				</Row>
			</Card>
			<hr />
		</div>
	);
};
