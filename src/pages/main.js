import React from 'react'
import BottomInfo from '../components/bottom-info'
import SearchBox from '../components/search-box'
import { Map } from '../App'

function MainPage() {
    return (
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
    )
}

export default MainPage
