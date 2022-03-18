import {UserAction, UserActionsTypes, UserState} from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return {users: [], loading: true, error: null}
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return {users: action.payload, loading: false, error: null}
    case UserActionsTypes.FETCH_USERS_ERROR:
      return {users: [], loading: false, error: action.payload}
    default:
      return state
  }
}
