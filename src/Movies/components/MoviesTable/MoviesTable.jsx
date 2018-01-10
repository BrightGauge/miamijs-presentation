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
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
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
  loading: PropTypes.bool,
  onSort: PropTypes.func,
  movies: PropTypes.arrayOf(moviePropsShape).isRequired,
};

MoviesTable.defaultProps = {
  loading: false,
  movies: [],
  onSort: () => {}, // noop
};

export default MoviesTable
