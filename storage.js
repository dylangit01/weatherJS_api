class LocalStorage {
  constructor() {
    this.city = '';
    this.country = '';
    this.defCity = 'Mississauga';
    this.defCountry = 'CA'
  }

  getLocationData() {
    if(localStorage.getItem('city') === null || localStorage.getItem('city') === ''){
      this.city = this.defCity;
    } else {
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('country') === null || localStorage.getItem('country') === ''){
      this.country = this.defCountry;
    } else {
      this.country = localStorage.getItem('country')
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country){
    localStorage.setItem('city', city);
    localStorage.setItem('country', country)
  }


}
