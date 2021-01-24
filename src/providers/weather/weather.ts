import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  api_key= 'fbbb2ea3548a7c9c9e06c94a09507656';
  url_part_one;
  url_part_two ='&units=metric&appid='+this.api_key;
  my_date:any;

  constructor(public http: HttpClient) {
    console.log('WeatherProvider Provider');
    //https://api.openweathermap.org/data/2.5/weather?q=Bratislava,sk&units=metric&APPID=fbbb2ea3548a7c9c9e06c94a09507656
        this.url_part_one ='https://api.openweathermap.org/data/2.5/weather?q=';
  }
  getWeather(city,state)
  {
   return this.http.get(this.url_part_one+city+','+state+this.url_part_two);
  }
  convertUnitToDate(unixTime)
  {
    return this.my_date = new Date(unixTime*1000).toLocaleDateString("sk");
  }
}
