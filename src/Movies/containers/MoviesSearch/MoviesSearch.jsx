import React, { Component } from 'react'
import { Segment, Divider } from 'semantic-ui-react'

import 'Movies/containers/MoviesSearch/MoviesSearch.css'

import MoviesTable from 'Movies/components/MoviesTable'
import MovieFilters from 'Movies/components/MovieFilters'

import RatingBarChart from 'Movies/components/MovieCharts/RatingBarChart'
import YearPieChart from 'Movies/components/MovieCharts/YearPieChart'

import localMovies from 'Movies/database'


class MoviesSearch extends Component {
  constructor() {
    super()
    this.searchMovies = this.searchMovies.bind(this)
    this.state = { movies: localMovies }
  }

  filterByString(movies, key, value) {
    if (value === '') {
      return movies
    }
    return movies.filter((movie) => (
      movie[key].toLowerCase().includes(value.toLowerCase())
    ))
  }

  searchMovies({ ...args }) {
    let movies = localMovies
    for (const key of Object.keys(args)) {
      switch (key) {
        case 'Title':
        case 'Year':
        case 'Genre':
          movies = this.filterByString(movies, key, args[key])
          break
        default:
      }
    }
    this.setState({ movies })
  }

  render() {
    const { movies } = this.state

    return (
      <Segment.Group horizontal className="bg movies">
        <Segment basic className="movies_filters">
          <MovieFilters
            onSearch={this.searchMovies}
          />
          <Divider />
          <YearPieChart movies={movies} />
          <Divider />
          <RatingBarChart movies={movies} />
        </Segment>
        <Segment basic className="movies_table">
          <MoviesTable movies={movies} />
        </Segment>
      </Segment.Group>
    )
  }
}

MoviesSearch.propTypes = {
}

MoviesSearch.defaultProps = {
}

export default MoviesSearch
