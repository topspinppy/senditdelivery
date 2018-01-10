import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router'
const ButtonViewwithStyled = styled(Button)`
  .btn {
    background: red;
    width:1px;
  }
`
const Tr = styled.div`
  display: table-row;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-top-style: hidden;
`

const Borders = styled.div`
  margin:20px auto;
  padding:30px;
  box-shadow: 0px 3px 16px -7px rgba(0,0,0,0.75);
`

class DataInTable extends Component {
  render () {
    return (
      <div>
        <Borders>
          <Table>
            <thead>
              <Tr>
                <th><center>#</center></th>
                <th><center>Owner Company</center></th>
                <th><center>License Plate</center></th>
                <th><center>Type</center></th>
                <th><center>Hours</center></th>
                <th><center>Capacity (m3)</center></th>
                <th><center>Weight (kg)</center></th>
                <th><center>Action</center></th>
              </Tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><center><b><ButtonViewwithStyled color='warning'>View</ButtonViewwithStyled></b></center></td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><center><b><Link to='/view'><ButtonViewwithStyled color='warning'>View</ButtonViewwithStyled></Link></b></center></td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><center><b><ButtonViewwithStyled color='warning'>View</ButtonViewwithStyled></b></center></td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><center><b><ButtonViewwithStyled color='warning'>View</ButtonViewwithStyled></b></center></td>
              </tr>
            </tbody>
          </Table>
        </Borders>
      </div>
    )
  }
}

export default DataInTable
