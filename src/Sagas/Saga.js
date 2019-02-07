import { put, takeLatest,takeEvery, all ,call } from 'redux-saga/effects';

        export function* fetchUsers() {
            try {
                console.log('user saga')
                const userlist = yield fetch('https://jsonplaceholder.typicode.com/users')
                                .then(response => response.json(), ); 
                yield put({ type: "FETCH_SUCCESS", userlist});
                console.log('sagagaa')
                return userlist
            } 
            catch (e) {
                yield put({ type: "FETCH_FAILD", e});
                return;
            }  
            }

            export function* fetchUserDetails(payload)  {  
                    try {
                        console.log('saga details')
                        console.log(payload.payload.id)
                        const id = payload.payload.id
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
                    const name=values.payload.name
                    const id=values.payload.id
                    const specdetails = yield fetch('https://jsonplaceholder.typicode.com/'+name+'?userId='+id)
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
            yield takeLatest("FETCH_USER_LIST", fetchUsers)
            yield takeLatest("FETCH_USER_DETAILS", fetchUserDetails)
            yield takeLatest("FETCH_USER_SPEC", fetchSpecificDetails)
        }
        
        export default function* rootSaga() {
            yield all([
            watchFetchProducts(),
            ]);
        }