import { toast } from "react-toastify";
import api from "../apiService";
import * as types from "../constants/order.constants";
import {CART_CLEAR_ITEMS} from "../constants/cart.constants";
import { type } from "os";

const getAllOrders = () => async (dispatch) => {
  dispatch({ type: types.GET_ORDERS_REQUEST, payload: null });
  try {
    const res = await api.get("/orders");
    if (res.data.success === true) {
      dispatch({ type: types.GET_ORDERS_SUCCESS, payload: res.data.data });
      

    }
  } catch (error) {
    dispatch({ type: types.GET_ORDERS_FAILURE, payload: error });
  }
};
const createOrder = (order) => async (dispatch) => {
  dispatch({ type: types.CREATE_ORDER_REQUEST, payload: null });
  try {
    const res = await api.post ("/orders",{order})
    if (res.data.success) {
      dispatch({type: types.CREATE_ORDER_SUCCESS,payload: res.data.data})
      dispatch({type: CART_CLEAR_ITEMS, payload: res.data.data})
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");
      toast.success("Order created")
    }
  } catch (error) {
    dispatch({ type: types.CREATE_ORDER_FAILURE, payload: error });

  }


}
const orderActions = {
  getAllOrders,
  createOrder,
}

export default orderActions;