import './MainWindow.css'
import images from '../images'
import { getTime, getDate } from '../helpers'
import { ForecastData } from '../model'

interface Props {
  todayForecast: ForecastData | undefined
}

const MainWindow = ({ todayForecast }: Props) => {
  const image = images.filter(oneImage => {
    return todayForecast ? oneImage.icon === todayForecast.list[0].weather[0].icon : images[0].image
  })

  return (
    <div className='main-window'>
      {
        !todayForecast ? <div></div> :
          <div>
            <h2 className='title'>{todayForecast.city.name} {getDate(todayForecast.list[0].dt)}</h2>
            <div className='img-temp'>
              <img src={todayForecast ? image[0].image : ""} alt='' className='image' />
              <div>
                <h1>{todayForecast ? Math.round(todayForecast.list[0].main.temp - 273.15) : ""}°C</h1>
                <h3>{todayForecast ? todayForecast.list[0].weather[0].description : ""}</h3>
              </div>
            </div>
            <div className='text'>
              <div>
                <p>sunrise</p><p>{getTime(todayForecast.city.sunrise)}</p>
              </div>
              <div>
                <p>sunset</p><p>{getTime(todayForecast.city.sunset)}</p>
              </div>
              <div>
                <p>humidity</p><p>{todayForecast.list[0].main.humidity} %</p>
              </div>
              <div>
                <p>wind</p><p>{todayForecast.list[0].wind.speed} m/s</p>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default MainWindow