import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../reducer/authReducer';
import { companyReducer } from '../reducer/companyReducer';
import { userReducer } from '../reducer/userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'company', 'user']
}

const reducers = combineReducers({
  auth: authReducer,
  company: companyReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer, // persistedReducer, reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);