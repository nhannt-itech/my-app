import { Card, Button } from "antd";
import "./styles.css";

const { Meta } = Card;

const AuctionItem = ({ price, shippingCost, bids }) => {
	return (
		<div>
			<Card
				hoverable
				cover={
					<img
						alt="example"
						src="https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg"
					/>
				}
			>
				<Meta
					title="Auction item"
					description={
						<div>
							<div className="price">${price}</div>+ ${shippingCost} shipping <br />
							{bids} bids
						</div>
					}
				/>
				<Button className="view-button" type="primary">
					VIEW ITEM
				</Button>
			</Card>
		</div>
	);
};

export default AuctionItem;
