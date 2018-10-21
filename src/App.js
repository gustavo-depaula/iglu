import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import ReactMapboxGl from 'react-mapbox-gl'
import './App.css'
import { Transition, config } from 'react-spring'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CityPage from './pages/city'
import MainPage from './pages/main'

export const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZ3VzdGF2b2RlcGF1bGEiLCJhIjoiY2puaHN5bXUxMDB2dTN5bXdmczZ6ODR6OSJ9.VxXCT8Va4vXbZQD67wlbVw'
})

class App extends Component {
  render () {
    return (
      <Router>
        <Transition
          config={config.slow}
          from={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
          enter={{ opacity: 1, transform: 'scale3d(1,1,1)' }}
          leave={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}>
          {
            style => (
              <div style={style}>
                <Route exact path='/' component={MainPage} />
                <Route path='/cities/:city' component={CityPage} />
              </div>
            )
          }
        </Transition>
      </Router>
    )
  }
}

export default App
