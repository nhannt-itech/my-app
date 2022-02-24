import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	breadCrumbs: [],
};

/* ---------------------SLICE--------------------- */
const settingSlice = createSlice({
	name: "setting",
	initialState,
	reducers: {
		setBreadCrumbs: (state, action) => {
			state.breadCrumbs = action.payload;
		},
	},
});
export const { setBreadCrumbs } = settingSlice.actions;

export default settingSlice.reducer;
