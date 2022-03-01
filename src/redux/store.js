import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import settingSlice from "./setting.slice";
import identitySlice from "./identity.slice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const rootReducer = combineReducers({
	setting: settingSlice,
	identity: identitySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
const persistedStore = persistStore(store);
store.subscribe(() => {});

export { store, persistedStore };
