//API key
var APIkey = "53c645b6217c423283863fa7d94cbc2a"

///variable for url of random recipes from spoonacular
var url= "https://api.spoonacular.com/recipes/716429/information?includeNutrition=false" + "&apiKey=" + APIkey

//function to fetch data from url variable
fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(url)
    console.log(data)
})

var recipe = data.sourceName
console.log(recipe);