import reducer, { initialState } from './reducer';
import { fetchUsersBegin, fetchUsersSuccess, fetchUsersError } from './actions';
import mock from './mock.data.json';

describe('Pokemon list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should start fetch, start loading and reset errors', () => {
    expect(reducer(initialState, fetchUsersBegin())).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('should stop loading and return fetched users', () => {
    expect(reducer(initialState, fetchUsersSuccess(mock))).toEqual({
      ...initialState,
      loading: false,
      users: mock,
    });
  });

  it('should stop loading, set error object and reset users to initial state', () => {
    const error = Error('Fetch failed');
    expect(reducer(initialState, fetchUsersError(error))).toEqual({
      ...initialState,
      loading: false,
      error,
      users: initialState.users,
    });
  });
});
