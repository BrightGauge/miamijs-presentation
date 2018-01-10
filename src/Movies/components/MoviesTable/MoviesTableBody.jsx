import React from 'react'
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { moviePropsShape } from './contants'
import MovieRow from './MovieRow'

const MoviesTableBody = ({ movies }) => {
  const hasMovies = movies.length > 0

  if (hasMovies) {
    return movies.map((movie) => (
      <MovieRow key={movie.id} movie={movie} />
    ))
  }
  return (
    <Table.Row>
      <Table.Cell textAlign="center" colSpan="999">
        No movies found
      </Table.Cell>
    </Table.Row>
  )
};

MoviesTableBody.propTypes = {
  movies: PropTypes.arrayOf(moviePropsShape),
}

MoviesTableBody.defaultProps = {
  movies: [],
}

export default MoviesTableBody
