export const SET_PLACE = 'SET_PLACE';
export const REMOVE_PLACE = 'REMOVE_PLACE';

export const setPlace = place => ({
  type: SET_PLACE,
  place,
});

export const removePlace = () => ({
  type: REMOVE_PLACE,
  place: null,
});
