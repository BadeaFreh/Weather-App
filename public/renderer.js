
const render = function (recipesData) {
    $("#weathers").empty()
    const source = $("#weathers-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({
        weathers: recipesData
    })
    $("#weathers").append(newHTML);
}

class Renderer {
    constructor() {
    }

    renderWeathers(weathers) {
        $("#weathers").empty()
        for (let weather of weathers) {
            $("#weathers").append(`
                <div class="weather">
                    <span class="city-name">${weather.name}</span>
                    <span class="temp">${weather.temperature}</span>
                    ${weather.condition}
                    <img src="${weather.conditionPic}">
                    <button class="btn btn-danger remove-btn" type="button">Remove</button>
                </div>
            `)
        }
    }
}
