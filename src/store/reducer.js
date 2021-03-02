import { combineReducers } from 'redux-immutable'
import { headReducer } from '../common/header/store'
import { homeReducer } from '../pages/home/store'
import { loginReducer } from '../pages/login/store'

export default combineReducers({
  header: headReducer,
  home: homeReducer,
  login: loginReducer
})