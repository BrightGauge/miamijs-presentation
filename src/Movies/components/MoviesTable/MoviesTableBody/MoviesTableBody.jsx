import './MoviesTableBody.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

import { MovieShape } from 'Movies/constants'

import EmptyMoviesBody from './EmptyMoviesBody'
import ActiveMovieRow from './ActiveMovieRow'
import MovieRow from './MovieRow'


class MoviesTableBody extends Component {
  constructor(props) {
    super(props)
    this.onRowClick = this.onRowClick.bind(this)
    this.state = { activeMovie: null }
  }

  onRowClick(movie) {
    const { activeMovie } = this.state
    if (activeMovie && activeMovie.imdbID === movie.imdbID) {
      this.setState({ activeMovie: null })
      return
    }
    this.setState({ activeMovie: movie })
  }

  renderMovieRow(movie) {
    const { columns } = this.props
    const { activeMovie } = this.state
    const commonProps = { key: movie.imdbID, movie, onClick: this.onRowClick }
    if (activeMovie && movie.imdbID === activeMovie.imdbID) {
      return <ActiveMovieRow {...commonProps}/>
    }
    return <MovieRow {...commonProps} columns={columns}/>
  }

  render() {
    const { movies } = this.props
    return (
      <Table.Body className="table-body">
        {movies.length === 0 &&
          <EmptyMoviesBody/>
        }
        {movies.length > 0 &&
          movies.map((movie) => this.renderMovieRow(movie))
        }
      </Table.Body>
    )
  }
};

MoviesTableBody.propTypes = {
  movies: PropTypes.arrayOf(MovieShape),
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
}

MoviesTableBody.defaultProps = {
  movies: [],
}

export default MoviesTableBody
