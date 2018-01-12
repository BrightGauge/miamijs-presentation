import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { moviePropsShape } from './constants'
import MoviesTableBody from './MoviesTableBody'
import MoviesTableHeader from './MoviesTableHeader'

class MoviesTable extends Component {
  render() {
    const { movies, columns } = this.props
    return (
      <Table padded unstackable basic="very">
        <MoviesTableHeader columns={columns} />
        <MoviesTableBody movies={movies} columns={columns} />
      </Table>
    )
  }
};

MoviesTable.propTypes = {
  onSort: PropTypes.func,
  movies: PropTypes.arrayOf(moviePropsShape).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MoviesTable.defaultProps = {
  onSort: () => {}, // noop
};

export default MoviesTable
