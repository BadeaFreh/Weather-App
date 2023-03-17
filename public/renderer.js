
class Renderer {

    renderWeathers (weathers) {
        $("#weathers").empty()
        const source = $("#weathers-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            weathers,
        })
        $("#weathers").append(newHTML)
        $("input").val("")
    }
}
