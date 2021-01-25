import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather:any;
  weather_part:string;
  weather_icon1:string;
  weather_icon2:string;
  date_sunset:any;
  date_sunrise:any;
  location:{
    city:string,
    state:string
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private weatherProvider:WeatherProvider,
    private storage:Storage) {
  }

  ionViewWillEnter()
  {

    this.storage.get('location').then((tmp)=>{
      if(tmp != null)
      {
        this.location = JSON.parse(tmp);
      }
      else
      {
        this.location =
        {
          //city: 'Bratislava',
          city: 'Nové Mesto nad Váhom',
          //city: 'Miami',
          //state: 'USA'
          state:'sk'
        }
      }
      this.weatherProvider.getWeather(this.location.city,this.location.state).subscribe(weather =>{
        //Concole outputs
        //console.log(weather);
        //this.weather_part = weather.weather[0].icon
        this.weather_icon1 = "https://openweathermap.org/img/wn/"
        this.weather_icon2 = "@2x.png";
        this.weather = weather as any;
        //this.date_sunrise =new Date(weather.sys.sunrise).toLocaleTimeString('en-US',{hour12:false});
        //this.date_sunset = new Date(weather.sys.sunset).toLocaleTimeString('en-US',{hour12:false});
        console.log(this.weather.sys.sunrise);

      });
      console.log(this.weather);
    });
    

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
