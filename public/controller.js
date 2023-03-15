
const model = new Weather()
const renderer = new Renderer()

window.onload = async function () {
    const weathers = await model.requestWeathers()
    renderer.renderWeathers(weathers)
}

$('form').on('submit', function (event) {
    event.preventDefault();
})

$(".search-btn").on("click", async function () {
    let cityName = $("input").val()
    const weathers = await model.requestWeathers()
    model.setWeathers(weathers)
    await model.saveWeather(cityName)
    renderer.renderWeathers(model.getWeathers())
})

$(".remove-btn").on("click", async function() {
    console.log("Clicked")
    const cityName = $(this).closest(".weather").find(".city-name").text()
    await model.deleteWeather(cityName)
    renderer.renderWeathers()
})