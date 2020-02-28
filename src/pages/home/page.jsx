import React from 'react'
import CharacterList from '../../components/CharaterList'
import EpisodeList from '../../components/EpisodeList'

function Page (props) {
  if (props.characters && props.episodes) {
    return (
      <div>
        <h1>Recent View</h1>
        <CharacterList
          recentItems
          loading={false}
          error={props.error}
          data={props.characters}
        />
        <EpisodeList
          recentItems
          loading={false}
          error={props.error}
          data={props.episodes}
        />
      </div>
    )
  } else if (props.characters) {
    return (
      <div>
        <h1>Recent View</h1>
        <CharacterList
          recentItems
          loading={false}
          error={props.error}
          data={props.characters}
        />
      </div>
    )
  } else if (props.episodes) {
    return (
      <div>
        <h1>Recent View</h1>
        <EpisodeList
          recentItems
          loading={false}
          error={props.error}
          data={props.episodes}
        />
      </div>
    )
  } else {
    return (
      <div>
        <h1>There are no recent items </h1>
      </div>
    )
  }
}

export default Page
