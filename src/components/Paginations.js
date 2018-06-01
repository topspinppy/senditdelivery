import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import styled from 'styled-components'

const RootPaginations = styled.div`
  .page-item.active .page-link 
  {
    z-index: 1;
    color: #fff;
    background-color: #FF9800;
    border-color: #FF9800;
  }
`

class Paginations extends Component {
  render () {
    return (
      <RootPaginations>
        <Pagination aria-label='Page navigation example'>
          <PaginationItem disabled>
            <PaginationLink previous href='#' />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href='#'>
                1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>
                2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>
                3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>
                4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>
                5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href='#' />
          </PaginationItem>
        </Pagination>
      </RootPaginations>
    )
  }
}

export default Paginations
