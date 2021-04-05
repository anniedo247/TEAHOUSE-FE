import * as types from "../constants/auth.constants";
import api from "../apiService";
import { toast } from "react-toastify";

const register = ({ name, email, password }) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    toast.success(`Thank you for your registration ${name}!`);
    // api.defaults.headers.common["Authorization"] =
    //   "Bearer " + res.data.data.accessToken;

    localStorage.setItem("token", res.data.data.accessToken);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    console.log("datadata", res.data.data.accessToken);
    const name = res.data.data.user.name;

    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${name}`);
    // api.defaults.headers.common["Authorization"] =
    //   "Bearer " + res.data.data.accessToken;

    localStorage.setItem("token", res.data.data.accessToken);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};
const updateProfile = (name, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.UPDATE_CURRENT_USER_PROFILE_REQUEST, payload: null });
  try {
    const res = await api.put("/users/me", { name, avatarUrl });
    dispatch({
      type: types.UPDATE_CURRENT_USER_PROFILE_SUCCESS,
      payload: res.data.data,
    });
    toast.success(`Your profile has been updated.`);
  } catch (error) {
    dispatch({
      type: types.UPDATE_CURRENT_USER_PROFILE_FAILURE,
      payload: error,
    });
  }
};
const updateFavorite = (productId) => async (dispatch) => {
  dispatch({ type: types.UPDATE_FAVORITE_REQUEST, payload: null });
  try {
    const res = await api.put("/users/me/favorite", { productId});
    dispatch({ type: types.UPDATE_FAVORITE_SUCCESS, payload: res.data.data });
    dispatch(getCurrentUser());
    
  } catch (error) {
    dispatch({ type: types.UPDATE_FAVORITE_FAILURE, payload: error });
  }
};
const getOtherUserInfo = (id) => async (dispatch) => {
  dispatch({ type: types.GET_OTHER_USER_REQUEST, payload: null });
  try {
    const res = await api.get(`/users/${id}`);
    if (res.data.success) {
      dispatch({
        type: types.GET_CURRENT_USER_SUCCESS,
        payload: res.data.data.user,
      });
    }
  } catch (error) {
    dispatch({ type: types.GET_OTHER_USER_FAILURE, payload: error });
  }
};

const logout = () => (dispatch) => {
  delete api.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT, payload: null });
};

const authActions = {
  register,
  login,
  getCurrentUser,
  updateProfile,
  logout,
  getOtherUserInfo,
  updateFavorite,
};
export default authActions;
