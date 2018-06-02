import React, { Component } from 'react'
import styled from 'styled-components'
import imgcar from '../img/car.jpg'
import { Input, Row } from 'react-materialize'

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
`

class View extends Component {
  state = {
    name : 'test'
  }
  render () {
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
                <b>TRUCK INFORMATION</b>
              </div>
            </div>
            <div className='Article'>
              <Row>
                <Input placeholder="." value="d" s={6} className='grid-example' label="License Plate" />
                <Input s={6} type='select' label="Province" defaultValue='2'>
                  <option value='1'>กรุงเทพ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} type='select' label="Type" defaultValue='2'>
                  <option value='1'>6 ล้อทึบ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
                <Input s={6} type='select' label="Brand" defaultValue='2'>
                  <option value='1'>6 ล้อทึบ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
              </Row>
              <Row>
                <Input s={6} type='select' label="Fuel Type" defaultValue='2'>
                  <option value='1'>6 ล้อทึบ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
                <Input hidden s={6} />
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
                <Input s={6} type='select' label="Type" defaultValue='2'>
                  <option value='1'>6 ล้อทึบ</option>
                  <option value='2'>นนทบุรี</option>
                  <option value='3'>ปราจีนบุรี</option>
                </Input>
                <Input s={6} type='select' label="Brand" defaultValue='2'>
                  <option value='1'>6 ล้อทึบ</option>
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
                <Input placeholder="" s={6} className='grid-example' label="Capacity (Cubic Meters)" />
                <Input placeholder="" s={6} className='grid-example' label="Weight (Tons)" />
              </Row>
              <Row>
                <Input placeholder="" s={6} className='grid-example' label="Cost / Km. (THB) " />
                <Input hidden s={6} />
              </Row>
            </div>
          </div>
        </Manage>
        <ButtonLayout>
          test
        </ButtonLayout>
      </Formatted>
    )
  }
}

export default View
