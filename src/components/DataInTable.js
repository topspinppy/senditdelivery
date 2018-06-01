import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router'

const Borders = styled.div`
  margin:20px auto;
  padding:30px;
  box-shadow: 0px 3px 16px -7px rgba(0,0,0,0.75);

  Table 
  {
    text-align:center; 
    vertical-align:middle;
  }

  .theadborder {
    border-bottom: 3px solid #000000;
    text-align: center;
    .activitywidth 
    {
      width: 250px;
    }
  }

  .tbodycenter {
    text-align: center; 
  }

  .actionfit {
    width:4px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

`
const ButtonNoRadiusWithStyled = styled(Button)`
  border-radius: 0;
`

class DataInTable extends Component {
  render () {
    return (
      <div>
        <Borders>
          <Table responsive>
            <thead className='theadborder' size='md'>
              <tr>
                <th>#</th>
                <th>Owner Company</th>
                <th>License Plate</th>
                <th>Type</th>
                <th className='activitywidth'>Activity</th>
                <th>Hours</th>
                <th>Capacity (m3)</th>
                <th>Weight (kg)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'><center>1</center></th>
                <td><center>CPF</center></td>
                <td><center>3กย-1121</center></td>
                <td><center>6ล้อทึบ</center></td>
                <td><center>Chill,Frozen,Ambient</center></td>
                <td><center>24 ชม. (จ-ส)</center></td>
                <td><center>395</center></td>
                <td><center>1,900</center></td>
                <th className='actionfit'><Link to='/view'><ButtonNoRadiusWithStyled color='warning'>View</ButtonNoRadiusWithStyled></Link></th>
              </tr>
              <tr>
                <th scope='row'><center>1</center></th>
                <td><center>CPF</center></td>
                <td><center>3กย-1121</center></td>
                <td><center>6ล้อทึบ</center></td>
                <td><center>Chill,Frozen,Ambient</center></td>
                <td><center>24 ชม. (จ-ส)</center></td>
                <td><center>395</center></td>
                <td><center>1,900</center></td>
                <th className='actionfit'><Link to='/view'><ButtonNoRadiusWithStyled color='warning'>View</ButtonNoRadiusWithStyled></Link></th>
              </tr>
              <tr>
                <th scope='row'><center>1</center></th>
                <td><center>CPF</center></td>
                <td><center>3กย-1121</center></td>
                <td><center>6ล้อทึบ</center></td>
                <td><center>Chill,Frozen,Ambient</center></td>
                <td><center>24 ชม. (จ-ส)</center></td>
                <td><center>395</center></td>
                <td><center>1,900</center></td>
                <th className='actionfit'><Link to='/view'><ButtonNoRadiusWithStyled color='warning'>View</ButtonNoRadiusWithStyled></Link></th>
              </tr>
            </tbody>
          </Table>
        </Borders>
      </div>
    )
  }
}

export default DataInTable
