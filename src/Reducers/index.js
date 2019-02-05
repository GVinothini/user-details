import {combineReducers} from 'redux';
import reducer from './Reducer';
import user_details_reducer from './UserDetails';

export default combineReducers({
    reducer,
    user_details_reducer
});
