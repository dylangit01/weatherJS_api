class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.main = document.getElementById('w-main');
    this.mainTemp = document.getElementById('w-mainTemp');
    this.icon = document.getElementById('w-icon');
    this.maxMinTemp = document.getElementById('w-max-min-temp');
    this.feelslike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
  }

  paint(weatherData){
      console.log(weatherData);

      if(weatherData.message === 'city not found'){
          this.noCityFound(weatherData.message)
      } else {
        this.location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        this.main.textContent = this.capitalize(weatherData.weather[0].description);
        this.mainTemp.textContent = `${weatherData.main.temp}°C`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
        this.maxMinTemp.textContent = `Temp Min - Max: ${weatherData.main.temp_min} ~ ${weatherData.main.temp_max}°C`;
        this.feelslike.textContent = `Feels like: ${weatherData.main.feels_like}°C`;
        this.pressure.textContent = `Relative Pressure: ${weatherData.main.pressure}hPa`;
        this.humidity.textContent = `Relative Humidity: ${weatherData.main.humidity}%`;
        this.wind.textContent = `Wind: ${weatherData.wind.speed}m/s`;
      }
  }

  capitalize(str) {
    if(typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  noCityFound(message){
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    alert.appendChild(document.createTextNode(message));

    const parentEl = document.querySelector('.col-md-8');
    const content = document.querySelector('#w-location');
    parentEl.insertBefore(alert, content);

    setTimeout(_=>{
      alert.remove()
    }, 2000)
  }

}
