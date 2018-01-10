import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Message } from 'semantic-ui-react'

import MoviesTable from 'Movies/components/MoviesTable'
import MovieFilters from 'Movies/components/MovieFilters'

const API_KEY = "b8b810e8"
const BASE_REQUEST = { method: 'GET', mode: 'cors' }

class MoviesSearch extends Component {
  constructor() {
    super()
    this.searchMovies = this.searchMovies.bind(this)
    // TODO: Uncomment searchMovies once we want to search on mount
    // API is limited to 1000 queries per day
    // this.searchMovies()
    this.state = this.initialState
  }

  get initialState() {
    return { movies: [], error: null, pending: false }
  }

  async searchMovies({ ...args }) {
    this.setState({ pending: true, error: null })
    const urlParams = new URLSearchParams({ ...args, apikey: API_KEY })
    const resourceAPIUrl = `http://www.omdbapi.com/?${urlParams.toString()}`
    try {
      const response = await fetch(resourceAPIUrl, BASE_REQUEST)
      const responseJson = await response.json()
      const { Search: movies, totalResults: results } = responseJson
      this.setState({ movies, results })
    } catch(e) {
      this.setState({ error: e })
    } finally {
      this.setState({ pending: false })
    }
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
            <MoviesTable movies={movies} />
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
