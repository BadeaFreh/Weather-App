
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

    addWeather (weather) {
        this._weathers.push(weather)
    }

    requestWeathers () {
        return $.get(`/weathers`, function(weathers) {
            this.weathers = weathers
            return weathers
        })
    }
}