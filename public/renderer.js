
class Renderer {
    constructor() {
    }

    renderWeathers(weathers) {
        $("#weathers").empty()
        console.log(weathers);
        for (let weather of weathers) {
            $("#weathers").append(`
                <div class="weather">
                    ${weather.name}
                    <span class="temp">${weather.temperature}</span>
                    ${weather.condition}
                    <img src="${weather.conditionPic}">
                </div>
            `)
        }
    }
}