import { Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/client";
import { HomePage } from "./pages/client";
import "./App.css";

const App = () => {
	return (
		<Routes>
			{/* <Route path="/identity/:path?">
				<IdentityPages />
			</Route> */}
			<Route path="/" element={<ClientLayout />}>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
