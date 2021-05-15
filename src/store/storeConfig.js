import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numerosReducer,
  
  nomes: function(state, action) {
    console.log("Reducers Nomes...")
    console.log(state, ' ', action)
    return [
      'Marcelo',
      'Thaís', 
      'Antônio',
      'Rose'
    ]
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
