import * as types from "../constants/review.constants"

const initialState = {
  reviews: [],
  loading: false
}

const reviewReducer = (state=initialState, action) => {
  const {type, payload} = action;
  // CREATE REVIEW
  switch (type) {
    case types.CREATE_REVIEWS_REQUEST:
      return {...state,loading: true};
    case types.CREATE_REVIEWS_SUCCESS:
      return {...state, reviews: payload.review, loading: false}
    case types.CREATE_REVIEWS_FAILURE:
      return {...state,loading: false};
    default:
      return state;
  }
}

export default reviewReducer;