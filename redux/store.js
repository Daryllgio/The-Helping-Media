import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import UserReducer from './reducers/User';
import {logger} from 'redux-logger';
import categoriesReducer from './reducers/categoriesSlice';

const rootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat(logger);
  },
});

export default store;

export const persistor = persistStore(store);
