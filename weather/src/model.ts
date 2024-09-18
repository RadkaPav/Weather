export interface ForecastData {
    city: {
        sunrise: number
        sunset: number
    }
    list: {
        dt: number
        main: {
            temp: number
            humidity: number
        }
        weather: {
            main: string
            icon: string
            description: string
        }[]
        wind: {
            speed: number
        }
    }[]
}

