
class Weather {
    constructor() {
        this._weathers = []
    }

    setWeathers (weathers) {
        this._weathers = weathers
    }

    getWeathers () {
        return this._weathers
    }

    saveWeather (cityName) {
        return $.post(`/${cityName}`, (weather) => {
            this._weathers.push(weather)
            return weather
        })
    }

    requestWeathers () {
        return $.get(`/weathers`, (weathers) => {
            this.setWeathers(weathers)
            return this._weathers
        })
    }

    deleteWeather (cityName) {
        return $.ajax({
            url: `/${cityName}`,
            type: 'DELETE',
            success: (cityName) => {
                const index = this._weathers.findIndex(weather => weather.name === cityName)
                this._weathers.splice(index, 1)
            }
        })
    }
}
