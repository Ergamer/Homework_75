import axios from '../axios-messages';


export const FETCH_DECODE = 'FETCH_DECODE';
export const FETCH_ENCODE = 'FETCH_ENCODE';
export const FETCH_ENCODE_SUCCESS = 'FETCH_ENCODE_SUCCESS';
export const FETCH_DECODE_SUCCESS = 'FETCH_DECODE_SUCCESS';
export const FETCH_MESSAGE_ERROR = 'FETCH_MESSAGE_ERROR';


export const fetchDecodeSuccess = (message) => {
    return {type: FETCH_DECODE_SUCCESS, message}
};

export const fetchEncodeSuccess = (message) => {
    return {type: FETCH_ENCODE_SUCCESS, message}
};

export const fetchDecode = (messages) => {
    return (dispatch, getState) => {
        return axios.post('/decode', messages).then((result) => {
            dispatch(fetchDecodeSuccess(result.data));
        });
    }
};

export const fetchEncode = (messages) => {
    console.log(messages)
  return (dispatch) => {
      return axios.post('/encode', messages).then((result) => {
          dispatch(fetchEncodeSuccess(result.data));
      });
  }
};

