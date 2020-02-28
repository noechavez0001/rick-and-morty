// results.js

import { fetchCharaters, fetchEpisodes, fetchEpisodes2 } from '../../api/rmapi'

// Inital State
const defaultState = {
  characters: [],
  episodes: [],
  loading: false,
  error: null
}

// Actions
const FIND_RESULTS_BEGIN = 'rick-and-morty/results/FIND_RESULT_BEGIN'
const FIND_RESULTS_SUCCESS = 'rick-and-morty/results/FIND_RESULT_SUCCESS'
const FIND_RESULTS_FAILURE = 'rick-and-morty/results/FIND_RESULT_FAILURE'

// Reducer
export default function reducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'rick-and-morty/results/FIND_RESULT_BEGIN': {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case 'rick-and-morty/results/FIND_RESULT_SUCCESS': {
      return {
        ...state,
        loading: false,
        characters: payload.characters,
        episodes: payload.episodes
      }
    }
    case 'rick-and-morty/results/FIND_RESULT_FAILURE': {
      return {
        ...state,
        loading: true,
        error: payload.error,
        characters: [],
        episodes: []
      }
    }
    default:
      return state
  }
}

// Action Creators

export function findResultsBegin (query) {
  return { type: FIND_RESULTS_BEGIN, payload: query }
}

export function findResultsSuccess (items) {
  return { type: FIND_RESULTS_SUCCESS, payload: items }
}

export function findResultsFailure (error) {
  return { type: FIND_RESULTS_FAILURE, payload: error }
}

// Thunk to search items from api
export function findResults (query, pageChar, pageEpi) {
  return async function (dispatch) {
    dispatch(findResultsBegin(query))
    try {
      let characters = []
      let episodes = []
      if (query.gender === '') {
        characters = await fetchCharaters(query, pageChar)
      } else {
        characters = await fetchCharaters(query, pageChar)
        episodes = await fetchEpisodes(query, pageEpi)
        if (!episodes.results) {
          episodes = await fetchEpisodes2(query, pageEpi)
        }
      }
      dispatch(findResultsSuccess({
        characters: characters,
        episodes: episodes
      }))
    } catch (error) {
      console.log(error)
      dispatch(findResultsFailure(error))
    }
  }
}
