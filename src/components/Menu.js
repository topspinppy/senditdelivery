import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import styled from 'styled-components'

const AllCompanyDropdownwithStyled = styled(ButtonDropdown)`
  .dropdown-toggle 
  {
    border-radius: 0 !important;
  }
  .btn 
  {
    border-radius: 0px;
    padding-right: 126px;
  }
  .btn-outline-secondary
  {
    margin-left: 8px;
  }
`

const Headers = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:4px;
  margin-bottom:1px;
`

class Menu extends Component {
  render () {
    return (
      <Headers>
        <div>
          <AllCompanyDropdownwithStyled>
            <DropdownToggle caret color='warning'>
              All Company
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </AllCompanyDropdownwithStyled>
        </div>
        <div>
          <button>
            ddd
          </button>
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
        <div>
          5
        </div>
        <div>
          6
        </div>
      </Headers>
    )
  }
}

export default Menu
