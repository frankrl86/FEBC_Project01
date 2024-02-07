//API key
var APIkey = "93026eaabf5e43f88000b0096607489c"

///Variable for url of random recipes from spoonacular
var url= "https://api.spoonacular.com/recipes/random?number=9" + "&apiKey=" + APIkey

//Function to fetch data from url variable
fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(url)
    console.log(data)

//Show image of random recipe on carousel
$("#popular-image1").attr("src", data.recipes[0].image)
$("#popular-image2").attr("src", data.recipes[1].image)
$("#popular-image3").attr("src", data.recipes[2].image)
$("#popular-image4").attr("src", data.recipes[3].image)
$("#popular-image5").attr("src", data.recipes[4].image)
$("#popular-image6").attr("src", data.recipes[5].image)
$("#popular-image7").attr("src", data.recipes[6].image)
$("#popular-image8").attr("src", data.recipes[7].image)
$("#popular-image9").attr("src", data.recipes[8].image)
//Show name of random recipe on carousel
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

//Function to add data to local storage
function addStorage(search) {
recipeHistory.push(search)
localStorage.setItem("recipeHistory", JSON.stringify(recipeHistory))
historyList()
}

//Function to display recipe image and title
function recipeResults(event) {
event.preventDefault()

//Variables to retrieve data from the search box and select menu
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

//Variable to get the id of the first item in the data.results array
var recipeId = data.results[0].id
var idURL= "https://api.spoonacular.com/recipes/" + recipeId + "/information?" + "&apiKey=" + APIkey
//Function to fetch the id data and add the text to the overview1 id in the HTML file
fetch(idURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL)
    console.log(data)
$("#overview1").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId1 = data.results[1].id
var idURL1= "https://api.spoonacular.com/recipes/" + recipeId1 + "/information?" + "&apiKey=" + APIkey

fetch(idURL1)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL1)
    console.log(data)
$("#overview2").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId2 = data.results[2].id
var idURL2= "https://api.spoonacular.com/recipes/" + recipeId2 + "/information?" + "&apiKey=" + APIkey

fetch(idURL2)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL2)
    console.log(data)
$("#overview3").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId3 = data.results[3].id
var idURL3= "https://api.spoonacular.com/recipes/" + recipeId3 + "/information?" + "&apiKey=" + APIkey

fetch(idURL3)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL3)
    console.log(data)
$("#overview4").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId4 = data.results[4].id
var idURL4= "https://api.spoonacular.com/recipes/" + recipeId4 + "/information?" + "&apiKey=" + APIkey

fetch(idURL4)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL4)
    console.log(data)
$("#overview5").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})

var recipeId5 = data.results[5].id
var idURL5= "https://api.spoonacular.com/recipes/" + recipeId5 + "/information?" + "&apiKey=" + APIkey

fetch(idURL5)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL5)
    console.log(data)
$("#overview6").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
})
}
$("#search-btn").on("click", recipeResults)

//Function to get items from the local storage
function getStorage() {
    var History = localStorage.getItem("recipeHistory")
    if(History) {
        recipeHistory = JSON.parse(History)
    }
    historyList();
}
//Function to create buttons under the recent searches section for each value in the local storage.
function historyList() {
    $('.storage').html("")
    for(var i=0; i< recipeHistory.length; i++) {
    var storageButton = $('<button type="button" class="btn btn-primary btn-lg" id="search-history" style="margin-left: 10px;">').text(recipeHistory[i])
    $('.storage').append(storageButton)
    }
}
getStorage();

//Function to retrieve the data from local storage and display it on the cards.
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
var recipeId = data.results[0].id
var idURL= "https://api.spoonacular.com/recipes/" + recipeId + "/information?" + "&apiKey=" + APIkey

fetch(idURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL)
    console.log(data)
$("#overview1").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId1 = data.results[1].id
var idURL1= "https://api.spoonacular.com/recipes/" + recipeId1 + "/information?" + "&apiKey=" + APIkey

fetch(idURL1)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL1)
    console.log(data)
$("#overview2").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId2 = data.results[2].id
var idURL2= "https://api.spoonacular.com/recipes/" + recipeId2 + "/information?" + "&apiKey=" + APIkey

fetch(idURL2)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL2)
    console.log(data)
$("#overview3").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId3 = data.results[3].id
var idURL3= "https://api.spoonacular.com/recipes/" + recipeId3 + "/information?" + "&apiKey=" + APIkey

fetch(idURL3)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL3)
    console.log(data)
$("#overview4").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
var recipeId4 = data.results[4].id
var idURL4= "https://api.spoonacular.com/recipes/" + recipeId4 + "/information?" + "&apiKey=" + APIkey

fetch(idURL4)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL4)
    console.log(data)
$("#overview5").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})

var recipeId5 = data.results[5].id
var idURL5= "https://api.spoonacular.com/recipes/" + recipeId5 + "/information?" + "&apiKey=" + APIkey

fetch(idURL5)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(idURL5)
    console.log(data)
$("#overview6").text("Serving size: " + data.servings + ",   Ready in: " + data.readyInMinutes + " minutes")
})
})
}
//Data from local storage displays on the cards when the recipe button in the recent searches is clicked.
$(document).on('click', "#search-history", function(event) {
    var recipe = event.target.textContent
    retrieveStorage(recipe)
})
