import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Mestre Yoda",
    data:"July 17, 1965",
    descricao:"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    qntd_likes: 8,
    qntd_comments: 4,
    time_comment: "16h ago"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
