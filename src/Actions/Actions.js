export const fetchuserlist = () => {
    return {
      type: 'FETCH_USER_LIST'
    }
  }
  
  export const fetchSuccess = data => ({
      type: "FETCH_SUCCESS",
      userlist: data
  })
  
  
  export const fetchFaild = () => {
      return {
          type: 'FETCH_FAILD'
      }
  }

  export const fetchUserDetails = ()=>  {
        return {
            type:  'FETCH_USER_DETAILS'
        }
  }

  export const fetchDetailsSuccess = data => ( {
      type: "FETCH_DETAILS_SUCCESS",
      userdetails : data
  })

  export const fetchSpecificDetails = ()=>  {
    return {
        type:  'FETCH_USER_SPEC'
    }
}

export const specDetailsSuccess = data => ( {
  type: "FETCH_SPEC_SUCCESS",
  specdetails : data
})

  