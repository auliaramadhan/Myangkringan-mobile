const initialState = {
  token: '',
  status: {},
  idLoading: false,
  isError: false,
  isSuccess: true,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_AUTH_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'POST_AUTH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case 'POST_AUTH_FULFILLED':
      return {
        ...state,
        status: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case 'GET_AUTH_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_AUTH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case 'GET_AUTH_FULFILLED':
      return {
        ...state,
        token: action.payload.data.auth,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default cart;
