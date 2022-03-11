import { Routes, Route } from "react-router-dom";
import { ClientLayout, IdentityLayout } from "./layouts";
import { HomePage, ReconfirmEmailPage } from "./pages/client";
import { SignInPage, SignUpPage, ConfirmEmailPage } from "./pages/identity";
import { ClientUrl } from "./constants";
import { NotFoundPage } from "./pages/globals";
import { PrivateRoute } from "./routes";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ClientLayout />}>
				<Route
					path={ClientUrl.HOME}
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
				<Route path="/reconfirm-email" element={<ReconfirmEmailPage />} />
			</Route>
			<Route path="/identity" element={<IdentityLayout />}>
				<Route path="sign-in" element={<SignInPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="confirm-email/:token" element={<ConfirmEmailPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
