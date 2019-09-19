import { Component,/* NavController, IonicPage,*/ OnInit } from '@angular/core';

//@IonicPage()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(/*public navCtrl: NavController, public navParams: NavParams*/){
    //this.myIndex = navParams.data.tabIndex || 0;
}

  ngOnInit() {
  }

    tab1Root = 'ReclamationsPage';
    tab2Root = 'HomePage';
    myIndex: number;

}

