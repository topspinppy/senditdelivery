import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Menu from '../components/Menu'
import Pagination from '../components/Paginations'
import DataInTable from '../components/DataInTable'

class All extends Component {
  render () {
    return (
      <div>
        <Container>
          <Menu />
          <DataInTable />
          <Pagination />
        </Container>
      </div>
    )
  }
}

export default All
