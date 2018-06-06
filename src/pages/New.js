import React, { Component } from 'react'
import styled from 'styled-components'
import imgcar from '../img/car.jpg'
import { Input, Row } from 'react-materialize'
import { Button } from 'reactstrap'
import axios from 'axios'
import swal from 'sweetalert';


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

class New extends Component {


  constructor() {
    super();

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      licensePlate : '',
      typeCarID : '',
      brand : '',
      fuelType : '',
      Owner : '',
      companyID : '',
      nameCompany : '',
      capacity : '',
      weight : '',
      hourCar : '',
      dateSend : date
    };
}



  handleChange = (field, e) => {
    this.setState({[field]: e.target.value})
    console.log(e.target.value);
  }
  handleClick = () => {
    // console.log(this.state.licensePlate)
    // console.log(this.state.type)
    // console.log(this.state.brand)
    // console.log(this.state.fuelType)
    // console.log(this.state.nameCompany)
    // console.log(this.state.capacity)
    // console.log(this.state.weight)
    // console.log(this.state.hourCar)

    axios.post('http://localhost:5000/new',this.state)
    .then(res => { 
      console.log(res) 
      window.location.href = "/"
    }).catch(error => {
      swal("ขออภัยในความไม่สะดวก", "เกิดข้อขัดข้องบางประการ \n " + error + "", "warning");
    })
    console.log(this.state)

  }
  render () {
    return (
      <Formatted>
        <NameProgram>
          <div className='Header'>
            <h1>
              <b>
                New Vehicle
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
                <b>TRUCK INFORMATION</b>
              </div>
            </div>
            <div className='Article'>
              <Row>
                <Input onChange={(e)=> this.handleChange('licensePlate', e) } placeholder="."  s={6} className='grid-example' label="License Plate" required />
                <Input s={6}  onChange={(e)=> this.handleChange('typeCarID', e) } type='select' label="Type" defaultValue='1' required>
                  <option value='2'>4 ล้อทึบ</option>
                  <option value='1'>6 ล้อทึบ</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} onChange={(e)=> this.handleChange('brand', e) } type='select' label="Brand" defaultValue='1' required>
                  <option value='Isuzu'>Isuzu</option>
                  <option value='Ford'>Ford</option>
                  <option value='Toyota'>Toyota</option>
                  <option value='Honda'>Honda</option>
                  <option value='Volvo'>Volvo</option>
                  <option value='GMC'>GMC</option>
                  <option value='Kenworth'>Kenworth</option>
                </Input>
                <Input s={6} onChange={(e)=> this.handleChange('fuelType', e) } type='select' label="Fuel Type" defaultValue='1' required>
                  <option value='Diesel'>Diesel</option>
                  <option value='Gasoline'>Gasoline</option>
                  <option value='Methanol'>Methanol</option>
                  <option value='Natural Gas'>Natural Gas</option>
                  <option value='Hydrogen'>Hydrogen</option>
                  <option value='Biodiesel'>Biodiesel</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} onChange={(e)=> this.handleChange('hourCar', e) } type='select' label="Hour Car" defaultValue='1' required>
                  <option value='24 ชม. (จ-ส)'>24 ชม. (จ-ส)</option>
                  <option value='8 ชม. (จ-ส)'>8 ชม. (จ-ส)</option>
                  <option value='8 ชม. (จ-อา)'>8 ชม. (จ-อา)</option>
                  <option value='07.00-18.00'>07.00-18.00</option>
                  <option value=''>ไม่ระบุเวลา</option>
                </Input>
                <Input type="hidden" />
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
                <Input onChange={(e)=> this.handleChange('Owner', e) } s={6} type='select' label="Owner" defaultValue='Supplier' required>
                  <option value='Supplier'>Supplier</option>
                  <option value='Supplier'>Supplier</option>
                  <option value='Supplier'>Supplier</option>
                </Input>
                <Input onChange={(e)=> this.handleChange('companyID', e) } s={6} type='select' label="Owner Company" defaultValue='1' required>
                  <option value='1'>CPF</option>
                  <option value='2'>Chia Tai (Seed)</option>
                  <option value='3'>CPRAM</option>
                  <option value='4'>Chia Tai (Fertilizer)</option>
                  <option value='5'>KCP</option>
                  <option value='6'>CPPC</option>
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
                <Input onChange={(e)=> this.handleChange('capacity', e) }  s={6} className='grid-example' label="Capacity (Cubic Meters)" required />
                <Input onChange={(e)=> this.handleChange('weight', e) }  s={6} className='grid-example' label="Weight (Kg.)" required />
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
              <Button color='warning' className='managebuttonsave' onClick={this.handleClick}>SAVE</Button>
              <Button className='managebuttoncancle'>CANCEL</Button>
            </div>
          </div>
        </ButtonLayout>
      </Formatted>
    )
  }
}

export default New
