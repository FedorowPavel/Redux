import {UserAction, UserActionsTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionsTypes.FETCH_USERS})
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: res.data})
      }, 500)

    } catch (e) {
      dispatch({type: UserActionsTypes.FETCH_USERS_ERROR, payload: 'error message'})
    }
  }
}
