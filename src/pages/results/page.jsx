import React from 'react'
import CharacterList from '../../components/CharaterList'
import EpisodeList from '../../components/EpisodeList'
import Pagination from '@material-ui/lab/Pagination'
import { useHistory } from 'react-router-dom'

function Page (props) {
  // Actual pages of search
  const [pageChar] = React.useState(props.pageChar)
  const [pageEpi] = React.useState(props.pageEpi)
  const history = useHistory()
  if (props.results.characters.results && props.results.episodes.results) {
    return (
      <div>
        <h1>Search Results</h1>
        <CharacterList
          loading={props.results.loading}
          error={props.results.error}
          data={props.results.characters}
        />
        <Pagination
          count={props.results.characters.info.pages}
          onChange={(event, page) => {
            history.push({
              pathname: '/results',
              state: { query: props.query, pageChar: page, pageEpi: pageEpi }
            })
          }}
        />
        <EpisodeList
          loading={props.results.loading}
          error={props.results.error}
          data={props.results.episodes}
        />
        <Pagination
          count={props.results.episodes.info.pages}
          onChange={(event, page) => {
            history.push({
              pathname: '/results',
              state: { query: props.query, pageChar: pageChar, pageEpi: page }
            })
          }}
        />
      </div>
    )
  } else if (props.results.characters.results) {
    return (
      <div>
        <h1>Search Results</h1>
        <CharacterList
          loading={props.results.loading}
          error={props.results.error}
          data={props.results.characters}
        />
        <Pagination
          count={props.results.characters.info.pages}
          onChange={(event, page) => {
            history.push({
              pathname: '/results',
              state: { query: props.query, pageChar: page, pageEpi: pageEpi }
            })
          }}
        />
      </div>
    )
  } else if (props.results.episodes.results) {
    return (
      <div>
        <h1>Search Results</h1>
        <EpisodeList
          loading={props.results.loading}
          error={props.results.error}
          data={props.results.episodes}
        />
        <Pagination
          count={props.results.episodes.info.pages}
          onChange={(event, page) => {
            history.push({
              pathname: '/results',
              state: { query: props.query, pageChar: pageChar, pageEpi: page }
            })
          }}
        />
      </div>
    )
  } else if (props.results.loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>There are no results </h1>
      </div>
    )
  }
}

export default Page
