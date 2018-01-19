import React from 'react'
import { Table } from 'semantic-ui-react'


const EmptyMoviesBody = () => (
  <Table.Row>
    <Table.Cell textAlign="center" colSpan="999">
      No movies found
    </Table.Cell>
  </Table.Row>
)

export default EmptyMoviesBody
