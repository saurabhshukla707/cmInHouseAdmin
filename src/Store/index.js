import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "Services/Api/api";
import common from "./Common";
import { setupListeners } from '@reduxjs/toolkit/query'

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["common"],
};
const reducers = combineReducers({
    common,
    [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(api.middleware);
        return middlewares;
    },
}
     );

const persistor = persistStore(store);
setupListeners(store.dispatch);
export {store, persistor };