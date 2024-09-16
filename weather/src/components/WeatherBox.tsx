import "./WeatherBox.css"
// import images from '../images'
import { getDate } from '../helpers'

const WeatherBox = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className='weather-boxes'>
      {/* {props.forecast.map((oneDay, index) => {

        const image = images.filter((oneImage) => oneImage.icon === oneDay.icon)
        const day = days[new Date(oneDay.date * 1000).getDay()]

        return (
          <div className='weather-box' key={index}>
            <h4>{day}, {getDate(oneDay.date)}</h4>
            <div className='text'><img src={image[0].image} alt='' className='image-box' /><span>{Math.round(oneDay.temp - 273.15)}°C</span></div>
          </div>
        )
      })} */}
<h2>box</h2>
    </div>
  )
}

export default WeatherBox