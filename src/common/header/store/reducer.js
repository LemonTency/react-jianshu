import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS(
  {
    focued: false
  }
)

//reducer可以接收state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focued', true)
    case SEARCH_BLUR:
      return state.set('focued', false)
    default:
      return state
  }
}