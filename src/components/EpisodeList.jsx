import React from 'react'
import Element from './Element'
import Grid from '@material-ui/core/Grid'
import temp1 from '../images/temp1.jpg'
import temp2 from '../images/temp2.jpg'
import temp3 from '../images/temp3.jpg'

class EpisodeList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  render () {
    // For home page
    if (this.props.recentItems) {
      return (
        <div>
          <h2>Episodes</h2>
          <hr />
          <Grid container spacing={2} style={{ padding: 24 }}>
            {this.props.data.map((episode) => {
              if (!episode.id) { return (false) }
              return (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={episode.id}>
                  <Element
                    id={episode.id}
                    title={episode.episode}
                    description={episode.name}
                    type='Episode'
                    key={episode.id}
                  />
                </Grid>
              )
            })}
          </Grid>
        </div>
      )
    } else {
      // For search results
      return (
        <div>
          <h2>Episodes</h2>
          <hr />
          <Grid container spacing={2} style={{ padding: 24 }}>
            {this.props.data.results.map((episode) => {
              // select image for episode
              let image = temp1
              if (episode.episode.includes('S02')) {
                image = temp2
              } else if (episode.episode.includes('S03')) {
                image = temp3
              }
              return (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={episode.id}>
                  <Element
                    id={episode.id}
                    title={episode.episode}
                    description={episode.name}
                    image={image}
                    type='Episode'
                    key={episode.id}
                  />
                </Grid>
              )
            })}
          </Grid>
        </div>
      )
    }
  }
}

export default EpisodeList
