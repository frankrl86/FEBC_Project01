// API key for spoonacular API
var APIKey  = "ff33d553ca7748658b095cb6f3ef1001"



var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2" + "&appid=" + APIKey;
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
   
  });