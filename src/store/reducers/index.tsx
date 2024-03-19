import {combineReducers} from '@reduxjs/toolkit';
// import { reducer as formReducer } from 'redux-form';
//import accountReducer from './reducers/accountReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import groupReducer from './groupReducer';

// const changeState = (state = initialState, {type, ...rest}) => {


const reducers = combineReducers({
  groups: persistReducer({
    key: 'groups', storage, keyPrefix: 'graph-'
  }, groupReducer),
});

export default reducers;
