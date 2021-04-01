import { toast } from "react-toastify";
import api from "../apiService";
import * as types from "../constants/product.constants";

const getAllProducts = (pageNum, limit, category,searchTerm) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null });
  try {
    let url = `/products?page=${pageNum}&limit=${limit}`;
    if (category) {
      url = url + `&category=${category}`;
    }
    if (searchTerm) {
      url = url + `&search=${searchTerm}`;

    }
    const res = await api.get(url);
    if (res.data.success === true) {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data });
    }
  } catch (error) {
    dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error });
  }
};
const addSearchTerm = (searchTerm)=> async (dispatch)=> {
dispatch({type: types.ADD_SEARCH_TERM,payload:searchTerm})
}

const getAllFavoriteProducts = (pageNum, limit) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_FAVORITE_PRODUCTS_REQUEST, payload: null });
  try {
    let url = `/products/favorite?page=${pageNum}&limit=${limit}`;

    const res = await api.get(url);
    if (res.data.success === true) {
      dispatch({
        type: types.GET_ALL_FAVORITE_PRODUCTS_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({ type: types.GET_ALL_FAVORITE_PRODUCTS_FAILURE, payload: error });
  }
};
const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCTS_REQUEST, payload: null });
  try {
    const res = await api.get(`/products/${id}`);
    console.log("ress", res.data.data.avgRating);
    if (res.data.success === true) {
      dispatch({
        type: types.GET_SINGLE_PRODUCTS_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_PRODUCTS_FAILURE, payload: error });
  }
};
const addProduct = ({
  name,
  description,
  ingredients,
  price,
  images,
  categories,
}) => async (dispatch) => {
  dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.post("/products/add", {
      name,
      description,
      ingredients,
      price,
      images,
      categories,
    });
    console.log("create", res.data.data.categories);
    dispatch({ type: types.CREATE_PRODUCT_SUCCESS, payload: res.data.data });
    toast.success("Product created");
  } catch (error) {
    dispatch({ type: types.CREATE_PRODUCT_FAILURE, payload: error });
  }
};
const updateProduct = ( {productId,name,description,ingredients,weight,price,images,categories}
) => async (dispatch) => {
  dispatch({type: types.UPDATE_PRODUCT_REQUEST,payload:null});
  console.log("a",productId)
  console.log("b",name)

  console.log("c",description)
  console.log("d",ingredients)
  console.log("e",weight)
  console.log("f",price)
  console.log("g",images)
  console.log("h",categories)


  try {
    const res= await api.put(`products/${productId}/update`,{name,description,ingredients,weight,price,images,categories})
    if(res.data.data.success===true) {
      dispatch({type: types.UPDATE_PRODUCT_SUCCESS,payload: res.data.data})
      toast.success("Product updated");
    }
  } catch (error){
    dispatch({ type: types.UPDATE_PRODUCT_FAILURE, payload: error });

  }
};

const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.delete(`/products/${id}`);
    console.log("delete", res);
    dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: res.data.data });
    toast.success("Product deleted");
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: error });
  }
};
const addToFavorite = (id) => async (dispatch) => {
  dispatch({ type: types.ADD_TO_FAVORITE_REQUEST, payload: null });
  try {
    console.log("ahhhh", id);
    const res = await api.put(`/products/${id}/favorite`);
    console.log("put", res);
    dispatch({ type: types.ADD_TO_FAVORITE_SUCCESS, payload: res.data.data });
    toast.success("Product added to wishlist");
  } catch (error) {
    dispatch({ type: types.ADD_TO_FAVORITE_FAILURE, payload: error });
  }
};
const removeFromFavorite = (id) => async (dispatch) => {
  dispatch({ type: types.REMOVE_FROM_FAVORITE_SUCCESS, payload: null });
  try {
    const res = await api.delete(`/products/${id}/removefavorite`);
    console.log("delete", res);
    dispatch({
      type: types.REMOVE_FROM_FAVORITE_SUCCESS,
      payload: res.data.data,
    });
    toast.success("Product removed from wishlist");
  } catch (error) {
    dispatch({ type: types.REMOVE_FROM_FAVORITE_FAILURE, payload: error });
  }
};
const productActions = {
  getAllProducts,
  getAllFavoriteProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  addToFavorite,
  removeFromFavorite,
  addSearchTerm
};

export default productActions;
