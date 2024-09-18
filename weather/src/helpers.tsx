export const getTime = (time: number | undefined )=> {
    if(time) {
        const date: Date = new Date(time * 1000)
        const hours: number = date.getHours()
        const minutes: number = date.getMinutes()
        return `${hours}:${minutes}`
    }
}

export const getDate = (time: number | undefined) => {
    if (time) {
        const date: Date = new Date(time * 1000)
        const day: number = date.getDate()
        const month: number = date.getMonth() + 1
        const year: number = date.getFullYear()
    
        return `${day}. ${month}. ${year}`
    }
}