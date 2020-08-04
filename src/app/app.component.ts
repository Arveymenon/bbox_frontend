import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Platform, NavController, AlertController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Tab3Page } from './tab3/tab3.page';
import { Globalization } from '@ionic-native/globalization/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ContactsService } from './services/contacts.service';
import { StorageService } from './services/storage.service';
import { Autostart } from '@ionic-native/autostart/ngx';
import { AudioService } from './services/audio.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ActiveStateService } from './services/active-state.service';
import { BranchIo } from '@ionic-native/branch-io/ngx';
import { LoaderService } from './services/loader.service';
import { GroupService } from './shared/group.service';
import { UserService } from './shareduser/user.service';
// import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';

const TOKEN_KEY = 'access_token';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  recieving_call: Boolean = false;
  callId: any;
  userOnCall = false;
  moved: Boolean = false;
  loggedInRoute = '/home/tabs/tab1';
  noNetwork: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private navController: NavController,
    private storage: Storage,
    private oneSignal: OneSignal,
    private globalization: Globalization,
    private screenOrientation: ScreenOrientation,
    // private dialogs: Dialogs,
    // private backgroundMode: BackgroundMode,
    private alertCtrl: AlertController,
    private contactsService: ContactsService,
    private storageService: StorageService,
    private autostart: Autostart,
    private ref: ChangeDetectorRef,
    private audio: AudioService,
    public events: Events,
    private nativeAudio: NativeAudio,
    private activeState: ActiveStateService,
    private network: Network,
    private branch: BranchIo,
    private loader: LoaderService,
    private groupService: GroupService,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#005DDD');
      // set to landscape
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      // this.backgroundMode.enable();
      // this.autostart.enable();
      this.storageService.firstTimeAppOpened().then(check => {
        if(check){
          this.goToGetNumber();
        }
        else {
          this.authService.checkToken().then(valid => {
            console.log('Returned Value', valid)
            if(valid){
              this.goToHome();
            }
            else{
              this.goToGetNumber();
            }
          })
          .catch(err => console.log('ERROR', err))
        }
      })

      // User on call variable
      // this.events.subscribe('userOnCall', (onCall: boolean, roomId) => {
      //   // user and time are the same arguments passed in `events.publish(user, time)`
      //   console.log('RoomId ', roomId, 'is active -', onCall);
      //   this.userOnCall = onCall;
      // });


      this.globalization.getPreferredLanguage()
        .then(lang => {
          if (lang.value == 'ja') {
            this.translate.setDefaultLang('jp');
          }
          else {
            this.translate.setDefaultLang('en')
          }
          this.storage.get('language')
          .then(lang => {
            if(lang){
              this.translate.use(lang)
            }
          })
        })
        .catch(e => console.log(e));
  }).catch(err => console.log('ERROR', err))

  // this.platform.resume.subscribe(resumed => {
  //   this.initBranch();
  // })
}
  initializeOnesignal() {
    this.oneSignal.startInit('f9bcedce-1f87-46df-a595-c75110e062eb', '696273358246');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(data => {
    // do something when notification is received
      let msg = data.payload.body
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      console.log(additionalData);
      // this.showAlert(title, msg, additionalData.task);
      if(additionalData.task == "message")
        console.log('message');
        // this.router.navigate(['home/tabs/tab1']);
      if(additionalData.task == "call"){ 
        this.storageService.setCallType('video')
        this.router.navigate(['receive-incoming-call/' + additionalData._id]);
        this.callId = additionalData._id;
        this.startCall();
      }
      if(additionalData.task == "audio-call"){ 
        this.storageService.setCallType('audio')
        this.router.navigate(['receive-incoming-call/' + additionalData._id]);
        this.callId = additionalData._id;
        this.startCall();
      }
      // this.dialogs.alert('Hello world')
      //   .then(() => console.log('Dialog dismissed'))
      //   .catch(e => console.log('Error displaying dialog', e));
      // alert('Hello World');
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      let additionalData = data.notification.payload.additionalData;
      console.log(additionalData);
      // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
      // this.dialogs.alert('Hello world')
      //   .then(() => console.log('Dialog dismissed'))
      //   .catch(e => console.log('Error displaying dialog', e));
      // alert('Hello World');
      if(additionalData.task == "message")
        console.log('message');
        if(additionalData.subscriber == false)
          this.router.navigate(['group-chat/' + additionalData.group ]);
        else
          this.router.navigate(['group-chat-admin/' + additionalData.group ]);
      if(additionalData.task == "call"){ 
        this.storageService.setCallType('video')
        this.router.navigate(['receive-incoming-call/' + additionalData._id]);
        this.callId = additionalData._id;
        this.startCall();
      }
      if(additionalData.task == "audio-call"){ 
        this.storageService.setCallType('audio')
        this.router.navigate(['receive-incoming-call/' + additionalData._id]);
        this.callId = additionalData._id;
        this.startCall();
      }
      
    });

    this.oneSignal.endInit();

    this.oneSignal.getIds().then((data)=>{
      this.storageService.setToken(data.pushToken);
    })
  }

  initApp(){
    console.log('Init App');
    this.splashScreen.hide();
    this.initializeOnesignal();
    this.initAudios();
    this.listenToAuth();
    this.listenToNetwork();
    this.initBranch();
  }

  startCall() {
    // this.recieving_call = true;
    this.ref.detectChanges();
    console.log('VALUE CHANGED');
    this.waitForCallEnd();
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }

  waitForCallEnd(){
    setTimeout(()=> {
      this.recieving_call = false;
      this.ref.detectChanges();
      console.log('VALUE CHANGED', this.recieving_call);
    }, 30000)
  }

  joinCall() {
    this.router.navigate(['receive-incoming-call/' + this.callId]);
  }

  initAudios(){
    console.log('INIT AUDIO');
    this.audio.preload('calling-tone', 'assets/audio/calling-tone.mp3');
    this.audio.preload('call-ended-tone', 'assets/audio/call-ended-tone.mp3');
    this.audio.preload('alert', 'assets/audio/alert.wav');
  }

  goToHome(){
    console.log('Going Home')
    if (this.platform.is('cordova')){
      this.contactsService.setUserId().then(user => {
        this.contactsService.saveContacts().then(saved => {
          this.contactsService.setContacts().then(set => {
            console.log("user is logged in");
            this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
              this.initApp()
            })
            .catch(e => console.log(e));
          });
        });
      });
    }
    else {
      this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
        this.initApp()
      })
    }
  }

  goToGetNumber(){
    console.log('Get Number')
    this.navController.navigateRoot('get-number').then(navigated => {
      this.initApp()
    })
    .catch(e => console.log(e));
  }

  listenToAuth(){
    this.authService.authenticationState.subscribe(state => {
      if (state == true && !this.activeState.is(this.loggedInRoute)) {
        console.log('AUTH STATE TRUE', state);
        this.goToHome();
      } 
      if(state == false) {
        console.log('AUTH STATE', state);
        this.navController.navigateRoot('get-number').then(navigated => {
          // this.initApp()
        })
      }
    });
  }

  listenToNetwork(){
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.noNetwork = true;
      disconnectSubscription.unsubscribe();
      this.waitForReconnection();
    });
  }

  waitForReconnection(){
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.noNetwork = false;
      connectSubscription.unsubscribe();
      this.listenToNetwork();
    });
  }

  initBranch(){
    if (!this.platform.is("cordova")) {
      return;
    }
    this.branch.setDebug(true);
    this.branch.initSession().then(data => {
      console.log('BRANCH DATA', data);
      if (data["+clicked_branch_link"]) {
        // read deep link data on click
        console.log("Deep Link Data", data);
        console.log(JSON.stringify(data));
        if(data['$deeplink_path']){
          var path = data['$deeplink_path'];
          let pathSplit = path.split('/');
          this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
            if(pathSplit[0] == 'user'){
              this.checkChat(pathSplit[1]);
            } 
            else {
              this.joinGroup(pathSplit[1]);
            }
          })
        }
      }
    });
    this.branch.getFirstReferringParams().then(data => {
      console.log('Referring Params', data);
    })
  }

  checkChat(id){
    this.loader.presentLoading();
    console.log('Clicked and ID', id);
    var user_id = this.contactsService.getUserId();
    var body = {
      members: [id, user_id]
    }
    this.groupService.checkExists(body)
    .subscribe((check: any) => {
      this.loader.dismiss();
      this.ref.detectChanges();
      console.log('CHECk', check)
      if(check.exists){
        this.router.navigate(['group-chat', check.response[0]._id]);
      }
      else {
        this.loader.presentLoading();
        var userArray = [];
        userArray[0] = { memberid : user_id, accepted: true, admin: true };
        userArray[1] = { memberid : id, accepted: false, admin: false };
        var empty_group = {
          name: "Personal Group",
          description: "No Description"
        }
        this.groupService.postGroup(empty_group).subscribe((res: any) => {
          console.log(res)
          this.userService.putUser({members: userArray},res._id).subscribe((res1) => {
            this.router.navigate(['group-chat', res._id]);
            this.loader.dismiss();
            this.ref.detectChanges();
            });

        }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
      }
    },
      err => { this.loader.dismiss(); this.ref.detectChanges(); }
    )
  }

  joinGroup(id){
    this.loader.presentLoading();
    console.log('Clicked and ID', id);
    var data = {
      id: id,
      member: this.contactsService.getUserId()
    }
    console.log(data);
    this.groupService.checkMember(data).subscribe((res: any) => {
      console.log("RESULT", res);
      if(res.error == false){
        this.router.navigate(['group-chat-admin', res.data._id]);
        this.loader.dismiss();
        this.ref.detectChanges();
      }
    },
    err => { this.loader.dismiss(); this.ref.detectChanges(); });
  }
}

