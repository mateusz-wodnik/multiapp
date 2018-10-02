export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_ERROR,
  payload: { error },
});


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchUsers(query = '') {
  return (dispatch) => {
    dispatch(fetchUsersBegin());
    return fetch(`https://jsonplaceholder.typicode.com/users${query}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(users => dispatch(fetchUsersSuccess(users)))
      .catch(error => dispatch(fetchUsersError(error)));
  };
}
