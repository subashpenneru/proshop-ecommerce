import axios from 'axios';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants';

export const listProducts = () => async (dispacth) => {
  try {
    dispacth({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispacth({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispacth({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispacth) => {
  try {
    dispacth({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispacth({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispacth({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
