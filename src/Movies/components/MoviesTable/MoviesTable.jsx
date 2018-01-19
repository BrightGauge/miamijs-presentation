import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { MovieShape } from 'Movies/constants'
import MoviesTableBody from './MoviesTableBody'
import MoviesTableHeader from './MoviesTableHeader'

const columnsToRender = [
  { key: 'Poster', label: 'Poster', type: 'image' },
  { key: 'Title', label: 'Title', type: 'string' },
  { key: 'Year', label: 'Year', type: 'string' },
  { key: 'imdbRating', label: 'IMDB Rating', type: 'string' },
  { key: 'imdbVotes', label: 'Rating Votes', type: 'string' },
  { key: 'BoxOffice', label: 'Box Office', type: 'string' },
  { key: 'Genre', label: 'Genre', type: 'string' },
  { key: 'Rated', label: 'Rated', type: 'string' },
  { key: 'Runtime', label: 'Runtime', type: 'string' },
]

class MoviesTable extends Component {
  render() {
    const { movies } = this.props
    return (
      <Table padded unstackable basic="very">
        <MoviesTableHeader columns={columnsToRender} />
        <MoviesTableBody movies={movies} columns={columnsToRender}/>
      </Table>
    )
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
}

MoviesTable.defaultProps = {
}

export default MoviesTable
