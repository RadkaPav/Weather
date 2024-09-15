import React from 'react'
import "./CityInput.css"

interface Props {
    city: string | undefined
    setCity: React.Dispatch<React.SetStateAction<string | undefined>>
    onKeyHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const CityInput = ({ city, setCity, onKeyHandler }: Props) => {

  return (
    <form onSubmit={(e) => onKeyHandler} >
        <input className='cityinput' type='text' placeholder='Enter a city...' onChange={(e) => setCity(e.target.value)} value={city} />
        <button className='button' type='submit'>Submit</button>
    </form>
  )
}

export default CityInput