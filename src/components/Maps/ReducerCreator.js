export const initialState = {
  markers: [],
  loading: false,
  error: null,
};

function MarkerReducer(counterName = '') {
  return function markers(state = initialState, action) {
    const { type, ...update } = action;
    switch (action.type) {
      case `SET_${counterName}`:
        return { ...state, ...update };
      case `LOADING_${counterName}`:
        return { ...state, ...update };
      case `ERROR_${counterName}`:
        return { ...state, ...update };
      case `ADD_${counterName}`:
        return [...state, update.marker];
      case `REMOVE_${counterName}`:
        return state.filter(item => item !== action.marker); // eslint-disable-line
      case `UPDATE_${counterName}`:
        const newState = [...state]; // eslint-disable-line
        newState[0].y = 17.038538;
        newState[0].x = 51.107883;
        return newState;
      default:
        return state;
    }
  };
}

export default MarkerReducer;
