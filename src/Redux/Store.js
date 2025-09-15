import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import { persistReducer, persistStore } from 'redux-persist'
import RoleSlice from "./Slices/RoleSlice";
import AsyncStorage from '@react-native-async-storage/async-storage'

const rootReducers = combineReducers({
    AUTH: AuthSlice,
    ROLE: RoleSlice
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AUTH', 'ROLE']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getdefaultmiddleware) => getdefaultmiddleware({
        serializableCheck: false
    })
})


const persistedStore = persistStore(store);

export default persistedStore;
export { store };
