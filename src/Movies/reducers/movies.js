import localMoviesDB from 'Movies/database'
export const GET_MOVIES = 'MOVIES/GET_MOVIES'

function filterByString(movies, key, value) {
  if (value === '') {
    return movies
  }
  return movies.filter((movie) => (
    movie[key].toLowerCase().includes(value.toLowerCase())
  ))
}

function searchMovies({ ...args }) {
  let movies = localMoviesDB
  for (const key of Object.keys(args)) {
    switch (key) {
      case 'Title':
      case 'Year':
      case 'Genre':
        movies = filterByString(movies, key, args[key])
        break
      default:
    }
  }
  return movies
}

const initialState = []

export default function movies(state = initialState, action) {
  const { type } = action
  switch (type) {
    case GET_MOVIES: {
      const { filters } = action
      return searchMovies(filters)
    }
    default:
      return state
  }
}
