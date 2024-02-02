//API key
var APIkey = "53c645b6217c423283863fa7d94cbc2a"

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
    console.log(queryURL)
    console.log(data)
})
