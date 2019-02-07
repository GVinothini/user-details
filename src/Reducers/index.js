import {combineReducers} from 'redux';
import reducer from './Reducer';
import user_details_reducer from './UserDetails';
import spec_details_reducer from './SpecificDetails'

const rootReducer = combineReducers({
 userreducer: reducer,
 detailreducer: user_details_reducer,
 specreducer : spec_details_reducer
});

export default rootReducer