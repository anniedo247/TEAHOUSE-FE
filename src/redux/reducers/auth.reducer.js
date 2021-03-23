import * as types from "../constants/auth.constants";

const isAuthenticated = !!localStorage.getItem("token");
const initialState = {
  user: {},
  isAuthenticated,
  accessToken: localStorage.getItem("token"),
  loading: false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //register
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loaing: false };
    //login
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        isAuthenticated: true,
        accessToken: payload.accessToken,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    //Get current user
    case types.GET_CURRENT_USER_REQUEST:
      return {...state, loading: true};
      case types.GET_CURRENT_USER_SUCCESS:
        return { ...state, isAuthenticated: true, loading: false, user: payload.user };
      case types.GET_CURRENT_USER_FAILURE:
        return { ...state, isAuthenticated:false,loading: false };

    //logout
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        accessToken: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
