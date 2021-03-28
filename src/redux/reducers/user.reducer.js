import * as types from "../constants/user.constants";

const initialState = {
  users: [],
  totalPages: 1,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //get all users
    case types.GET_ALL_USERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_USERS_SUCCESS:
      return { ...state, users: payload.users, loading: false };
    case types.GET_ALL_USERS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
