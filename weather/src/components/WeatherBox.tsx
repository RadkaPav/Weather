import "./WeatherBox.css"
import images from '../images'
import { getDate, getTime } from '../helpers'
import { ForecastData } from "../model"

interface Props {
  forecast: ForecastData | undefined
}
const WeatherBox = ({ forecast }: Props) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  let dayNumbers = []
  if (forecast) {
    for (let i = 0; i < 40; i++) {
      const time = getTime(forecast.list[i].dt - 7200)
      if (time === '15:0') {
        dayNumbers.push(i)
      }
    }
  }

  return (
    <div className='weather-boxes'>
      {!forecast ? <div></div> :
        dayNumbers.map((dayNumber, index) => {
          const day = days[new Date(forecast.list[dayNumber].dt * 1000).getDay()]
          return (
            <div className='weather-box' key={index}>
              <h4>{day}, {getDate(forecast.list[dayNumber].dt)}</h4>
              <div className='text'>
                <img src={images[index].image} alt='' className='image-box' />
                <span>{Math.round(forecast.list[dayNumber].main.temp - 273.15)}°C</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default WeatherBox