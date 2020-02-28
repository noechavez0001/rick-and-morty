import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      characters: [],
      episodes: [],
      error: null
    }
  }

  // Retrive the recent items from localStorage
  componentDidMount () {
    const { recentItems } = JSON.parse(localStorage.getItem('redux')) ? JSON.parse(localStorage.getItem('redux')) : {
      recentItems: {
        rCharacters: null,
        rEpisodes: null,
        error: null
      }
    }
    this.setState({
      characters: recentItems.rCharacters,
      episodes: recentItems.rEpisodes,
      error: recentItems.error
    })
    console.log(recentItems)
  }

  render () {
    const { characters, episodes, error } = this.state
    console.log(this.state)
    return (
      <div>
        <SearchBar />
        <Page
          characters={characters}
          episodes={episodes}
          error={error}
        />
      </div>
    )
  }
}

// Mapping state redux to props
const mapStateToProps = (state) => {
  return {
    characters: state.rCharacters,
    episodes: state.rEpisode,
    error: state.error

  }
}

export default connect(mapStateToProps)(Home)
