export const initialState = {
  items: [],
  loading: false,
  error: null,
};

function FetchReducerCreator(name = '') {
  return function markers(state = initialState, action) {
    const { type, item, _id, ...update } = action;
    switch (type) {
      case `SET_${name}`:
      case `LOADING_${name}`:
      case `ERROR_${name}`:
        return { ...state, ...update };
      case `ADD_${name}`:
        return { ...state, ...update, items: [...state.items, item] };
      case `REMOVE_${name}`:
        return { ...state, items: state.items.filter(element => element._id !== _id) };
      case `UPDATE_${name}`:
        return {
          ...state,
          items: state.items.map(element => (element._id === item._id ? item : element)),
        };
      default:
        return state;
    }
  };
}

export default FetchReducerCreator;
