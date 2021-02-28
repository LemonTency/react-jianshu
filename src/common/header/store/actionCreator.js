import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

export const searchFocusCreator = () =>
  ({
    type: SEARCH_FOCUS
  })

export const searchBlurCreator = () =>
  ({
    type: SEARCH_BLUR
  })