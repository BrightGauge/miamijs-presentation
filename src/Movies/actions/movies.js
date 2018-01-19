import localMoviesDB from 'Movies/database'
import { GET_MOVIES } from 'Movies/reducers/movies'

export const getMovies = () => {
  return { type: GET_MOVIES, payload: localMoviesDB }
}
