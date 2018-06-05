import React, { Component } from 'react'
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap'
import { Link } from 'react-router'
import styled from 'styled-components'


const Headers = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:4px;
  margin-bottom:1px;
`

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render () {
    return (
      <Headers>
        <div>

        </div>
        <div>

        </div>
        <div>
          
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>
          
        </div>
        <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color='warning'>
              MENU <img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM0MS4zMzMgMzQxLjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQxLjMzMyAzNDEuMzMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMTI4IiB5PSIxMjgiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxyZWN0IHg9IjEyOCIgeT0iMjU2IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cmVjdCB4PSIwIiB5PSIxMjgiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxyZWN0IHg9IjAiIHk9IjI1NiIgd2lkdGg9Ijg1LjMzMyIgaGVpZ2h0PSI4NS4zMzMiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHJlY3QgeD0iMjU2IiB5PSIwIiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cmVjdCB4PSIxMjgiIHk9IjAiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxyZWN0IHg9IjI1NiIgeT0iMTI4IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cmVjdCB4PSIyNTYiIHk9IjI1NiIgd2lkdGg9Ijg1LjMzMyIgaGVpZ2h0PSI4NS4zMzMiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' width='13px' />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><Link to='/New'> New Vehicles </Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Headers>
    )
  }
}

export default Menu