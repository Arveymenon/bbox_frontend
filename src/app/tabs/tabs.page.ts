
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular'
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  data = '';
  constructor(
    private authService: AuthService,
    private storage: Storage, 
    private toastController: ToastController,
    private router: Router,
    private helper: HelperService,
    private platform: Platform
  ) {
    if (this.platform.is('cordova'))
      this.requestFilePermissions();
  }
 
  ngOnInit() {
  }
 
  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
  }
 
  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
 
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

  

  requestFilePermissions(){
    this.helper.checkPermissions()
    .then(permissions => console.log(permissions))
  }

  

}
