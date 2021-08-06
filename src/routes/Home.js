import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <header className='page-home'>
        <p>Challenges</p>
        <ul>
          <li><a href='/content-layout'>Content Layout Challenge</a></li>
        </ul>
      </header>
    )
  }
}
