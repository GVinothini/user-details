import { put, takeLatest,takeEvery, all ,call } from 'redux-saga/effects';
import queryString from 'query-string';

        export function* fetchProducts() {
            try {
                console.log('saga')
                const userlist = yield fetch('https://jsonplaceholder.typicode.com/users')
                                .then(response => response.json(), ); 
                yield put({ type: "FETCH_SUCCESS", userlist});
                return userlist
            } 
            catch (e) {
                yield put({ type: "FETCH_FAILD", e});
                return;
            }  
            }

            export function* fetchUserDetails(id)  {  
                    try {
                        console.log('saga1')
                        const id=5
                        const userdetails = yield fetch('https://jsonplaceholder.typicode.com/users?id='+id)
                                .then(response => response.json(), ); 
                            yield put({ type: "FETCH_DETAILS_SUCCESS", userdetails});
                            return userdetails
                    } 
                            catch (e) {
                            yield put({ type: "FETCH_FAILD", e});
                            return;

                    }
            } 
    

            export function* fetchSpecificDetails(values)  {  
                try {
                    const name='albums'
                    const id=5
                    console.log(values)
                    const specdetails = yield fetch('https://jsonplaceholder.typicode.com/albums?userId='+id)
                            .then(response => response.json(), ); 
                        yield put({ type: "FETCH_SPEC_SUCCESS", specdetails});
                        return specdetails
                     
                } 
                        catch (e) {
                        yield put({ type: "FETCH_FAILD", e});
                        return;

                }
        } 



        export function* watchFetchProducts() {
            yield takeLatest("FETCH_USER_LIST", fetchProducts)
            yield takeLatest("FETCH_USER_DETAILS", fetchUserDetails)
            yield takeLatest("FETCH_USER_SPEC", fetchSpecificDetails)
        }
        
        export default function* rootSaga() {
            yield all([
            watchFetchProducts(),
            ]);
        }