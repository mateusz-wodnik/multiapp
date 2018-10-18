export const initialState = {
  markers: {},
  loading: false,
  error: null,
};

function MarkerReducer(counterName = '') {
  return function markers(state = initialState, action) {
    const { type, marker, ...update } = action;
    switch (type) {
      case `SET_${counterName}`:
      case `LOADING_${counterName}`:
      case `ERROR_${counterName}`:
        return { ...state, ...update };
      case `ADD_${counterName}`:
        return { ...state, markers: [...state.markers, marker] };
      case `REMOVE_${counterName}`:
        return { ...state, markers: state.markers.filter(item => item !== marker) };
      default:
        return state;
    }
  };
}

export default MarkerReducer;
