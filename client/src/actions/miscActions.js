// DONATE_SUCCESS
import axios from "axios";
import {
  DONATE_SUCCESS,
  STATUS_STREAM,
  GET_CONTESTANTS
} from "../constants/actionTypes";
import { displayError } from "./errorActions";

export const donate = donation => async dispatch => {
  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/donate/${donation.paymentReference}`,
      donation
    )
    .then(({ data }) => {
      dispatch({
        type: DONATE_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      const { data } = error.response;
      console.log(data, error.response, error.name);
      displayError(data.message)(dispatch);
    });
};

export const openStatus = () => async dispatch => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/openStatus`
    );
    dispatch({
      type: STATUS_STREAM,
      payload: result.data
    });
  } catch (error) {
    // const { data } = error.response;
    console.log(error.response, error.name);
    // displayError(data.message)(dispatch);
  }
};

export const getSearchResult = (username = "") => async dispatch => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/searchContestant?username=${username}`
    );
    dispatch({
      type: GET_CONTESTANTS,
      payload: result.data
    });
  } catch (error) {
    const { data } = error.response;
    console.log(data, error.response, error.name);
    // displayError(data.message)(dispatch);
  }
};
