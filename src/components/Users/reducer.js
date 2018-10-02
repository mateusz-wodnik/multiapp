import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './actions';


export const initialState = {
  list: [],
  error: null,
  loading: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: initialState.users,
      };

    default:
      return state;
  }
}

export default usersReducer;
