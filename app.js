const lcStorage = new LocalStorage;

const weatherLoc = lcStorage.getLocationData();

const weather = new Weather(weatherLoc.city, weatherLoc.country);

const ui = new UI;

// weather.changeLocation('Miami', 'US');

const getWeather = () => {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err.message))
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  if(city === ''){
    $('#locModal').modal('hide');
    const message = 'Please enter a city';
    ui.noCityFound(message);

  } else {
    weather.changeLocation(city, country);
    // after changing the location, we need to fetch the weather again:
    getWeather();

    lcStorage.setLocationData(city, country);

    btnChangeFields();
    // Close modal using jQuery:
    $('#locModal').modal('hide')
  }

});

const btnChangeFields = () => {
  document.getElementById('city').value = '';
  document.getElementById('country').value = '';
};
