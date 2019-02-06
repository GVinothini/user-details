export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_LIST":
        console.log('in list reducer')

            return {
                ...state,
                loading: true,
                userlist: []
            }
        case "FETCH_FAILD": 
            return {
                ...state,
                loading: false,
                userlist: []
            }
        case "FETCH_SUCCESS":
            return { state,
                userlist: action.userlist
            }
        default:
            return state;
    }
    }