import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

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
    return (
      <Table padded unstackable basic="very">
        <MoviesTableHeader columns={columnsToRender} />
        <MoviesTableBody columns={columnsToRender}/>
      </Table>
    )
  }
}

MoviesTable.propTypes = {}

MoviesTable.defaultProps = {
}

export default MoviesTable
