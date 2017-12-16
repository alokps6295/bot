import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/redditService';
import { DetailPage } from '../details/details';


@Component({
  selector: 'setting-page',
  templateUrl: 'setting.html'
})
export class settingPage {
  items:any;
  category:any;
  limit:any;

  constructor(public navCtrl: NavController,private redditService:RedditService) {
     this.getDefault();
  }

  getDefault(){
this.category='sports';
this.limit=10;
  }


}
