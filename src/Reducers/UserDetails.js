export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_DETAILS":
        console.log(action.id)
            return {
                ...state,
                loading: true,
                userDetails: [],
                id: action.id
            }
        case "FETCH_FAILD": 
            return {
                ...state,
                loading: false,
                userDetails: []
            }
        case "FETCH_DETAILS_SUCCESS":
            return Object.assign({}, state, {
                userDetails: action.userDetails
            })
        default:
            return state;
    }
    }