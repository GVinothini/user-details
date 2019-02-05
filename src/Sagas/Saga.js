import { put, takeLatest,takeEvery, all ,call } from 'redux-saga/effects';
import queryString from 'query-string';
export function* fetchProducts() {
    try {
        console.log('saga')
        const userlist = yield fetch('https://jsonplaceholder.typicode.com/users')
                          .then(response => response.json(), ); 
        yield put({ type: "FETCH_SUCCESS", userlist});
    } 
    catch (e) {
        yield put({ type: "FETCH_FAILD", e});
        return;
    }
    }

   export function* fetchUserDetails()  {
    
        try {
              const userdetails = yield fetch('https://jsonplaceholder.typicode.com/users?id')
                .then(response => response.json(), ); 
                yield put({ type: "FETCH_DETAILS_SUCCESS", userdetails});
          } 
                catch (e) {
                yield put({ type: "FETCH_FAILD", e});
                return;

        }
   } 
    
    export function* watchFetchProducts() {
        yield takeLatest("FETCH_USER_LIST", fetchProducts)
        yield takeLatest("FETCH_USER_DETAILS", fetchUserDetails)
    }
    
   export default function* rootSaga() {
      yield all([
      watchFetchProducts(),
      ]);
   }