import React, { Component } from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { findCurrentItem } from '../../redux/reducers/currentItem'
import { saveRecentItem } from '../../redux/reducers/recentItems'

class Episode extends Component {
  render () {
    const { currentItem } = this.props.currentItem
    if (currentItem !== {}) {
      console.log(currentItem)
      this.props.saveRecentItem(currentItem, 'episode')
    }
    return (
      <Page
        currentItem={currentItem}
      />
    )
  }

  // Retrive the episode data from api
  componentDidMount () {
    this.props.findCurrentItem(parseInt(this.props.match.params.episode), 'episode')
  }
}

// Mapping state redux to props of reducer recentItems
const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
    loading: state.loading,
    error: state.error,
    type: state.type
  }
}
// Mapping actions of redux to props of reducer recentItems
const mapDispatchToProps = (dispatch) => {
  return {
    saveRecentItem: (item, type) => dispatch(saveRecentItem(item, type)),
    findCurrentItem: (id, type) => dispatch(findCurrentItem(id, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode)
