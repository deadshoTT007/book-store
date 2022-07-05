import { combineReducers } from 'redux';
import products from '../reducers/products'
import categories from '../reducers/categories'

export default combineReducers({products,categories})