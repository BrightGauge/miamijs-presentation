import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Message } from 'semantic-ui-react'

import 'Movies/containers/MoviesSearch/MoviesSearch.css'

import MoviesTable from 'Movies/components/MoviesTable'
import MovieFilters from 'Movies/components/MovieFilters'

import localMovies from 'Movies/database'

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

class MoviesSearch extends Component {
  constructor() {
    super()
    this.searchMovies = this.searchMovies.bind(this)
    this.state = this.initialState
  }

  get initialState() {
    return { movies: localMovies, error: null, pending: false }
  }

  filterByString(movies, key, value) {
    if (value === '') {
      return movies
    }
    return movies.filter((movie) => movie[key].includes(value))
  }

  searchMovies({ ...args }) {
    let movies = localMovies
    this.setState({ pending: true })
    for (const key of Object.keys(args)) {
      switch (key) {
        case 'Title':
        case 'Year':
        case 'Genre':
          movies = this.filterByString(movies, key, args[key])
      }
    }
    this.setState({ movies, pending: false })
  }

  render() {
    const { movies, error, pending } = this.state

    const errorMessage = error && (
      <Grid.Column width={16}>
        <Message
          error
          header='There was an error while searching for movies'
          content={error.toString()}
        />
      </Grid.Column>
    )

    return (
      <Grid>
        {errorMessage}
        <Grid.Column width={4}>
          <Segment className="bg movie filters" basic>
            <MovieFilters
              onSearch={this.searchMovies}
              isSearching={pending}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment className="bg movies" basic loading={pending}>
            <MoviesTable movies={movies} columns={columnsToRender} />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

MoviesSearch.propTypes = {
}

MoviesSearch.defaultProps = {
}

export default MoviesSearch
