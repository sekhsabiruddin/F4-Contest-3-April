import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/ActionType";
import axios from "axios";

// let initialState = {
//     loading: true,
//     data: [],
//     error: ""
// }

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
//it is for Add the produt in the card

export const addTheProduct = (item) => ({
  type: "ADD_PRODUCT_CART",
  payload: item,
});
export const deleteTheProduct = (item) => ({
  type: "DELETE_PRODUCT",
  payload: item,
});
export const reset = () => ({
  type: "RESET",
});
export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest);
  try {
    const reponse = await axios.get("https://dummyjson.com/products");
    dispatch(fetchDataSuccess(reponse.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));

    // error.name
    // error.message
  }
};
