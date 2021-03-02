import axios from 'axios'
import { CHANGE_LOGIN, LOGOUT } from './actionTypes'

const changeLogin = () => ({
  type: CHANGE_LOGIN,
  value: true
})

export const changeLogout = () => ({
  type: LOGOUT,
  value: false
})

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogout())
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      }
    }).catch((res) => {
      console.error(res)
    })
  }
}

