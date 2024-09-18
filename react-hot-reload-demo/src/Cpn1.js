import React from 'react'

import {useState} from 'react'

export class Cpn1 extends React.Component {
  state = {
    count: 0,
  }

  onClick = () => {
    this.setState((p) => ({...p, count: p.count + 1}))
  }

  render() {
    return <button onClick={this.onClick}>Click Cpn1 {this.state.count}</button>
  }
}
