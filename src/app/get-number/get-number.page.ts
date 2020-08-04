import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicTelInputModule } from 'ionic-tel-input';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';
import { UserService } from '../shareduser/user.service';
import { Platform, ToastController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { StorageService } from '../services/storage.service';

// declare var SMSReceive: any;

@Component({
  selector: 'app-get-number',
  templateUrl: './get-number.page.html',
  styleUrls: ['./get-number.page.scss'],
})
export class GetNumberPage implements OnInit {
  lang: any;
  OTP: any = [];
  generatedOTP: Number;
  OTPmessage = '';
  separateDialCode = true;
  error: any;
  mobile_number: any;
  entered_number: any;
  otpError = false;
  entered: Boolean = false;
  player_id: string;

  constructor(
    private storage: Storage,
    public translate: TranslateService,
    public router: Router,
    public authService: AuthService,
    public loader: LoaderService,
    public userService: UserService,
    private ref: ChangeDetectorRef,
    private platform: Platform,
    private oneSignal: OneSignal,
    private toastController: ToastController,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.storage.get('language')
    .then(lang => {
      if (lang) {
        console.log(lang);
        if (lang == 'en') {
          this.lang = 'JP';
        } else {
          this.lang = 'EN';
        }
      } else {
        this.storage.set('language', 'en');
      }
    });
    this.oneSignal.getIds().then((data) => {
      this.player_id = data.userId;
    });
  }

  generateOTP() {
    this.generatedOTP = Math.floor(1000 + Math.random() * 9000);
    this.sendOTP();
  }

  sendOTP() {
    let body = {
      otp: this.generatedOTP,
      mobile_number: this.entered_number
    };
    console.log(this.generatedOTP);
    // this.start()
    //   .then(started => {
        // if(started == true)
    this.userService.generateOTP(body).subscribe((res: any) => {
            console.log(res);
            // Stop Listening after 2 minutes
            setTimeout(() => {
              this.OTPmessage = 'In Case you have not recieved the SMS due to Twilio issue, the OTP is ' + this.generatedOTP;
              this.ref.detectChanges();
            }, 15000);
            setTimeout(() => {
              this.stop();
            }, 120000);
          },
          async err => {
            const toast = await this.toastController.create({ message: 'res', duration: 3000, position: 'bottom' });
            toast.present();
            this.ref.detectChanges();
          });
      // });
  }

  submitMobile() {
    console.log(this.mobile_number);
    this.entered_number = this.mobile_number;
    this.generateOTP();
  }

  submitOTP() {

  }

  toggleLang() {
    console.log('clicked');
    if (this.lang === 'EN') {
      this.lang = 'JP';
      this.translate.use('en');
      this.storage.set('language', 'en');
    } else {
      this.lang = 'EN';
      this.translate.use('jp');
      this.storage.set('language', 'jp');
    }
  }

  start() {
    // return new Promise((resolve, reject) => {
    //   if (this.platform.is('cordova')) {
    //     SMSReceive.startWatch(
    //       () => {
    //         resolve(true);
    //         document.addEventListener('onSMSArrive', (e: any) => {
    //           var IncomingSMS = e.data;
    //           console.log('INCOMING SMS', IncomingSMS);
    //           this.processSMS(IncomingSMS);
    //         });
    //       },
    //       (err) => { console.log('watch start failed'); reject(err) }
    //     )
    //   }
    // });
  }

  stop() {
  //   SMSReceive.stopWatch(
  //     () => { console.log('watch stopped') },
  //     () => { console.log('watch stop failed') }
  //   )
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    if (message && message.indexOf('B-Box') != -1) {
      console.log(message);
      this.OTP = data.body.slice(message.length - 4, message.length);
      this.ref.detectChanges();
      console.log(this.OTP);
      this.OTPmessage = 'OTP received. Proceed to register';
      this.stop();
      this.checkOTP();
    }
  }

  getNumber(number) {
    this.mobile_number = number;
  }

  hasError(state) {
    console.log(state);
    this.error = state;
  }

  telInputObject($event) {
    console.log($event);
  }

  onCountryChange($event) {
    console.log($event);
  }

  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      this.entered = true;
      this.checkOTP();
      return 0;
    }
  }

  checkOTP() {
    console.log('CHECKED OTP');
    console.log(this.OTP);
    let otpEntered = '';
    if (this.entered == true) {
      this.OTP.forEach(element => {
        otpEntered += element;
      });
    } else {
      otpEntered = this.OTP;
    }
    this.entered = false;
    console.log(otpEntered);
    if (otpEntered == this.generatedOTP.toString()) {
      console.log('Matches');
      this.loader.presentLoading();
      // check with API if user exists with that phone number
      this.userService.checkMobileNumber({mobile: this.entered_number, onesignal_id: this.player_id})
        .subscribe(( res: any) => {
        this.loader.dismiss();
        this.ref.detectChanges();
        console.log(res);
        if ( res.login == 1) {
          this.storage.set('subscribers', res.response.subscriber)
          .then(subbed => {
            console.log(subbed);
            this.authService.login(res.response).then(res => {
              if (res == true) {
                this.router.navigateByUrl('home');
              }
            });
          });
        } else {
          this.storage.set('temporary_mobile_number', this.entered_number);
          this.router.navigateByUrl('register', this.entered_number);
        }
      });
    } else {
      console.log('Not Matches');
      this.otpError = true;
    }
  }

}
