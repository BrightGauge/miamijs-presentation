import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { MovieShape } from 'Movies/constants'

import Poster from 'Movies/components/MoviesTable/Poster'

class MovieRow extends Component {
  renderColumnElementType(column) {
    const { movie } = this.props
    switch (column.type) {
      case 'image':
        return <Poster src={movie[column.key]}/>
      default:
        return movie[column.key]
    }
  }

  render() {
    const { columns } = this.props

    const rowColumns = columns.map((column) => (
      <Table.Cell
        key={column.key}
      >
        {this.renderColumnElementType(column)}
      </Table.Cell>
    ))

    return (
      <Table.Row>
        {rowColumns}
      </Table.Row>
    )
  }
};

MovieRow.propTypes = {
  movie: MovieShape.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MovieRow.defaultProps = {
  movies: {},
};

export default MovieRow
