import data from '../../tasks.data';

export const SET_LIST = 'SET_LIST';

export const setList = list => ({
  type: SET_LIST,
  list,
});

export const setListRequest = () => (
  (dispatch) => {
    const list = data;
    dispatch(setList(list));
  }
);
