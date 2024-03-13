import {combineReducers} from '@reduxjs/toolkit';
// import { reducer as formReducer } from 'redux-form';
//import accountReducer from './reducers/accountReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  // sidebarShow: false//'responsive'
  sidebarShow: false
}

// const changeState = (state = initialState, {type, ...rest}) => {


const reducers = combineReducers({
 
});

export default reducers;
