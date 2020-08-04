import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { FacebookLoginResponse, Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UserService } from '../shareduser/user.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;

  name: any;
  player_id: string;
  mobileNumber: any;

//   userid :string = '';
      
// // this will remove whole whitespace from the string    
// trimming_fn(x) {    
//   return x ? x.replace(/\s/g,'') : '';    
// };  
 
  constructor(
    private formBuilder: FormBuilder,
     private authService: AuthService,
     private router: Router,
     private location: Location,
     private navController: NavController,
     private toastController: ToastController,
     private ref: ChangeDetectorRef,
     private oneSignal: OneSignal,
    //  private fb: Facebook,
     private googlePlus: GooglePlus, public userService: UserService,
     private storage: Storage,
     private ngZone: NgZone,
     private loader: LoaderService
     ) {
    this.oneSignal.getIds().then((data)=>{
      this.player_id= data.userId
    })
  }

  ngOnInit() {
    this.storage.get('temporary_mobile_number').then((mobile: any) => {
      this.mobileNumber = mobile;
    })
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetForm(credentialsForm?: NgForm) {
    if (credentialsForm)
    credentialsForm.reset();
   
  }


  onSubmit() {
    if(this.credentialsForm.valid){
      console.log(this.credentialsForm.value)
      var form = this.credentialsForm.value;
      form.onesignal_id = this.player_id;
      // this.loader.presentLoading();
      console.log('FINAL FORM', form)
      this.userService.checkDetails(form).subscribe((res: any)=>{
        console.log(res);
        if(res.error == false){
          let credentials = {
            mobile: this.mobileNumber,
            name: this.credentialsForm.value.name,
            email: this.credentialsForm.value.email
          }
          console.log(credentials);
          this.authService.register(credentials).then((data: any) => {
            console.log('REGISTERED', data);
            this.ref.detectChanges();
            // this.navController.navigateRoot(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
            // this.router.navigate(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
            this.goToHome();
            // this.ngZone.run(async () => {
            //   await this.navController.navigateRoot(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
            // }).then(() => {
            //   this.ref.detectChanges();
            // });
          }, err => {
            console.log('ERROR', err)
          })
        }else{
          this.showToast('Email ID Already Exists');
        }
      })
      // Http call to check users email

      // this.storage.set("register_data", form)
      //   .then(stored => {
      //     this.router.navigate(['get-number']);
      //   })
      // this.authService.register(this.credentialsForm.value).subscribe(res => {
      //   // Call Login to automatically login the new user
      //   // this.resetForm();
      //   this.authService.login(this.credentialsForm.value).subscribe((res) => {
      //     // this.showToast(); 
      //    this.router.navigate(['home/tabs/tab1']);
      //   });
      // });
    } else {
      console.log('invalid form');
      if (!this.credentialsForm.controls.email.valid){
        this.showToast('Kindly Provide A Valid Email ID');
      }
    }
  }

  // async showToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Welcome to Bbox',
  //     duration: 1000,
  //     position: "bottom",
  //   });
  //   toast.present();
  // }
  
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
    //       var socialUser = JSON.stringify({
    //         name: user.name,
    //         email: user.email,
    //         avatar: user.picture,
    //         onesignal_id: this.player_id,
    //         mobile: ''
    //       });

    //       this.socialLogin(socialUser);
    //     }, err => {
    //       console.log('Facebook Error', err)
    //     })
    //   })
    // .catch(e => console.log('Error logging into Facebook', e));
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: "bottom",
    });
    toast.present();
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
    this.userService.socialLogin(userData)
      .subscribe(res => {
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

  goToHome(){
    console.log('Go to Home');
    this.ngZone.run(async () => await this.navController.navigateRoot(['home/tabs/tab1'])).then(() => {
      this.ref.detectChanges();
    });
  }

}
