import { createStore, combineReducers } from 'redux';
import productReducer from './Reducers/productReducers'

const initialState = {};

const reducer = combineReducers({
	productReducer
});

const store = createStore(reducer, initialState);
