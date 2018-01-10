import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table, Image } from 'semantic-ui-react'

import { moviePropsShape } from './contants'

class MovieRow extends Component {
  render() {
    const { movie } = this.props
    return (
      <Table.Row>
        <Table.Cell>
          <Image src={movie.Poster} size='mini' />
        </Table.Cell>
        <Table.Cell>{movie.Title}</Table.Cell>
        <Table.Cell>{movie.Year}</Table.Cell>
      </Table.Row>
    )
  }
};

MovieRow.propTypes = {
  movie: moviePropsShape.isRequired,
};

MovieRow.defaultProps = {
  movies: {},
};

export default MovieRow
