import React from 'react'
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { moviePropsShape } from './constants'
import MovieRow from './MovieRow'

const EmptyMoviesBody = () => (
  <Table.Row>
    <Table.Cell textAlign="center" colSpan="999">
      No movies found
    </Table.Cell>
  </Table.Row>
)

const MoviesTableBody = ({ movies, columns }) => {
  let content = null
  const hasMovies = movies.length > 0

  if (hasMovies) {
    content = movies.map((movie) => (
      <MovieRow key={movie.imdbID} movie={movie} columns={columns} />
    ))
  } else {
    content = <EmptyMoviesBody/>
  }

  return (
    <Table.Body>
      {content}
    </Table.Body>
  )
};

MoviesTableBody.propTypes = {
  movies: PropTypes.arrayOf(moviePropsShape),
  columns: PropTypes.arrayOf(PropTypes.objects).isRequired,
}

MoviesTableBody.defaultProps = {
  movies: [],
}

export default MoviesTableBody
