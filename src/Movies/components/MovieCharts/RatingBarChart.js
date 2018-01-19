import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Header } from 'semantic-ui-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, Tooltip, Legend } from 'recharts'

import { MovieShape } from 'Movies/constants'

const RATINGS = ['PG', 'PG-13', 'R']
const COLORS = ['#2185d0', '#4b5ba9', '#1c1354'];

const getBarChartData = (movies) => {
  const moviesByRating = movies.reduce((byRating, movie) => {
    byRating[movie.Rated] = (byRating[movie.Rated] || []).concat(movie)
    return byRating
  }, {})

  return RATINGS.map((rating) => {
    const numberOfMovies = moviesByRating[rating] || {}
    return { movies: numberOfMovies.length || 0, name: rating }
  })
}

const RatingBarChart = ({ movies }) => {
  return (
    <Segment textAlign="center" basic>
      <Header size="medium">Movies by Rating</Header>
      <ResponsiveContainer width="100%" minHeight={200} aspect={1.1}>
        <BarChart
          margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
          data={getBarChartData(movies)}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="movies"
            label={{ fill: 'white', fontSize: 20 }}
            fill="#2185d0"
            animationBegin={0}
            animationDuration={300}
          >
            {RATINGS.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]}/>)
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Segment>
  )
}

RatingBarChart.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
}

export default RatingBarChart
