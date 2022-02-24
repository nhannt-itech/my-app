import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { Header } from "./layout";
import { Layout } from "antd";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header />
			<div className="content">
				<Routes>
					<Route path="/home" element={<HomePage />}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
