export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_DETAILS":
        console.log('in details reducer')
            return {
                ...state,
                loading: true,
                userdetails: [],
            }
        case "FETCH_FAILD": 
            return {
                ...state,
                loading: false,
                userdetails: []
            }
        case "FETCH_DETAILS_SUCCESS":
            return { 
                state,
                userdetails: action.userdetails
            }
        default:
            return state;
    }
    }