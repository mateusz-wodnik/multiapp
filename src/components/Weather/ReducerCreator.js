export const initialState = {
  items: [],
  loading: false,
  error: null,
};

function WeatherReducer(counterName = '') {
  return function weather(state = initialState, action) {
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

export default WeatherReducer;
