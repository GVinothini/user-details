const routes = {
    '/users': function* usersSaga() {
      const users = yield call(fetchUsers);
      yield put(setUsers(users));
    },
   
    '/users/:id': function* userSaga({ id }) {
      const user = yield call(fetchUser, id);
      yield put(setCurrentUser(user));
    },
  };