export const SET_MARKERS = 'SET_MARKERS';
export const ADD_MARKER = 'ADD_MARKER';
export const REMOVE_MARKER = 'REMOVE_MARKER';
export const UPDATE_MARKER = 'UPDATE_MARKER';

export const setMarkers = markers => ({
  type: SET_MARKERS,
  markers,
});

export const addMarker = marker => ({
  type: ADD_MARKER,
  marker,
});

export const removeMarker = marker => ({
  type: REMOVE_MARKER,
  marker,
});

export const updateMarker = marker => ({
  type: UPDATE_MARKER,
  marker,
});
