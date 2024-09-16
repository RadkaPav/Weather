import React from 'react'
import './MainWindow.css'
// import images from '../images'
import { getTime, getDate } from '../helpers'

interface Props {
    todayForecast: {
        date: number | null
        weather: string
        temp: number | null
        icon: string
        humidity: string
        wind: string
        sunrise: number | null
        sunset: number | null
    }
    titleCity: string | undefined
     
}
const MainWindow = ({ todayForecast, titleCity }: Props) => {
  const { date, weather, temp, icon, humidity, wind, sunrise, sunset } = todayForecast
//   const image = images.filter(oneImage => oneImage.icon === icon)

  return (
    <div className='main-window'>
      {/* <h2 className='title'>{!titleCity ? "" : titleCity.slice(0, 1).toUpperCase() + titleCity.slice(1).toLowerCase()} {getDate(date)}</h2>
      <div className='img-temp'>
        <img src={data ? image[0].image : ""} alt='' className='image' />
        <div>
          <h1>{Math.round(temp - 273.15)}°C</h1>
          <h3>{weather}</h3>
        </div>
      </div>
      <div className='text'>
        <div>
          <p>sunrise</p><p>{getTime(sunrise)}</p>
        </div>
        <div>
          <p>sunset</p><p>{getTime(sunset)}</p>
        </div>
        <div>
          <p>humidity</p><p>{humidity} %</p>
        </div>
        <div>
          <p>wind</p><p>{wind} m/s</p>
        </div>
      </div> */}
      <h2>weather</h2>
    </div>
  )
}

export default MainWindow