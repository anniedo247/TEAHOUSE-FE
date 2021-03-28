import api from "../apiService";
import * as types from "../constants/user.constants";

const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USERS_REQUEST, payload: null });
  try {
    const res = await api.get("/users");
    console.log('resss',res.data.data.users)
    if (res.data.success === true) {
      dispatch({ type: types.GET_ALL_USERS_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: types.GET_ALL_USERS_FAILURE, payload: error });
  }
};


const userActions = {
  getAllUsers
}

export default userActions;