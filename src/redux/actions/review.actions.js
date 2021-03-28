import api from "../apiService";
import * as types from "../constants/review.constants";
import { toast } from "react-toastify";


const createReview = (productId,title, body, rating) => async (dispatch) =>{
  dispatch({type: types.CREATE_REVIEWS_REQUEST, payload: null});
  try {
    console.log("hiuhiuhiuh",productId,title,body,rating)
    const res = await api.post("/reviews",{productId, title, body, rating})
    console.log("create",res.data)
    dispatch({type: types.CREATE_REVIEWS_SUCCESS, payload: res.data.data});
    toast.success("Review created")
  } catch (error) {
    dispatch({ type: types.CREATE_REVIEWS_FAILURE, payload: error });
  }
}
const reviewActions = {
  createReview
}

export default reviewActions;