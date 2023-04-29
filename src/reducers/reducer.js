import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/ActionType";
import { combineReducers } from "redux";

const initialState = {
  loading: true,
  data: [],
  cartData: [],
  error: "",
  totalAmount: 0,
  isProductPresent: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_PRODUCT_CART":
      const { id, title, price, thumbnail } = action.payload;
      const isFound = state.cartData.some((element) => {
        if (element.id === id) {
          return true;
        }
        return false;
      });
      if (isFound) {
        return {
          ...state,
          isProductPresent: true,
        };
      } else {
        return {
          ...state,
          cartData: [
            ...state.cartData,
            {
              id: id,
              title: title,
              price: price,
              thumbnail: thumbnail,
            },
          ],
          totalAmount: state.totalAmount + price,
          isProductPresent: false,
        };
      }

    case "DELETE_PRODUCT":
      const filterPrice = state.cartData.find(
        (value) => value.id === action.payload
      );
      const remaningAmount = state.totalAmount - filterPrice.price;
      const afterFiletProduct = state.cartData.filter(
        (item) => item.id != action.payload
      );
      // console.log("afterFiletProduct=>", afterFiletProduct);

      return {
        ...state,
        cartData: afterFiletProduct,
        totalAmount: remaningAmount,
      };
    case "RESET":
      state = initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
