import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { UserService } from '../shareduser/user.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../services/loader.service';

const TOKEN_KEY = 'access_token';
const DATA_NAME = 'name';
const DATA_EMAIL = 'email';
const DATA_ID = 'id';
const DATA_AVATAR = 'profile_pic';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;
  lang: String;
  player_id: any;
 
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private translate: TranslateService,
    private storage: Storage,
    private oneSignal: OneSignal,
    // private fb: Facebook,
    public userService: UserService,
    private alertController: AlertController,
    private googlePlus: GooglePlus,
    public loader : LoaderService,
    ) {
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          console.log(lang)
          if(lang == 'en'){
            this.lang = 'JP';
          }else{
            this.lang = 'EN';
          }
        }else{
          this.lang = 'JP'
        }
      })
    this.oneSignal.getIds().then((data)=>{
      this.player_id = data.userId
    })
  }
 
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['',  [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  async onSubmit() {
    console.log(this.credentialsForm.valid);
      if(this.credentialsForm.valid){
        this.authService.login({
          email: this.credentialsForm.value.email,
          password: this.credentialsForm.value.password,
          onesignal_id: this.player_id ? this.player_id : false,
         }).then((res) => {
          // this.showToast(); 
          this.router.navigate(['home/tabs/tab1']);
        });
      }else{
        this.translate.get('Invalid_Credentials',{value: this.lang}).subscribe(async (res: any)=>{
          console.log(res)
          const alert = await this.alertController.create({
            header: res,
            buttons: ['OK']
          });
      
          await alert.present();
        });
        // get('Invalid Credentials')
      }
      
  }
 
  // async showToast() {
  //   console.log("toast")
  //   console.log(this.lang);
  //   this.translate.get('Welcome to Bbox',{value: this.lang}).subscribe(async (res: any)=>{
  //     console.log("toast",res)
  //     const toast = await this.toastController.create({
  //       message: res,
  //       duration: 1000,
  //       position: "bottom",
  //     });
  //     toast.present();
  //   });
  // }

  toggleLang(){
    console.log('clicked')
    if(this.lang === 'EN'){
      this.lang = 'JP';
      this.translate.use('en');
      this.storage.set('language','en');
    } else {
      this.lang = 'EN';
      this.translate.use('jp');
      this.storage.set('language','jp');
    }
  }

  facebook(){
    // const permissions = ['public_profile', 'email'];
    // this.fb.login(permissions)
    // .then((res: FacebookLoginResponse) => {
    //   console.log('Facebook Response', res)
    //   var userId = res.authResponse.userID;

		// 	//Getting name and gender properties
		// 	this.fb.api("/me?fields=name,email", permissions)
    //     .then(user =>{
    //       user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
    //       console.log('USER', user);
    //       var socialUser = {
    //         name: user.name,
    //         user_id: user.name,
    //         email: user.email,
    //         avatar: user.picture,
    //         onesignal_id: this.player_id,
    //         mobile: Math.floor(Date.now() / 1000)
    //       };

    //       this.socialLogin(socialUser);
    //     }, err => {
    //       console.log('Facebook Error', err)
    //     })
    //   })
    // .catch(e => console.log('Error logging into Facebook', e));
  }

  google(){
    this.googlePlus.getSigningCertificateFingerprint()
      .then(fp => {
        console.log('GOOGLE FP', fp)
      })
      .catch(err => {
        console.log('Google Error', err);
      })

      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '696273358246-fdkil7tpab642c2l0pndcb8l0bvs6qk2.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
        .then(user =>{
          console.log('Google User', user);
        }, err =>{
          console.log('Google Error', err);
        })
        .catch(err => {
          console.log('Google Error', err);
        })
  }

  socialLogin(userData){
    this.loader.presentLoading();
    this.userService.socialLogin(userData)
      .subscribe(res => {
        this.loader.dismiss();
        console.log(res);
        if(res['login'] == true){
          this.authService.socialLogin(res)
            .then(user => {
              if(user == true)

              this.router.navigate(['home/tabs/tab1']);
            })
        }
        else {
          this.authService.socialLogin(res['user'])
            .then(user => {
              if(user == true)
              this.router.navigate(['home/tabs/tab1']);
            })
        }
      });
  }

}
