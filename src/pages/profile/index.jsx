import React, { Component } from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { findCurrentItem } from '../../redux/reducers/currentItem'
import { saveRecentItem } from '../../redux/reducers/recentItems'

class Profile extends Component {
  render () {
    const { currentItem } = this.props.currentItem
    this.props.saveRecentItem(currentItem, 'character')
    return (
      <Page
        currentItem={currentItem}
      />
    )
  }

  // Save item visited on localStorage
  componentDidMount () {
    this.props.findCurrentItem(parseInt(this.props.match.params.id), 'character')
  }
}

// Mapping state to props of reducer recentItems
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
