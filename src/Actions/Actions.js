import { createAction } from 'redux-actions';

export const FETCH_USER_LIST='FETCH_USER_LIST';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_USER_DETAILS='FETCH_USER_DETAILS';
export const FETCH_DETAILS_SUCCESS='FETCH_DETAILS_SUCCESS';
export const FETCH_USER_SPEC='FETCH_USER_SPEC';
export const FETCH_SPEC_SUCCESS='FETCH_SPEC_SUCCESS';
export const FETCH_FAILD = 'FETCH_FAILD';

export const fetchuserlist = createAction(FETCH_USER_LIST);
export const fetchUserDetails = createAction(FETCH_USER_DETAILS);
export const fetchSpecificDetails = createAction(FETCH_USER_SPEC);
