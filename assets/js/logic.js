//API key
var APIkey = "53c645b6217c423283863fa7d94cbc2a"

///variable for url of random recipes from spoonacular
var url= "https://api.spoonacular.com/recipes/random?number=9" + "&apiKey=" + APIkey

//function to fetch data from url variable
fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(url)
    console.log(data)

//show image of random recipe on carousel
$("#popular-image1").attr("src", data.recipes[0].image)
$("#popular-image2").attr("src", data.recipes[1].image)
$("#popular-image3").attr("src", data.recipes[2].image)
$("#popular-image4").attr("src", data.recipes[3].image)
$("#popular-image5").attr("src", data.recipes[4].image)
$("#popular-image6").attr("src", data.recipes[5].image)
$("#popular-image7").attr("src", data.recipes[6].image)
$("#popular-image8").attr("src", data.recipes[7].image)
$("#popular-image9").attr("src", data.recipes[8].image)
//show name of random recipe on carousel
$("#popular-recipe1").text(data.recipes[0].title)
$("#popular-recipe2").text(data.recipes[1].title)
$("#popular-recipe3").text(data.recipes[2].title)
$("#popular-recipe4").text(data.recipes[3].title)
$("#popular-recipe5").text(data.recipes[4].title)
$("#popular-recipe6").text(data.recipes[5].title)
$("#popular-recipe7").text(data.recipes[6].title)
$("#popular-recipe8").text(data.recipes[7].title)
$("#popular-recipe9").text(data.recipes[8].title)
})

var recipeHistory =[]

//function to add data to local storage
function addStorage(search) {
    // if(recipeHistory.indexOf(search) !== -1) {
    //     return;
    // }
recipeHistory.push(search)
localStorage.setItem("recipeHistory", JSON.stringify(recipeHistory))
historyList()
}

//function to display recipe image and title
function recipeResults(event) {
event.preventDefault()

//variables to retrieve data from the search box and select menu
var recipe = $(".form-control").val()
var dietOption = $(".form-select").val()
addStorage(recipe)
//URL to retrieve recipes from spoonacular
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + recipe + "&diet=" + dietOption + "&apiKey=" + APIkey

fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(queryURL)
    console.log(data)

// If statement to remove style hiding the container for the recipe cards.
if (recipe + dietOption){
    var recipeContainer = document.getElementById("results-container")
    var containerTitle = document.getElementById("container-title")
    recipeContainer.removeAttribute('style')
    containerTitle.removeAttribute('style')
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
}else{
    recipeContainer.attr("style= display: none")
    containerTitle.attr("style= display: none")
}
})
}
$("#search-btn").on("click", recipeResults)

function getStorage() {
    var History = localStorage.getItem("recipeHistory")
    if(History) {
        recipeHistory = JSON.parse(History)
    }
    historyList();
}

function historyList() {
    $('.storage').html("")
    for(var i=0; i< recipeHistory.length; i++) {
    var storageButton = $('<button type="button" class="btn btn-primary btn-lg" id="search-history" style="margin-left: 10px;">').text(recipeHistory[i])
    $('.storage').append(storageButton)
    }
}
getStorage();


function retrieveStorage(recipe, dietOption) {
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + recipe + "&diet=" + dietOption + "&apiKey=" + APIkey

fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {

if (recipe + dietOption){
    var recipeContainer = document.getElementById("results-container")
    var containerTitle = document.getElementById("container-title")
    recipeContainer.removeAttribute('style')
    containerTitle.removeAttribute('style')
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
}else{
    recipeContainer.attr("style= display: none")
    containerTitle.attr("style= display: none")
}
})
}

$(document).on('click', "#search-history", function(event) {
    var recipe = event.target.textContent
    retrieveStorage(recipe)
})





