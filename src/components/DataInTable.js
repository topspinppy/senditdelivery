import React, { Component } from 'react'
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router'
import Http from 'axios'

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
const RootPaginations = styled.div`
  .page-item.active .page-link 
  {
    z-index: 1;
    color: #fff;
    background-color: #FF9800;
    border-color: #FF9800;
  }
`
class DataInTable extends Component {
  state = {
    vehical: [],
    currentvalue : 1,
    countvehical : 0
  }
  componentDidMount () {
    Http.get(`http://localhost:5000/vehical/1`).then (res => {
      this.setState({ vehical: res.data })
    })
  }
  handlePagginate = (number) => {
    this.setState({ currentvalue: number })
    Http.get(`http://localhost:5000/vehical/${number}`).then (res => {
      this.setState({ vehical: res.data })
    })
  }
  handlePagginatePrev = (number) => {
    const Prev = number <= 1 ? this.state.currentvalue : this.state.currentvalue - 1;
    console.log(Prev);
    this.setState({ currentvalue : Prev })
    Http.get(`http://localhost:5000/vehical/${number}`).then (res => {
      this.setState({ vehical: res.data })
    })
  }
  handlePagginateNext = (number) => {
    const NextPage = number > this.state.currentvalue ? this.state.currentvalue + 1 : this.state.currentvalue;
    console.log(NextPage);
    this.setState({ currentvalue : NextPage })
    Http.get(`http://localhost:5000/vehical/${number}`).then (res => {
      this.setState({ vehical: res.data })
    })
  }
  render () 
  {
    const { vehical, currentvalue } = this.state
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(vehical.length * 2 / 7); i++) 
    {
        pageNumbers.push(i);
    }
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
                <th>Hours</th>
                <th>Capacity (m3)</th>
                <th>Weight (kg)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              vehical.map((vehicals, index) => (
                  <tr key={index}>
                    <th scope='row'><center>{ (7*(currentvalue-1))+(index + 1) }</center></th>
                    <td><center>{vehicals.company.nameCompany}</center></td>
                    <td><center>{vehicals.car.licensePlate}</center></td>
                    <td><center>{vehicals.car.typeCar.nameTypeCar}</center></td>
                    <td><center>{vehicals.car.hourCar}</center></td>
                    <td><center>{vehicals.capacity}</center></td>
                    <td><center>{vehicals.car.weight}</center></td>
                    <th className='actionfit'><Link to={`/view/${index}`} id={ index }><ButtonNoRadiusWithStyled color='warning'>View</ButtonNoRadiusWithStyled></Link></th>
                  </tr>
              ))
            }
            </tbody>
          </Table>
        </Borders>
        <RootPaginations>
        <Pagination aria-label='Page navigation example'>
          <PaginationItem>
            <PaginationLink previous onClick={() => this.handlePagginatePrev( currentvalue ) } />
          </PaginationItem>
          {
              pageNumbers.map((pageNumbers) => (   
                <PaginationItem>
                  <PaginationLink onClick={() => this.handlePagginate( pageNumbers )} onChange={ this.handleActivePagination } >
                      { pageNumbers }
                  </PaginationLink>
                </PaginationItem>
              ))
          }
          <PaginationItem>
            <PaginationLink next onClick={() => this.handlePagginateNext( pageNumbers.length ) } />
          </PaginationItem>
        </Pagination>
      </RootPaginations>
      </div>
    )
  }
}

export default DataInTable
