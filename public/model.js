
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
        return $.get(`/weathers`, function(weathers) {
            this.weathers = weathers
            return weathers
        })
    }

    deleteWeather (cityName) {
        return $.ajax({
            url: `/${cityName}`,
            type: 'DELETE',
            success: (result) => {
                console.log(`${result.name} deleted from db`);
                const index = this._weathers.findIndex(weather => weather.name === result.name)
                this._weathers.splice(index, 1)
            }
        })
    }
}
