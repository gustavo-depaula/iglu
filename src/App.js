import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import ReactMapboxGl from 'react-mapbox-gl'
import './App.css'
import BottomInfo from './components/bottom-info'
import SearchBox from './components/search-box'
import CityPage from './components/city-page'
import { Transition, config } from 'react-spring'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZ3VzdGF2b2RlcGF1bGEiLCJhIjoiY2puaHN5bXUxMDB2dTN5bXdmczZ6ODR6OSJ9.VxXCT8Va4vXbZQD67wlbVw'
})

class App extends Component {
  render () {
    return (
      <Router>
        <Transition
          config={config.slow}
          //          keys={location.pathname}
          from={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
          enter={{ opacity: 1, transform: 'scale3d(1,1,1)' }}
          leave={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}>
          {
            style => (
              <div style={style}>
                <Route exact path='/' component={() => (
                  <div>
                    <SearchBox />
                    <BottomInfo />

                    <Map
                      style='mapbox://styles/mapbox/light-v9'
                      containerStyle={{
                        height: '100vh',
                        width: '100vw'
                      }}
                      zoom={[1]}
                    />
                  </div>
                )} />
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
