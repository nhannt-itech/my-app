import { Routes, Route } from "react-router-dom";
import { ClientLayout, IdentityLayout } from "./layouts";
import { HomePage } from "./pages/client";
import { SignInPage, SignUpPage } from "./pages/identity";
import { ClientUrl } from "./constants";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ClientLayout />}>
				<Route path={ClientUrl.HOME} element={<HomePage />} />
			</Route>
			<Route path="/identity" element={<IdentityLayout />}>
				<Route path="sign-in" element={<SignInPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
			</Route>
		</Routes>
	);
};

export default App;
