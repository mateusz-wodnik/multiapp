import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchUsers,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersError,
} from './actions';
import mock from './mock.data.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('fetches users list', () => {
    fetch.once(JSON.stringify(mock));

    const expectedActions = [
      fetchUsersBegin(),
      fetchUsersSuccess(mock),
    ];

    const store = mockStore({});

    return (
      store.dispatch(fetchUsers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });

  it('handles fetch error', () => {
    const error = Error('Fetch failed');
    fetch.mockReject(error);

    const expectedActions = [
      fetchUsersBegin(),
      fetchUsersError(error),
    ];

    const store = mockStore({});

    return (
      store.dispatch(fetchUsers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  })
});
