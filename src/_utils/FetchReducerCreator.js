export const initialState = {
  loading: false,
  error: null,
};

function FetchReducerCreator(counterName = '') {
  return function markers(state = initialState, action) {
    const { type, ...update } = action;
    switch (type) {
      case `SET_${counterName}`:
      case `LOADING_${counterName}`:
      case `ERROR_${counterName}`:
        return { ...state, ...update };
      default:
        return state;
    }
  };
}

export default FetchReducerCreator;
