import { combineReducers } from 'redux'
import {
  FETCHED_PARTES, CREATE_PARTE, EDIT_PARTE, DELETE_PARTE,
  FETCHED_TITULOS, CREATE_TITULO, EDIT_TITULO, DELETE_TITULO,
} from './actionType'

const parteReducers = (oldState='', action) => {
  switch (action.type) {
    case FETCHED_PARTES:
      return action.payload
    case CREATE_PARTE:
      return [...oldState, action.payload]
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  partes: parteReducers,
})

export default rootReducer
