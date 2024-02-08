//API key

var APIkey1 = "856b27e9b91f4b6c820af76f92aa75f1";

var pexelsApiKey = "bJB4r9XixEEj1UZujnkRhKD2fjmLan5KaFFjmBYfdRBLVWGKGaHp2XXB";

var searchId = localStorage.getItem("currentSearch");
console.log(searchId);
var id = searchId;

///variable for url of random recipes from spoonacular
var url1 =
  "https://api.spoonacular.com/recipes/" +
  id +
  "/information?includeNutrition=false&apiKey=" +
  APIkey1;

//function to fetch data from url variable
fetch(url1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(url1);

    // fetching Receipe Name
    let receipeName = $("#receipeName");
    receipeName.text(" " + data.title);
    callPexel(data.title);

    // fetching Cooking Time
    let cookingTime = $("#cookingTime");
    cookingTime.text(" Ready in " + data.readyInMinutes + " mins");

    //fetching HealthScore
    let healthScore = $("#healthScore");
    healthScore.text(" Health Score :  " + data.healthScore);

    //fetching Dish Intro
    let dishIntro = $(".dish-intro");
    dishIntro.html(data.summary);

    // fetching image
    // var imgSrc = $('.placeholderImage img').attr('src');
    $(".foodImage img").attr("src", data.image);
  });

///variable for url of Analyzed Recipe Instructions
var url2 =
  "https://api.spoonacular.com/recipes/" +
  id +
  "/analyzedInstructions?apiKey=" +
  APIkey1;

fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(url2);

    //fetching Steps for instructions

    for (let i = 0; i < 10; i++) {
      const stepElement = $(`#step${i}`);
      stepElement.html(`Step - ${i}<br>${data[0].steps[i].step}`);
    }
  });

//variable for url of Ingredients by ID
var url3 =
  "https://api.spoonacular.com/recipes/" +
  id +
  "/ingredientWidget.json?apiKey=" +
  APIkey1;

fetch(url3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(url3);

    //fetching ingredients
    for (let i = 1; i < 11; i++) {
      const ingredientElement = $(`#Ingredient${i}`);
      ingredientElement.html(data.ingredients[i].name);
    }
  });

//variable for Pexels API
function callPexel(pexelSearch) {
  console.log(pexelSearch);
  // console.log("https://api.pexels.com/videos/search?query=" + pexelSearch.split(" ").join(""));
  fetch("https://api.pexels.com/videos/search?query=" + pexelSearch, {
    headers: {
      Authorization: pexelsApiKey,
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.videos[0].url);
      $("#apiLink a").attr("href", data.videos[0].url);

      //  var videoSrc = $('.list-group video').attr('src');
      //  $('.videoFood video').attr('src', data.videos[0].url).autoPlayVideo.play();
      // $("#videoContainer").html(`  <video  class="rounded pexel-api" controls autoplay muted><source src="${data.videos[0].url}" /></video>`)
    });
}
