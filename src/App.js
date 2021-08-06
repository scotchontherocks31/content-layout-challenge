import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import ContentLayoutChallenge from './routes/ContentLayoutChallenge'
import './App.scss'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/content-layout' component={ContentLayoutChallenge} />
        </Switch>
      </Router>
    </div>
  )
}
