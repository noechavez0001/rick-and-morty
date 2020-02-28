// currentItem.js
import { fetchOneEpisode, fetchOneCharater } from '../../api/rmapi'

// Initial State
const defaultState = {
  loading: false,
  error: null,
  currentItem: {},
  type: '' // Element type character or episode
}

// Actions
const FIND_ITEM_BEGIN = 'rick-and-morty/currentItem/FIND_ITEM_BEGIN'
const FIND_ITEM_SUCCESS = 'rick-and-morty/currentItem/FIND_ITEM_SUCCESS'
const FIND_ITEM_FAILURE = 'rick-and-morty/currentItem/FIND_ITEM_FAILURE'

// Reducer
export default function reducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'rick-and-morty/currentItem/FIND_ITEM_BEGIN': {
      return {
        ...state,
        loading: true,
        error: null,
        type: ''
      }
    }
    case 'rick-and-morty/currentItem/FIND_ITEM_SUCCESS': {
      return {
        ...state,
        loading: false,
        currentItem: payload.currentItem,
        type: payload.type
      }
    }
    case 'rick-and-morty/currentItem/FIND_ITEM_FAILURE': {
      return {
        ...state,
        loading: true,
        error: payload,
        currentItem: {}
      }
    }
    default:
      return state
  }
}

// Action Creators

export function findItemBegin (id) {
  return { type: FIND_ITEM_BEGIN, payload: id }
}

export function findItemSuccess (currentItem) {
  return { type: FIND_ITEM_SUCCESS, payload: currentItem }
}

export function findItemFailure (error) {
  return { type: FIND_ITEM_FAILURE, payload: error }
}
// Thunk for retrieve a item from api
export function findCurrentItem (id, type) {
  return async function (dispatch) {
    dispatch(findItemBegin(id))
    try {
      let currentItem = {}
      if (type === 'character') {
        currentItem = await fetchOneCharater(id)
      } else {
        console.log(id)
        currentItem = await fetchOneEpisode(id)
      }
      dispatch(findItemSuccess({
        currentItem: currentItem,
        type: type
      }))
    } catch (error) {
      console.log(error)
      dispatch(findItemFailure(error))
    }
  }
}
