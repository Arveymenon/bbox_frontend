import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  lang : string = "EN";
  constructor(
    public navCtrl : NavController,
    private translate: TranslateService,
    private storage: Storage,
  ) {
    this.storage.get('language')
    .then(lang => {
      if(lang){
        this.lang = lang;
      }
    })
   }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }
}
