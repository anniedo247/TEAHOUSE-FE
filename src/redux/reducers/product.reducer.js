import * as types from "../constants/product.constants";

const initialState = {
  products: [],
  selectedProduct: null,
  totalPages: 1,
  loading: false,
  avgRating: null,
  searchTerm:"",
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //GET ALL PRODUCTS
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        totalPages: payload.totalPages,
        loading: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    
    //GET SINGLE PRODUCTS
    case types.GET_SINGLE_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProduct: payload.productData,
        avgRating: payload.avgRating,
      };
    case types.GET_SINGLE_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    //add SearchTerm
    case types.ADD_SEARCH_TERM:
      return {...state, searchTerm:payload}

    //CREATE NEW PRODUCT
    case types.CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    //UPDATE A PRODUCT
    case types.UPDATE_PRODUCT_REQUEST:
      return {...state, loading:true}
    case types.UPDATE_PRODUCT_SUCCESS:
      return {...state,loading:false,selectedProduct:{...state.selectedProduct,payload}};
    case types.UPDATE_PRODUCT_FAILURE:
      return {...state,loading: false}
    //DELETE PRODUCT
    case types.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_PRODUCT_SUCCESS:
      return { ...state, loading: false, selectedProduct: {} };
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false };
    //ADD TO FAVORITE
    case types.ADD_TO_FAVORITE_REQUEST:
      return { ...state, loading: false };
    case types.ADD_TO_FAVORITE_SUCCESS:
      return { ...state, loading: false, selectedProduct: payload.productData };
    case types.ADD_TO_FAVORITE_FAILURE:
      return { ...state, loading: false };
   //REMOVE FROM FAVORITE
   case types.REMOVE_FROM_FAVORITE_REQUEST:
      return { ...state, loading: false };
    case types.REMOVE_FROM_FAVORITE_SUCCESS:
      return { ...state, loading: false, selectedProduct: payload.productData };
    case types.REMOVE_FROM_FAVORITE_FAILURE:
      return { ...state, loading: false };
    //GET FAVORITE PRODUCTS
      case types.GET_ALL_FAVORITE_PRODUCTS_REQUEST:
        return { ...state, loading: true };
      case types.GET_ALL_FAVORITE_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: payload.products,
          totalPages: payload.totalPages,
          loading: false,
        };
      case types.GET_ALL_FAVORITE_PRODUCTS_FAILURE:
        return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer;
