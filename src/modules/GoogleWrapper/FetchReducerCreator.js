export const initialState = {
  loading: false,
  error: null,
};

function FetchReducerCreator(counterName = '') {
  return function markers(state = initialState, action) {
    const { type, ...update } = action;
    switch (action.type) {
      case `SET_${counterName}`:
        return { ...state, ...update };
      case `LOADING_${counterName}`:
        return { ...state, ...update };
      case `ERROR_${counterName}`:
        return { ...state, ...update };
      default:
        return state;
    }
  };
}

export default FetchReducerCreator;
