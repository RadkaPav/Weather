import './App.css'
import CityInput from './components/CityInput'
import MainWindow from './components/MainWindow'
import WeatherBox from './components/WeatherBox'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ForecastData } from './model'

function App() {
  const [city, setCity] = useState<string | undefined>('')
  const [titleCity, setTitleCity] = useState<string | undefined>()
  const [forecast, setForecast] = useState<ForecastData | undefined>()

  let url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`

  const api = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setForecast(data)
        setCity('')
      })
      .catch(err => {
        console.log(err.message)
        setCity('')
        setTitleCity('')
        toast.error('City was not found, try again...')
      })
  }

  console.log(city)
  const onKeyHandler = (e: React.FormEvent, city: string | undefined) => {
    e.preventDefault()
    if (!city) {
      toast.error('Please, enter a city')
    } else if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
      api()
      setTitleCity(city)
    } else {
      toast.error('Please enter a valid city name')
    }
  }
  console.log(titleCity)

  return (
    <div>
      <CityInput onKeyHandler={onKeyHandler} setCity={setCity} city={city} />
      {!titleCity ?
        <h1 className='title'>Weather Forecast</h1> :
        <div className='container'>
          <MainWindow titleCity={titleCity} todayForecast={forecast}/>
          <WeatherBox forecast={forecast} />
        </div>
      }
      <Toaster position='bottom-center' reverseOrder={false} />
    </div>
  )
};

export default App

