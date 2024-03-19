import {useDispatch as useReduxDispatch, useSelector as useReduxSelector} from 'react-redux';
import {persistStore} from 'redux-persist';
import {configureStore,  Middleware} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = configureStore({
  reducer: reducers, 
  devTools: true, 
  // middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk),
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

const persister = persistStore(store);

export {store, persister};