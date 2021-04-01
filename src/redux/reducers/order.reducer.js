import * as types from "../constants/order.constants";

const initialState = {
  orders: [],
  totalPages: 1,
  loading: false,
  selectedOrder: null,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //GET ALL ORDERS
    case types.GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ORDERS_SUCCESS:
      return { ...state, orders: payload.orders, loading: false };
    case types.GET_ORDERS_FAILURE:
      return { ...state, loading: false };
    //CREATE ORDER
    case types.CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_ORDER_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_ORDER_FAILURE:
      return { ...state, loading: false };
    //GET MY ORDERS
    case types.GET_MY_ORDERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_MY_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: payload };
    case types.GET_MY_ORDERS_FAILURE:
      return { ...state, loading: false };
    //GET SINGLE ORDER
    case types.GET_SINGLE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_ORDER_SUCCESS:
      return { ...state, loading: false, selectedOrder: payload };
    case types.GET_SINGLE_ORDER_FAILURE:
      return { ...state, loading: false };
    //UPDATE ORDER STATUS
    case types.UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_ORDER_STATUS_SUCCESS:
      return { ...state, loading: false, selectedOrder: {...state.selectedOrder,payload} };
    case types.UPDATE_ORDER_STATUS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default orderReducer;
