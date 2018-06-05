import React, { Component } from 'react'
import styled from 'styled-components'
import imgcar from '../img/car.jpg'
import { Input, Row } from 'react-materialize'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import Http from 'axios'

const Formatted = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-color:white;
  input[type=text] 
  {
    border-bottom: 2px solid #fece41;
  }
  input[type=text]:focus:not([readonly])
  {
    border-bottom: 1px solid #fece41;
    box-shadow: 0 1px 0 0 #fece41;
  }
  .input-field label {
    color: #9e9e9e;
    font-weight: bold;
  }

  .managebuttonsave {
    margin-left: 28px;
    width: 164px;
    margin-right: 13px;
    border-radius: inherit;
  }
  .managebuttoncancle {
    width: 164px;
    margin-right: 13px;
    border-radius: inherit;
  }
}
`

const NameProgram = styled.div`
  position:fixed;
  left: 0px;
  width:25.33%;
  height:100%;
  opacity: 0.7;
  background-image: url(${imgcar});
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 

  .Header {
    margin:26px;
    width: 9em; 
    word-wrap: break-word;
    margin-top: 20%;
    font-weight: bold;
    color: white;
  }
  ul {
    list-style-type: none;
    margin:0;
    padding:0;
  }

  li {
    margin: 29px;
    margin-bottom: 20px;    
  }
`
const Manage = styled.div`
  position:fixed;
  center: 50px;
  width:50.33%;
  height:100%;

  .HeadTrucker {
    margin: 52px;
    margin-bottom: 5px;
    margin-left: 40px;
    background: #ffcd41;

    .Block {
      display: inline-block;
      width: 10px;
      height: 48px;
      background: black;
      vertical-align: middle;
    }
    .TextHeader {
      display: inline-block;
      padding-left: 13px;
      vertical-align: middle;
      font-color:white; 
    }
  }
  .Article {
    margin : 39px;
    margin-top: 10px ;
    margin-bottom: 96px ;
    height: 140px;
    .row 
    {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -1px;
      margin-left: -11px;
      margin-bottom: -8px;
    }
    .ColumnOne {
      float: left;
    }
    .ColumnTwo {
      float: left;
      right: 5px;
    }
  }
`
const ButtonLayout = styled.div`
  position:fixed;
  Right: 0px;
  width:25.33%;
  height:100%;
  background: #f2f2f2;

  .row
  {
    display: flex;
    flex-wrap: wrap;

    .col {
      float: left;
      box-sizing: border-box;
      padding: 0 .75rem;
      min-height: 1px;
      width:50%;
    }
  }

  .Actions
  {
    margin: 63px;
    margin-left: 29px;
    margin-bottom: 0px;
  }
  .TimeText
  {
    margin: 29px;
    margin-top: 19px;
  }
