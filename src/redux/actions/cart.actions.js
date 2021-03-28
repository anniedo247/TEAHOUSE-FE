import api from "../apiService";
import * as types from "../constants/cart.constants";


const addToCart = (id, qty, size) => async (dispatch, getState) => {
  const res = await api.get(`/products/${id}`);
  dispatch({
    type: types.CART_ADD_ITEMS,
    payload: { ...res.data.data.productData, qty, size },
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
};
 const removeFromCart = (id) => (dispatch, getState) => {
   console.log("id",id)
  dispatch({
    type: types.CART_REMOVE_ITEMS,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
const cartActions = {
  addToCart,
  removeFromCart,
}

export default cartActions;
