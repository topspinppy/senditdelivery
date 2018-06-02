import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

class Date extends Component {
  render () {
    return (
        <button
          className="example-custom-input"
          onClick={this.props.onClick}>
          {this.props.value}
        </button>
    )
  }
}

export default Date