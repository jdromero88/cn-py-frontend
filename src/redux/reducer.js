import { combineReducers } from 'redux'

const CREATE_PARTE = 'CREATE_PARTE'

const parteReducers = (oldState='', action) => {
  switch (action.type) {
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
