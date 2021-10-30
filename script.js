// constants
const BASE_URL='https://api.openweathermap.org/data/2.5/weather'
const API_KEY= 'd7411c8633100dc00e9b3cfcadc2cb20'


//variables
let weatherData; 

//cached element refrences
const $name = $('#name');
const $temp = $('#temp')
const $feels_like = $('#feels_like')
const $weather = $('#weather')
const $input = $('input')
const $form = $('form')

//event listners 

$form.on('submit', handleSubmit)

//functions

function handleSubmit(evt){
    evt.preventDefault();
    const currentLocation = $input.val();
  $.ajax
   (`${BASE_URL}?q=${currentLocation}&appid=${API_KEY}&units=imperial`)
.then(
    (data) => {
      weatherData = data;
      render();

      console.log(weatherData)
    },
    (error) => {
      console.log("bad request: ", error)
    }
  )  
}

function render(){
  $name.text(weatherData.name);
  $temp.text(weatherData.main.temp);
  $feels_like.text(weatherData.main.feels_like);
  $weather.text(weatherData.weather[0].description);
};




 