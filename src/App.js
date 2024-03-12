import React, { Component } from 'react'
import FooterCom from './Components/FooterCom'
import Menu from './Components/Menu'
export default class App extends Component {
  render() {
    return (
        <div>
            <Menu />
            <FooterCom />
        </div>
    )
  }
}
