import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/redditService';
import { DetailPage } from '../details/details';

@Component({
  selector: 'reddit-page',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items:any;
  category:any;
  limit:any;

  constructor(public navCtrl: NavController,private redditService:RedditService) {
this.getDefault();
  }
  ngOnInit(){
      this.getPosts(this.category,this.limit);
  }
  getDefault(){
this.category='sports';
this.limit=10;
  }
  getPosts(category,limit){
      this.redditService.getPosts(category,limit).subscribe(response=>
    this.items=response.data.children);
  }

  viewItem(data){
    this.navCtrl.push(DetailPage,{
      item:data
    });
  }
  changeCategory(){
   this.getPosts(this.category,this.limit);
  }
}