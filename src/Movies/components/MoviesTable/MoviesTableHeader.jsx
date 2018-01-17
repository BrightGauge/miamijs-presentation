import React from 'react'
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'


const MoviesTableHeader = ({ columns }) => {
  const columnElements = columns.map((column) => (
    <Table.HeaderCell
      key={column.key}
      collapsing
    >
      {column.label}
    </Table.HeaderCell>
  ))

  return (
    <Table.Header>
      <Table.Row>
        {columnElements}
      </Table.Row>
    </Table.Header>
  )
};

MoviesTableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
}

MoviesTableHeader.defaultProps = {
}

export default MoviesTableHeader
