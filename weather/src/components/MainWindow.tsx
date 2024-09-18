import './MainWindow.css'
import images from '../images'
import { getTime, getDate } from '../helpers'
import { ForecastData } from '../model'

interface Props {
  todayForecast: ForecastData | undefined
  titleCity: string | undefined
  data: ForecastData | null
}
const MainWindow = ({ todayForecast, titleCity, data }: Props) => {
  const image = images.filter(oneImage => {
    return todayForecast ? oneImage.icon === todayForecast.icon : undefined
})

  return (
    <div className='main-window'>
    {
        !todayForecast ? <div></div> : 
        <div>
      <h2 className='title'>{!titleCity ? "" : titleCity.slice(0, 1).toUpperCase() + titleCity.slice(1).toLowerCase()} { getDate(todayForecast.date)}</h2>
       <div className='img-temp'>
        <img src={data ? image[0].image : ""} alt='' className='image' />
        <div>
          <h1>{todayForecast ? Math.round(todayForecast.temp - 273.15) : "" }°C</h1>
          <h3>{todayForecast ? todayForecast.weather : ""}</h3>
        </div>
       </div>
       <div className='text'>
          <div>
           <p>sunrise</p><p>{getTime(todayForecast.sunrise)}</p>
         </div>
         <div>
           <p>sunset</p><p>{getTime(todayForecast.sunset)}</p>
         </div>
        <div>
           <p>humidity</p><p>{todayForecast.humidity} %</p>
         </div>
         <div>
           <p>wind</p><p>{todayForecast.wind} m/s</p>
       </div>
      </div> 
  </div>
    }
    </div>
  )
}

export default MainWindow