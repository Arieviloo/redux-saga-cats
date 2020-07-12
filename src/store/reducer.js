import { API_SUCCESS, API_REQUEST, API_FAILURE } from "./actions";

const initialState = {
  catImageUrl: "",
  quoteText: "",
  fetching: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return { ...state, fetching: true, error: null };
      break;

    case API_SUCCESS:
      const { catImageUrl, quoteText } = action.payload;
      return { ...state, fetching: false, error: null, catImageUrl, quoteText };
      break;
    case API_FAILURE:
      return { ...state, fetching: false, error: action.error };
      break;

    default:
      return state;
  }
};
