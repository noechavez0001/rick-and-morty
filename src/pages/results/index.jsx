import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'
import { findResults } from '../../redux/reducers/results'

// import Grid from '@material-ui/core/Grid'
// import CssBaseLine from '@material-ui/core/CssBaseline'

class Results extends React.Component {
  render () {
    const { results } = this.props
    return (
      <div>
        <SearchBar />
        <Page
          results={results}
          pageChar={this.props.location.state.pageChar ? this.props.location.state.pageChar : 1}
          pageEpi={this.props.location.state.pageEpi ? this.props.location.state.pageEpi : 1}
          query={this.props.location.state.query ? this.props.location.state.query : {}}
        />
      </div>
    )
  }

  // Search items from the api with the given query the first time
  componentDidMount () {
    this.props.dispatch(findResults(this.props.location.state ? this.props.location.state.query : ''))
  }

  // Decides if update the component on pagination or new search
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.location.state) {
      return
    }
    const { pageChar, pageEpi, query } = this.props.location.state
    if (prevProps.location.state.query !== query || prevProps.location.state.pageChar !== pageChar || prevProps.location.state.pageEpi !== pageEpi) {
      if (prevProps.location.state.query !== query) {
        this.handleUpdate(1, 1)
      } else {
        this.handleUpdate(pageChar, pageEpi)
      }
    }
  }

  // Search items and update the component
  handleUpdate (pageChar, pageEpi) {
    this.props.dispatch(findResults(this.props.location.state ? this.props.location.state.query : '', pageChar, pageEpi))
  }
}

// Mapping state redux to props of results reducer
const mapStateToProps = (state) => {
  return {
    results: state.results,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Results)
