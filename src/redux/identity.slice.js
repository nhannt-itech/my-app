import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NotifyHelper } from "../helpers";
import { IdentityAPI } from "../api";
import { Status } from "../constants/status";

const initialState = {
	userId: null,
	signUp: Status.NULL,
	signIn: Status.NULL,
	confirmEmail: Status.NULL,
};

/* ---------------------ACTIONS--------------------- */
export const signUpUser = createAsyncThunk("identity/signUpUser", async (req, thunkAPI) => {
	try {
		const { body } = req;
		const res = await IdentityAPI.signUp(body);
		return res;
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});

export const signInUser = createAsyncThunk("identity/signInUser", async (req, thunkAPI) => {
	try {
		const { body } = req;
		const res = await IdentityAPI.signIn(body);
		return res;
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});

export const confirmEmail = createAsyncThunk("identity/confirmEmail", async (req, thunkAPI) => {
	try {
		const { params } = req;
		const res = await IdentityAPI.confirmEmail(params);
		return res;
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});

const rejectedAction = (action) =>
	action.type.endsWith("rejected") && action.type.includes("identity");

/* ---------------------SLICE--------------------- */
const identitySlice = createSlice({
	name: "identity",
	initialState,
	reducers: {
		resetIdentityState: (state) => {
			state.signUp = state.signIn = Status.NULL;
		},
		signOutUser: (state) => {
			localStorage.removeItem("auth");
			state.signIn = false;
			window.location.reload();
		},
	},
	extraReducers: (builder) => {
		builder
			//#region action: registerUser
			.addCase(signUpUser.pending, (state, action) => {
				state.signUp = Status.PENDING;
			})
			.addCase(signUpUser.fulfilled, (state, action) => {
				state.signUp = Status.SUCCESS;
				NotifyHelper.success("Sign up success. Login your account now!");
			})
			.addCase(signUpUser.rejected, (state, action) => {
				state.signUp = Status.FAILED;
				if (action.payload) {
					NotifyHelper.error(action.payload.message);
				}
			})
			//#endregion

			//#region action: loginUser
			.addCase(signInUser.pending, (state, action) => {
				state.signIn = Status.PENDING;
			})
			.addCase(signInUser.fulfilled, (state, action) => {
				state.signIn = Status.SUCCESS;
				localStorage.setItem(
					"auth",
					JSON.stringify({
						token: action.payload.auth_token,
						user: action.payload.user,
					})
				);
				NotifyHelper.success("Login success!");
			})
			.addCase(signInUser.rejected, (state, action) => {
				state.signIn = Status.FAILED;
				if (action.payload) {
					NotifyHelper.error("Username or password is incorrect!");
				}
			})
			//#endregion

			//#region action: confirmEmail
			.addCase(confirmEmail.pending, (state, action) => {
				state.confirmEmail = Status.PENDING;
			})
			.addCase(confirmEmail.fulfilled, (state, action) => {
				localStorage.removeItem("auth");
				state.confirmEmail = Status.SUCCESS;
			})
			.addCase(confirmEmail.rejected, (state, action) => {
				state.confirmEmail = Status.FAILED;
			})
			//#endregion

			//Handle for all actions
			.addMatcher(rejectedAction, (state, action) => {
				if (!action.payload) {
					NotifyHelper.error(action.error.message);
				}
			});
	},
});
export const { resetIdentityState, signOutUser } = identitySlice.actions;

export default identitySlice.reducer;
