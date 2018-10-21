import React from 'react'
import { Link } from 'react-router-dom'
import { Map } from '../App'
import { cities } from '../data'

function CityPage ({ match, ...props }) {
  const city = cities.find(city => city.value === match.params.city)
  return (
        <>
          <Map
            center={[121.450496, 31.165072]}
            style='mapbox://styles/mapbox/light-v9'
            containerStyle={{
              height: '200px',
              width: '100vw'
            }}
            zoom={[7]}
          />
          <div style={{
            padding: '20px'
          }}>
            <Link to='/'>voltar</Link>
            <h1 className='title'>{city.name}</h1>
            {city.data.map((data, index) => (
              <div key={index} style={{ paddingBottom: '15px' }}>
                <p style={{ fontWeight: 'bold' }}>{data.title}</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{data.value}</p>
              </div>
            ))}
          </div>
        </>
  )
}

export default CityPage
