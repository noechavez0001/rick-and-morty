import rmapi from 'rickmortyapi'

export async function fetchCharaters (query, page) {
  const q = query
  q.page = page
  const characters = await rmapi.getCharacter(query)
  return characters
}

export async function fetchEpisodes (query, page) {
  const q = query
  q.page = page
  const episodes = await rmapi.getEpisode(query)
  return episodes
}

export async function fetchEpisodes2 (query, page) {
  const q = query
  q.page = page
  q.episode = query.name
  q.name = ''
  const episodes = await rmapi.getEpisode(q)
  return episodes
}

export async function fetchOneCharater (query) {
  const characters = await rmapi.getCharacter(query)
  return characters
}

export async function fetchOneEpisode (query) {
  const episodes = await rmapi.getEpisode(query)
  return episodes
}
