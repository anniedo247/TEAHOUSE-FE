import * as types from "../constants/order.constants";

const initialState = {
  orders: [],
  totalPages: 1,
  loading : false
}

const orderReducer = (state = initialState, action) =>{
  const {type, payload} = action;
  switch (type) {
    case types.GET_ORDERS_REQUEST:
      return {...state,loading: true};
    case types.GET_ORDERS_SUCCESS:
      return {...state, orders: payload.orders, loading: false};
    case types.GET_ORDERS_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }

}

export default orderReducer;