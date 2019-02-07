export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_SPEC":
        console.log('in specifc reducer')

            return {
                ...state,
                loading: true,
                specdetails: []
            }
        case "FETCH_FAILD": 
            return {
                ...state,
                loading: false,
                specdetails: []
            }
        case "FETCH_SPEC_SUCCESS":
            return { state,
                specdetails: action.specdetails
            }
        default:
            return state;
    }
    }