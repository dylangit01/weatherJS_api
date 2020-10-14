class Weather {
  constructor(city, country) {
    this.api = 'dec5a2cb248804fb35a7624c4c21f843';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather(){
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const response = await fetch(`${URL}${this.city},${this.country}&units=metric&appid=${this.api}`);

    return await response.json()
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }



}
