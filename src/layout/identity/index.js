import "./styles.scss";

const IdentityLayout = ({ children }) => {
	return (
		<div
			id="identity-layout"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{children}
		</div>
	);
};
export default IdentityLayout;
