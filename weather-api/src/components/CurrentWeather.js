import React from 'react'
import './Body.css'
import mostlycloudy from '../weather-icons/mostlycloudy.svg'
function CurrentWeather() {
  return (
    <div>
        <div className='mainImage'>
        <img src={mostlycloudy} alt='mostly cloudy icon'/>
        
      </div>

      <div className='imgDiscription'>
        <p>overcast clouds</p>
      </div>

      <div className='temperature'>
        <p><span className='temp'>Temperature</span> 10° to 11°C</p>
      </div>

      <div className='hum-pre'>
        <p><span className='hp'>Humidity</span> &nbsp;&nbsp; 78% &nbsp;&nbsp; <span className='hp'>Pressure </span>&nbsp;&nbsp; 1008.48</p>
      </div>

    </div>
  )
}

export default CurrentWeather