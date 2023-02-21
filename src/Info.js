import React, { Component } from 'react'

export class Info extends Component {

  render() {
    let a = Math.random();
    let b = 55;

    return (
      <p><b>Info:</b> {this.props.text} La suma es: {a+b} </p>
    )
  }
}

export default Info