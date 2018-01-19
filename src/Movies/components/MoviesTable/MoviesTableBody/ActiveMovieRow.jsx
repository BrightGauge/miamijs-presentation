import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { MovieShape } from 'Movies/constants'

import Poster from 'Movies/components/MoviesTable/Poster'

const MovieActiveRow = ({ movie, onClick }) => (
  <Table.Row onClick={() => onClick(movie)} style={{ cursor: 'pointer' }}>
    <Table.Cell>
      <Poster src={movie.Poster}/>
    </Table.Cell>
    <Table.Cell colSpan={999}>
      {movie.Plot}
    </Table.Cell>
  </Table.Row>
)

MovieActiveRow.propTypes = {
  movie: MovieShape.isRequired,
  onClick: PropTypes.func,
};

MovieActiveRow.defaultProps = {
  movies: {},
  onClick: () => {},
};

export default MovieActiveRow
