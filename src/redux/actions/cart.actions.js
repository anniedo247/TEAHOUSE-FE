import api from "../apiService";
import { toast } from "react-toastify";
import * as types from "../constants/cart.constants";

const addToCart = (id, quantity, size) => async (dispatch, getState) => {
  const res = await api.get(`/products/${id}`);
  const data = res.data.data.productData;
  dispatch({
    type: types.CART_ADD_ITEMS,
    payload: {
      id:data._id,
      name: data.name,
      description: data.description,
      price: data.price,
      images: data.images,
      quantity,
      size,
    },
  });
  toast.success("Product added to cart");
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
const removeFromCart = (id) => (dispatch, getState) => {
  console.log("paylllll",id)
  dispatch({
    type: types.CART_REMOVE_ITEMS,
    payload: id,
  });
  toast.success("Product removed from cart");

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
const addQuantity = (id) => (dispatch, getState) => {
  console.log("id", id);
  dispatch({ type: types.ADD_QUANTITY, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
const subtractQuantity = (id) => (dispatch, getState) => {
  dispatch({ type: types.SUB_QUANTITY, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: types.SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: types.SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

const cartActions = {
  addToCart,
  removeFromCart,
  addQuantity,
  subtractQuantity,
  saveShippingAddress,
  savePaymentMethod,
};

export default cartActions;
