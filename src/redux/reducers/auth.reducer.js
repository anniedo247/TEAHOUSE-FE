import * as types from "../constants/auth.constants";

const isAuthenticated = !!localStorage.getItem("token");
const initialState = {
  user: {},
  isAuthenticated,
  accessToken: localStorage.getItem("token"),
  loading: false,
  selectedUser: null,
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
    //UPDATE USER PROFILE
    case types.UPDATE_CURRENT_USER_PROFILE_REQUEST:
      return {...state, loading: true};
    case types.UPDATE_CURRENT_USER_PROFILE_SUCCESS:
      return {...state,loading: false, user:{...state.user, payload}}
    case types.UPDATE_CURRENT_USER_PROFILE_FAILURE:
      return {...state, loading: false}
    //UPDATE FAVORITE
    case types.UPDATE_FAVORITE_REQUEST:
      return {...state, loading: true};
    case types.UPDATE_FAVORITE_SUCCESS:
      return {...state,loading: false, user:{...state.user, payload}}
    case types.UPDATE_FAVORITE_FAILURE:
      return {...state, loading: false}
    // Admin get user info
    case types.GET_OTHER_USER_REQUEST:
      return {...state, loading: true};
    case types.GET_OTHER_USER_SUCCESS:
      return {...state,loading: false, selectedUser: payload}
    case types.GET_OTHER_USER_FAILURE:
      return {...state, loading: false}
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
