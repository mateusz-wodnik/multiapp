export const initialState = {
  loading: false,
  error: null,
};

function FetchReducerCreator(name = '') {
  return function markers(state = initialState, action) {
    const { type, ...update } = action;
    switch (type) {
      case `SET_${name}`:
      case `LOADING_${name}`:
      case `ERROR_${name}`:
        return { ...state, ...update };
      default:
        return state;
    }
  };
}

export default FetchReducerCreator;
