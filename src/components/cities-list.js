import React from 'react'
import { Link } from 'react-router-dom'
import { cities } from '../data'

function CityItem ({ name, slug }) {
  return (
    <Link to={`/cities/${slug}`}>
      <div className='columns' style={{
        borderBottom: '1px solid #ddd',
        padding: '16px 12px'
      }}>
        <div className='column'>
          <div style={{
            display: 'inline',
            padding: '15px 20px'
          }}>
            <i className='fas fa-map-pin' />
          </div>
          <div style={{ display: 'inline' }}>
            <h3 className='title is-4' style={{
              display: 'inline',
              fontWeight: 100
            }}>
              {name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

function CitiesList ({ searchTerm = '' }) {
  return (
    <div style={{
      overflow: 'scroll'
    }}>
      {cities.filter(city => city.name.toUpperCase().includes(searchTerm.toUpperCase())).map((city, index) => (
        <CityItem key={index} name={city.name} slug={city.value} />
      ))}
    </div>
  )
}

export default CitiesList
