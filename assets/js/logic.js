//API key
var APIkey = "53c645b6217c423283863fa7d94cbc2a"

function recipeResults () {
//variable to retrieve data from the search box
var recipe = $(".form-control").val()
var dietOption = $(".form-select").val()

//URL to retrieve recipes from spoonacular
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + recipe + "&diet=" + dietOption + "&apiKey=" + APIkey

fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data)

//Show image of the recipe
$("#image1").attr("src", data.results[0].image)
$("#image2").attr("src", data.results[1].image)
$("#image3").attr("src", data.results[2].image)
$("#image4").attr("src", data.results[3].image)
$("#image5").attr("src", data.results[4].image)
$("#image6").attr("src", data.results[5].image)
//Show the recipe name
$("#recipe1").text(data.results[0].title)
$("#recipe2").text(data.results[1].title)
$("#recipe3").text(data.results[2].title)
$("#recipe4").text(data.results[3].title)
$("#recipe5").text(data.results[4].title)
$("#recipe6").text(data.results[5].title)
})
}

$("#search-btn").on("click", recipeResults)


