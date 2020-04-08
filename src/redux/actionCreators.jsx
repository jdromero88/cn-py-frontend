import {
  FETCHED_PARTES, CREATE_PARTE, EDIT_PARTE, DELETE_PARTE,
  FETCHED_TITULOS, CREATE_TITULO, EDIT_TITULO, DELETE_TITULO,
} from './actionType'

const BASE_URL = 'http://localhost:3000/'
const PARTE_URL = `${BASE_URL}partes`

function fetchedPartes(partes) {
  return{type:FETCHED_PARTES, payload:partes}
}

function fetchingPartes() {
  return dispatch => {
    fetch(PARTE_URL)
    .then( res => res.json())
    .then( parte => {
      if(parte){
        dispatch(fetchedPartes(parte))
      }
    })
    .catch( err => console.warn(err))
  }
}

export { fetchingPartes, fetchedPartes }
