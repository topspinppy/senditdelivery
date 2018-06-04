import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Menu from '../components/Menu'
import DataInTable from '../components/DataInTable'

const RootAll = styled.div`
  .layout {
    padding-top: 30px;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 15px;
  }
  .container {
    max-width: 1230px;
  }
`
class All extends Component {
  state = {
    length : 0
  }
  
  render () {
    return (
      <RootAll>
        <Container className='layout'>
          <Menu />
          <DataInTable />
        </Container>
      </RootAll>
    )
  }
}

export default All
