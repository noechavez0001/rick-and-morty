import React from 'react'
import Element from './Element'
import Grid from '@material-ui/core/Grid'

class CharacterList extends React.Component {
  render () {
    // For home page
    if (this.props.recentItems) {
      return (
        <div>
          <h2>Characters</h2>
          <hr />
          <Grid container spacing={2} style={{ padding: 24 }}>
            {this.props.data.map((character) => {
              if (!character.name) { return (false) }
              return (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={character.id}>
                  <Element
                    title={character.name}
                    description={character.species}
                    image={character.image}
                    type='Character'
                    id={character.id}
                    other={character}
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
          <h2>Characters</h2>
          <hr />
          <Grid container spacing={2} style={{ padding: 24 }}>
            {this.props.data.results.map((character) => {
              return (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={character.id}>
                  <Element
                    title={character.name}
                    description={character.species}
                    image={character.image}
                    type='Character'
                    id={character.id}
                    other={character}
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
export default CharacterList
