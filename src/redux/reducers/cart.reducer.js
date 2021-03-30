import * as types from "../constants/cart.constants";

const initialState = {
  cartItems: [],
  shippingAddress:{},
  paymentMethod:"",
  loading: false,
};
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CART_ADD_ITEMS:
      return { ...state, cartItems: [...state.cartItems, payload] };
    case types.CART_REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== payload),
      };
    case types.ADD_QUANTITY:
      console.log("payload", payload);
      return { ...state, cartItems: state.cartItems.map(item =>
        item._id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ) };
      case types.SUB_QUANTITY:
        return { ...state, cartItems: state.cartItems.map(item =>
          item._id === payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item,
        ) };
      case types.SAVE_SHIPPING_ADDRESS:
        return {...state, shippingAddress: payload}
      case types.SAVE_PAYMENT_METHOD:
          return {...state, paymentMethod: payload}
      case types.CART_CLEAR_ITEMS:
         return {...state, cartItems:[],shippingAddress:{},paymentMethod:null}
    default:
      return state;
  }
};

export default cartReducer;
