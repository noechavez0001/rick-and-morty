import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import results from './reducers/results'
import currentItem from './reducers/currentItem'
import recentItems from './reducers/recentItems'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  results,
  currentItem,
  recentItems
})

// Enhansers
const mainEnhanser = compose(applyMiddleware(thunk), persistState('recentItems'))

const store = createStore(rootReducer, mainEnhanser)

export default store
