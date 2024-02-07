//API key
var APIkey1 = "93026eaabf5e43f88000b0096607489c"
var id = 324694

///variable for url of random recipes from spoonacular
var url1 = "https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false&apiKey=" + APIkey1;

//function to fetch data from url variable
fetch(url1)
.then(function (response) {
    return response.json()
})
.then(function (data) {
      console.log(data)
      console.log(url1)

// fetching Receipe Name
      let receipeName = $("#receipeName");
      receipeName.text(" " + data.sourceName);

// fetching Cooking Time
let cookingTime = $("#cookingTime");
cookingTime.text(" Ready in " + data.readyInMinutes + " mins");  

//fetching HealthScore
let healthScore = $("#healthScore");
healthScore.text(" Health Score :  " + data.healthScore );  

//fetching Dish Intro
let dishIntro = $(".dish-intro");
dishIntro.text(data.summary);  
})


///variable for url of Analyzed Recipe Instructions
var url2 = "https://api.spoonacular.com/recipes/" + id + "/analyzedInstructions?apiKey=" + APIkey1;

fetch(url2)
.then(function (response) {
    return response.json()
})
.then(function (data) {
      console.log(data)
      console.log(url2)

//fetching Steps for instructions

for (let i =  0; i < 10; i++) {
    const stepElement = $(`#step${i}`);
    stepElement.html(`Step - ${i}<br>${data[0].steps[i].step}`);
  }

})

//variable for url of Ingredients by ID
var url3 = "https://api.spoonacular.com/recipes/" + id + "/ingredientWidget.json?apiKey=" + APIkey1;

fetch(url3)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    console.log(url3);

//fetching ingredients
for (let i =  1; i < 11; i++) {
    const ingredientElement = $(`#Ingredient${i}`);
    ingredientElement.html(data.ingredients[i].name);

  }

})
