import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Divider } from 'semantic-ui-react'

import 'Movies/containers/MoviesSearch/MoviesSearch.css'

import MoviesTable from 'Movies/components/MoviesTable'
import MovieFilters from 'Movies/components/MovieFilters'

import RatingBarChart from 'Movies/components/MovieCharts/RatingBarChart'
import YearPieChart from 'Movies/components/MovieCharts/YearPieChart'

import { connect } from 'react-redux'
import { getMovies } from 'Movies/actions/movies'


class MoviesSearch extends Component {
  constructor(props) {
    super(props)
    this.props.getMovies()
  }

  render() {
    return (
      <Segment.Group horizontal className="bg movies">
        <Segment basic className="movies-filters">
          <MovieFilters />
          <Divider />
          <YearPieChart />
          <Divider />
          <RatingBarChart />
        </Segment>
        <Segment basic className="movies-table">
          <MoviesTable />
        </Segment>
      </Segment.Group>
    )
  }
}

MoviesSearch.propTypes = {
  getMovies: PropTypes.func.isRequired,
}

MoviesSearch.defaultProps = {
}

const mapStateToProps = () => ({})

const reduxActions = {
  getMovies: getMovies,
}

export default connect(mapStateToProps, reduxActions)(MoviesSearch)
