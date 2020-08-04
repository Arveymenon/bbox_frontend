import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  value : any;
  constructor(
    public loadingController: LoadingController,
    private translate: TranslateService,
    private storage: Storage
  ) {
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      this.value = this.translate.instant(['Please_Wait'], { value: language ? language : 'en' })
      console.log(this.value)
      
    });
   }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: null,
      translucent: true,
      showBackdrop: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    
  }


  async dismiss(){
    this.loadingController.dismiss();
  }

}
 