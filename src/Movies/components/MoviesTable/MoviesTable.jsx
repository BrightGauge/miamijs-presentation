import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { moviePropsShape } from './contants'
import MoviesTableBody from './MoviesTableBody'

class MoviesTable extends Component {
  render() {
    const { movies } = this.props
    return (
      <Table celled padded unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>Poster</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <MoviesTableBody movies={movies} />
        </Table.Body>
      </Table>
    )
  }
};

MoviesTable.propTypes = {
  onSort: PropTypes.func,
  movies: PropTypes.arrayOf(moviePropsShape).isRequired,
};

MoviesTable.defaultProps = {
  onSort: () => {}, // noop
  movies: [],
};

export default MoviesTable
