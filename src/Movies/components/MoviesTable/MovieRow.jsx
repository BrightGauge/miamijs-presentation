import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table, Rating } from 'semantic-ui-react'

import { moviePropsShape } from './contants'

class MovieRow extends Component {
  render() {
    const { movie } = this.props
    return (
      <Table.Row>
        <Table.Cell>
          <Icon name="gear" />
        </Table.Cell>
        <Table.Cell>{movie.name}</Table.Cell>
        <Table.Cell>{movie.releaseDate.toDateString()}</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={movie.rating} maxRating={5} />
        </Table.Cell>
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