`

class View extends Component {
  state = {
    licensePlate : '',
    typeCarID : '',
    brand : '',
    fuelType : '',
    Owner : '',
    companyID : '',
    capacity : '',
    weight : 0,
    hourCar : '',
    Index : '',
    Id : this.props.params.id,
    Datafromapi : []
  }

  componentDidMount () {
    // const that = this
    Http.get('http://localhost:5000/vehical/').then(res => {
      let dfromapi = res.data[this.state.Id];
      this.setState({ Datafromapi : dfromapi });
      this.setState({ licensePlate : this.state.Datafromapi.car.licensePlate })
      this.setState({ capacity : this.state.Datafromapi.capacity })
      this.setState({ weight : this.state.Datafromapi.car.weight })
      this.setState({ typeCarID : this.state.Datafromapi.car.typeCar.nameTypeCar })
      this.setState({ brand : this.state.Datafromapi.car.brand })
    })
  }
  handleClick = () => {
    Http.post(`http://localhost:5000/edit/${this.state.Id}`,this.state)
    .then(res => { 
      console.log(res) 
      window.location = "/" 
    })
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
    console.log(e.target.value);
  }
  render () {
    console.log(this.state.brand)
    return (
      <Formatted>
        <NameProgram>
          <div className='Header'>
            <h1>
              <b>
                Edit Vehicle
              </b>
            </h1>
          </div>
          <ul>
            <li>
              Basic Information
            </li>
            <li>
              Specifications
            </li>
            <li>
              Settings
            </li>
          </ul>
        </NameProgram>
        <Manage>
          <div>
            <div className='HeadTrucker'>
              <div className='Block' />
              <div className='TextHeader'>
                <b>TRUCK INFORMATION </b>
              </div>
            </div>
            <div className='Article'>
              <Row>
                <Input value={ this.state.licensePlate } onChange={(e)=> this.handleChange('licensePlate', e) } placeholder="."  s={6} className='grid-example' label="License Plate" />
                <Input s={6} type='select' label="Province" defaultValue='1'>
                  <option value='1'>กรุงเทพ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} onChange={(e)=> this.handleChange('typeCarID', e) } type='select' label="Type" defaultValue='1'>
                  <option value='1'>4 ล้อทึบ</option>
                  <option value='2'>6 ล้อทึบ</option>
                </Input>
                <Input s={6} onChange={(e)=> this.handleChange('brand', e) } type='select' label="Brand" defaultValue='1'>
                  <option value='1'>Isuzu</option>
                  <option value='2'>Ford</option>
                  <option value='3'>Toyota</option>
                  <option value='4'>Honda</option>
                  <option value='5'>Volvo</option>
                  <option value='6'>GMC</option>
                  <option value='7'>Kenworth</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} onChange={(e)=> this.handleChange('fuelType', e) } type='select' label="Fuel Type" defaultValue='1'>
                  <option value='1'>Diesel</option>
                  <option value='2'>Gasoline</option>
                  <option value='3'>Methanol</option>
                  <option value='4'>Natural Gas</option>
                  <option value='5'>Hydrogen</option>
                  <option value='6'>Biodiesel</option>
                </Input>
                <Input s={6} onChange={(e)=> this.handleChange('hourCar', e) } type='select' label="Hour Car" defaultValue='1'>
                  <option value='1'>24 ชม. (จ-ส)</option>
                  <option value='2'>8 ชม. (จ-ส)</option>
                  <option value='3'>07.00-18.00</option>
                </Input>
              </Row>
            </div>
          </div>
          <div>
            <div className='HeadTrucker'>
              <div className='Block' />
              <div className='TextHeader'>
                <b>OWNER INFORMATION</b>
              </div>
            </div>
            <div className='Article' style={{ height : '4px' }}>
              <Row>
                <Input onChange={(e)=> this.handleChange('Owner', e) } s={6} type='select' label="Owner" defaultValue='1'>
                  <option value='1'>Supplier</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
                <Input onChange={(e)=> this.handleChange('companyID', e) } s={6} type='select' label="Owner Company" defaultValue='1'>
                  <option value='1'>Dynamic Logistic</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
              </Row>
            </div>
          </div>
          <div>
            <div className='HeadTrucker'>
              <div className='Block' />
              <div className='TextHeader'>
                <b>CAPACITY</b>
              </div>
            </div>
            <div className='Article'>
              <Row>
                <Input value={ this.state.capacity } onChange={(e)=> this.handleChange('capacity', e) }  s={6} className='grid-example' label="Capacity (Cubic Meters)" />
                <Input value={ this.state.weight } onChange={(e)=> this.handleChange('weight', e) }  s={6} className='grid-example' label="Weight (Tons)" />
              </Row>
              <Row>
                <Input onChange={(e)=> this.handleChange('cost', e) }  s={6} className='grid-example' label="Cost / Km. (THB) " />
                <Input hidden s={6} />
              </Row>
            </div>
          </div>
        </Manage>
        <ButtonLayout>
          <div className='Row'>
            <div className='Actions'>
              <b>Action</b>
            </div>
          </div>
          <div className='Row'>
            <div className='TimeText'>
              Last update: 14 Dec 2017 11:40 UTC+7
            </div>
          </div>
          <div className='Row'>
            <div className='Col'>
              <Button onClick={this.handleClick} color='warning' className='managebuttonsave'>SAVE</Button>
              <Link to='/'> <Button className='managebuttoncancle'>CANCEL</Button></Link>
            </div>
          </div>
        </ButtonLayout>
      </Formatted>
    )
  }
}

export default View
