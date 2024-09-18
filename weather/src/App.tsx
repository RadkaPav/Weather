import './App.css'
import CityInput from './components/CityInput'
import MainWindow from './components/MainWindow'
import WeatherBox from './components/WeatherBox'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { getTime } from './helpers' 
import { ForecastData } from './model'

function App() {
  const [data, setData] = useState<ForecastData | null>(null)
  const [city, setCity] = useState<string | undefined>('')
  const [titleCity, setTitleCity] = useState<string | undefined>()
  const [todayForecast, setTodayForecast] = useState<ForecastData | undefined>()
  const [forecast, setForecast] = useState<{temp: number | null, icon: string, date: number | null}[]>([{temp: null, icon: '', date: null}])

  let url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`

  const api = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTodayForecast({
          date: data.list[0].dt,
          weather: data.list[0].weather[0].description,
          temp: data.list[0].main.temp,
          icon: data.list[0].weather[0].icon,
          humidity: data.list[0].main.humidity,
          wind: data.list[0].wind.speed,
          sunrise: data.city.sunrise,
          sunset: data.city.sunset
        })
        setData(data)
        updateData(data)
        setCity('')
      })
      .catch(err => {
        console.log(err.message)
        setCity('')
        setTitleCity('')
        toast.error('City was not found, try again...')
      })
  }

  console.log(data)
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

  const updateData = (data: any) => {
    let dayIndexes = []
    for (let i = 0; i < 40; i++) {
      const time = getTime(data.list[i].dt - 7200)
      if (time === '15:0') {
        dayIndexes.push(i)
      }
    }

    let forecastArray: {temp: number, icon: string, date: number}[] = []
    for (let i = 0; i < 4; i++) {
      let dayForecast = {
        temp: data.list[dayIndexes[i]].main.temp,
        icon: data.list[dayIndexes[i]].weather[0].icon,
        date: data.list[dayIndexes[i]].dt
      }
      forecastArray.push(dayForecast)
    }
    setForecast(forecastArray)
  }

  return (
    <div>
      <CityInput onKeyHandler={onKeyHandler} setCity={setCity} city={city} />
      {!titleCity ?
        <h1 className='title'>Weather Forecast</h1> :
        <div className='container'>
          <MainWindow titleCity={titleCity} todayForecast={todayForecast} data={data}/>
          {/* <WeatherBox forecast={forecast} /> */}
          <WeatherBox />
        </div>
      }
      <Toaster position='bottom-center' reverseOrder={false} />
    </div>
  )
};

export default App

