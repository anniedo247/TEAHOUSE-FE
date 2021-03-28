import * as types from "../constants/cart.constants";

const initialState = {
  cartItems: [],
  loading: false,
};
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CART_ADD_ITEMS:
      return { ...state, cartItems: [...state.cartItems, payload] };
    case types.CART_REMOVE_ITEMS:
      console.log("payload",payload)
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
