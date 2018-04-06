import {FETCH_DECODE_SUCCESS, FETCH_ENCODE_SUCCESS} from "./actions";


const initialState = {
  decode: '',
  encode: '',
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DECODE_SUCCESS:
          return {...state, decode: action.message};
      case FETCH_ENCODE_SUCCESS:
          return {...state, encode: action.message};
      default:
          return state;
  }
};

export default reducer;