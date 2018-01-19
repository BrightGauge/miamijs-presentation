import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Header } from 'semantic-ui-react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

import { MovieShape } from 'Movies/constants'

const COLORS = ['#2185d0', '#1c1354', '#a6d6d0', '#79b4c1', '#4b5ba9', '#575a77', '#3d3a92'];

const getSliceLabel = ({ name, value }) => `${name}`

const getPieChartData = (movies) => {
  const moviesByYear = movies.reduce((byYear, movie) => {
    byYear[movie.Year] = (byYear[movie.Year] || []).concat(movie)
    return byYear
  }, {})

  return Object.keys(moviesByYear).map((year) => {
    return { value: moviesByYear[year].length, name: year }
  })
}

const YearPieChart = ({ movies }) => {
  return (
    <Segment textAlign="center" basic>
      <Header size="medium">Movies by Year</Header>
      <ResponsiveContainer width="100%" minHeight={200} aspect={1.1}>
        <PieChart margin={{ top: 40, right: 0, bottom: 0, left: 0 }}>
          <Pie
            cx="50%"
            cy="50%"
            fill="#2185d0"
            dataKey="value"
            label={getSliceLabel}
            animationBegin={0}
            animationDuration={300}
            data={getPieChartData(movies)}
          >
            {movies.map((entry, index) => (
              <Cell key={entry.imdbID} fill={COLORS[index % COLORS.length]}/>)
            )}
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </Segment>
  )
}

YearPieChart.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
}

export default YearPieChart
