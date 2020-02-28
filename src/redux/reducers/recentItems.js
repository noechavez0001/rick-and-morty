// recentItems.js

// Initial State
const defaultState = {
  rCharacters: [],
  rEpisodes: [],
  error: null
}

// Actions
const FIND_RECENT_ITEMS = 'rick-and-morty/recentItems/FIND_RECENT_ITEMS'
const SAVE_RECENT_ITEMS = 'rick-and-morty/recentItems/SAVE_RECENT_ITEM'

// Reducer
export default function reducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'rick-and-morty/recentItems/FIND_RECENT_ITEMS': {
      return {
        ...state
      }
    }
    case 'rick-and-morty/recentItems/SAVE_RECENT_ITEM': {
      const newState = { ...state }
      if (payload.type === 'character') {
        if (newState.rCharacters) {
          newState.rCharacters.map((n, index) => {
            if (n === {}) {
              newState.rCharacters.splice(index, 1)
            }
            if (n.id === payload.item.id) {
              newState.rCharacters.splice(index, 1)
            }
            return false
          })
          newState.rCharacters.unshift(payload.item)
        } else { newState.rCharacters = [payload.item] }
        if (newState.rCharacters.length > 20) {
          newState.rCharacters.splice(20, 1)
        }
      } else {
        if (newState.rEpisodes) {
          newState.rEpisodes.map((n, index) => {
            if (n === {}) {
              newState.rEpisodes.splice(index, 1)
            }
            if (n.id === payload.item.id) {
              newState.rEpisodes.splice(index, 1)
            }
            return false
          })
          newState.rEpisodes.unshift(payload.item)
          if (newState.rEpisodes.length > 20) {
            newState.rEpisodes.splice(20, 1)
          }
        } else { newState.rEpisodes = [payload.item] }
      }
      return {
        ...state,
        rCharacters: newState.rCharacters,
        rEpisodes: newState.rEpisodes
      }
    }
    case 'rick-and-morty/recentItems/SAVE_ITEMS_FUILURE': {
      return {
        ...state,
        error: payload
      }
    }
    default:
      return state
  }
}

// Action Creators

export function findRecentItems () {
  return { type: FIND_RECENT_ITEMS, payload: {} }
}

export function saveRecentItem (item, type) {
  return { type: SAVE_RECENT_ITEMS, payload: { item: item, type: type } }
}
