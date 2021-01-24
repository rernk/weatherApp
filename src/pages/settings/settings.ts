import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {WeatherPage} from '../weather/weather';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state:string;
  lon:number;
  lat:number;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private storage:Storage) {
        
      this.storage.get('location').then((tmp)=>{
        if(tmp !=tmp)
        {
          let location =JSON.parse(tmp);
          this.city = location.city;
          this.state = location.state;
        }
        else
        {
          this.city = 'Bratislava';
          this.state= 'sk';
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm()
  {
    let location = 
    {
      city:this.city,
      state: this.state
    }
    //console.log(location);
    this.storage.set('location', JSON.stringify(location))
    this.navCtrl.push(WeatherPage)
  }

}
