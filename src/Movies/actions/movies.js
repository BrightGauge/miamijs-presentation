import { GET_MOVIES } from 'Movies/reducers/movies'

export const getMovies = ({ ...filters }) => {
  return { type: GET_MOVIES, filters: filters }
}
