// constants

const $name = $('#name');
const $temp = $('#temp')
const $feels_like = $('#feels_like')
const $weather = $('#weather')

//variables


//cached element refrences
function handleSubmit(evt){
    evt.preventDefault();

    const currentLocation = $input.val();
}


//event listners 

$.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=d7411c8633100dc00e9b3cfcadc2cb20&units=imperial"
}).then(
    (data) => {
        $name.text(data.name);
        $temp.text(data.main.temp);
        $feels_like.text(data.main.feels_like);
        $weather.text(data.weather[0].description);

      console.log(data)
    },
    (error) => {
      console.log("bad request: ", error)
    }
  )
 