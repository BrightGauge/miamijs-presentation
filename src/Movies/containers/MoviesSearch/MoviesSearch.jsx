import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react'

import MoviesTable from 'Movies/components/MoviesTable'
import MovieFilters from 'Movies/components/MovieFilters'

class MoviesSearch extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Segment className="bg movie filters" basic>
            <MovieFilters />
          </Segment>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment className="bg movies" basic>
            <MoviesTable />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
};

MoviesSearch.propTypes = {
};

MoviesSearch.defaultProps = {
};

export default MoviesSearch
