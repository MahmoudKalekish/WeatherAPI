import React from 'react'
import './Body.css'
import mostlycloudy from '../weather-icons/mostlycloudy.svg'
import clear from '../weather-icons/clear.svg'
import CurrentWeather from '../components/CurrentWeather'
function Body() {
  return (
    <div className='body' > 

      <CurrentWeather />
      <div className='weather-cards'>

        <div className='card'>
          <p>03:00</p>
          <img src={mostlycloudy} alt='mostly cloudy icon'/>
          <p>8°C</p>

        </div>

        <div className='card'>
          <p>06:00</p>
          <img src={mostlycloudy} alt='mostly cloudy icon'/>
          <p>9°C</p>

        </div>

        <div className='card'>
          <p>09:00</p>
          <img src={clear} alt='clear icon'/>
          <p>14°C</p>

        </div>


        <div className='card'>
          <p>12:00</p>
          <img src={clear} alt='clear icon'/>
          <p>17°C</p>

        </div>


        <div className='card'>
          <p>15:00</p>
          <img src={clear} alt='clear icon'/>
          <p>18°C</p>

        </div>


        <div className='card'>
          <p>18:00</p>
          <img src={clear} alt='clear icon'/>
          <p>16°C</p>

        </div>


        <div className='card'>
          <p>21:00</p>
          <img src={mostlycloudy} alt='mostly cloudy icon'/>
          <p>13°C</p>

        </div>

      </div>

    </div>
  )
}

export default Body