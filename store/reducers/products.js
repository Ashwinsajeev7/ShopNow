import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, SET_PRODUCTS } from '../actions/products';
import Product from '../../models/product';

const initialState = {
   availableProducts: PRODUCTS,
   userProducts: PRODUCTS
};

export default (state = initialState, action) => {
   return state;
};