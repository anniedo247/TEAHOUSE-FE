import {combineReducers} from 'redux';
import authReducer from "./auth.reducer";
import cartReducer from './cart.reducer';
import orderReducer from './order.reducer';
import productReducer from "./product.reducer";
import reviewReducer from "./review.reducer"
import userReducer from "./user.reducer"
export default combineReducers ({
  auth: authReducer,
  product: productReducer,
  review: reviewReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
});