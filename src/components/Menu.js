import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import styled from 'styled-components'

const ButtonDropdownwithStyled = styled(ButtonDropdown)`
  .dropdown-toggle {
    border-radius: 0 !important;
  }
`

const Headers = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:4px;
  margin-bottom:1px;
`

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    this.setState({
      dropdownOpen: true
    })
  }
  render () {
    return (
      <Headers>
        <div>
          <ButtonDropdownwithStyled isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color='warning'>
              Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdownwithStyled>
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
