import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table, Image } from 'semantic-ui-react'

import { moviePropsShape } from './constants'

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
    const { movie, columns } = this.props

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
  movie: moviePropsShape.isRequired,
  columns: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

MovieRow.defaultProps = {
  movies: {},
};

export default MovieRow
