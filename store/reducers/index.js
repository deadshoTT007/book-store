import { combineReducers } from 'redux';
import products from '../reducers/products'
import categories from '../reducers/categories'
import auth from '../reducers/auth'
import cart from '../reducers/cart'
import profile from '../reducers/profile'

export default combineReducers({auth,products,categories,cart, profile})