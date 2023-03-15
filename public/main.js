
const model = new Weather()
const renderer = new Renderer()

$('form').on('submit', function (event) {
    event.preventDefault();
})

const saveWeather = function (cityName) {
    return $.post(`/${cityName}`, function (response) {
        return response
    })
}

$(".btn").on("click", async function () {
    let cityName = $("input").val()
    const weathers = await model.requestWeathers()
    model.setWeathers(weathers)
    const savedWeather = await saveWeather(cityName)
    model.addWeather(savedWeather)
    renderer.renderWeathers(model.getWeathers())
})
