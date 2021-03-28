import api from "../apiService";
import * as types from "../constants/order.constants";

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

const orderActions = {
  getAllOrders
}

export default orderActions;