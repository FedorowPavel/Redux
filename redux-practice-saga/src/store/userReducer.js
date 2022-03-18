const defaultState = {
  users: []
}

export const SET_USERS = "SER_USERS"
export const FETCH_USERS = "FETCH_USERS"

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.payload}
    default:
      return state
  }
}

export const setUsers = (payload) => ({type: SET_USERS, payload})
export const fetchUsers = (payload) => ({type: FETCH_USERS})
