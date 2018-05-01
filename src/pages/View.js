import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from 'react-materialize'
import imgcar from '../img/car.jpg'

const Formatted = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-color:white;
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
    height: 99px;

    .ColumnOne {
      float: left;
      
      .Textfield {
        display: block;
        padding-top: 15px;
        margin-bottom: 20px;

        .textbox {
          border: none;
          border-bottom: 1px solid;
        }
      }
    }
    .ColumnTwo {
      float: left;
      right: 5px;
      .Textfield {
        display: block;
        padding-top: 15px;
        margin-bottom: 20px;

        .textbox {
          border: none;
          border-bottom: 1px solid;
        }
      }
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
const Row = styled.div`
  width:18.76rem;
  height:4rem;
`
const InputWithStyled = styled(Input)`
  margin-left: -13px;
  width: 109%;
`

class View extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 1}
  }

  handleChange = (event, index, value) => this.setState({value})
  render () {
    return (
      <Formatted>
        <NameProgram>
          <div className='Header'>
            <h1>
              <b>
                Edit Vehical
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
              <div className='ColumnOne'>
                <Row>
                  <InputWithStyled label="License Plate" defaultValue="I am not editable"></InputWithStyled>
                </Row>
                <Row>
                  <InputWithStyled label="Type" defaultValue="I am not editable"></InputWithStyled>
                </Row>
                <Row>
                  <InputWithStyled label="Fuel Type" defaultValue="I am not editable"></InputWithStyled>
                </Row>
              </div>
              <div className='ColumnTwo'>
                <Row>
                  <InputWithStyled label="License Plate" defaultValue="I am not editable"></InputWithStyled>
                </Row>
                <Row>
                  <InputWithStyled label="Type" defaultValue="I am not editable"></InputWithStyled>
                </Row>
                <Row>
                  <InputWithStyled label="Fuel Type" defaultValue="I am not editable"></InputWithStyled>
                </Row>
              </div>
            </div>
          </div>
          <div>
            <div className='HeadTrucker'>
              <div className='Block' />
              <div className='TextHeader'>
                <b>OWNER INFORMATION</b>
              </div>
            </div>
            <div className='Article'>
              text
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
              e
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
