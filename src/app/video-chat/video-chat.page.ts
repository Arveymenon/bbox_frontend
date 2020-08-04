import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Platform, ModalController, AlertController, Events } from '@ionic/angular';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserModel } from '../shared/models/user-model';
import { OpenViduLayout, OpenViduLayoutOptions } from '../shared/layout/openvidu-layout';
import { OpenVidu, Session, Stream, StreamEvent, Publisher, SignalOptions, StreamManagerEvent } from 'openvidu-browser';

import { OpenViduService } from '../shared/services/openvidu.service';

import { trigger, keyframes, state, style, transition, animate } from '@angular/animations';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StreamComponent } from '../shared/components/stream/stream.component';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { ContactsService } from '../services/contacts.service';
import { GroupService } from '../shared/group.service';
import { AudioService } from '../services/audio.service';
declare var cordova;

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.page.html',
  styleUrls: ['./video-chat.page.scss'],
  animations: [
        trigger('slideLeftRight', [
            state(
                'in',
                style({ 
                    transform: 'translateX(0px)',
                }),
            ),
            state(
                'out',
                style({
                    transform: 'translateX(100px)',
                }),
            ),
            transition('in => out', animate('200ms', keyframes([style({ transform: 'translateX(100px)', display: 'none' })]))),
            transition('out => in', animate('200ms', keyframes([style({ transform: 'translateX(0px)'})]))),
        ]),
        trigger('slideLeftRightChat', [
            state(
                'in',
                style({
                    transform: 'translateX(0px)',
                }),
            ),
            state(
                'out',
                style({
                    transform: 'translateX(100px)',
                }),
            ),
            transition('in => out', animate('200ms', keyframes([style({ transform: 'translateX(100px)', display: 'none' })]))),
            transition('out => in', animate('200ms', keyframes([style({ transform: 'translateX(0px)' })]))),
        ]),
        trigger('slideTopBottom', [
            state(
                'in',
                style({
                    transform: 'translateY(0px)',
                }),
            ),
            state(
                'out',
                style({
                    transform: 'translateY(100px)',
                }),
            ),
            transition('in => out', animate('200ms', keyframes([style({ transform: 'translateY(100px)', display: 'none' })]))),
            transition('out => in', animate('200ms', keyframes([style({ transform: 'translateY(0px)'})]))),
        ]),
    ],
})
export class VideoChatPage implements OnInit, OnDestroy {
    lang: String = 'EN';
  // Constants
  BIG_ELEMENT_CLASS = 'OV_big';

  buttonsVisibility = 'in';
  chatNotification = 'in';
  cameraBtnColor = 'light';
  camBtnColor = 'light';
  camBtnIcon = 'videocam';
  micBtnColor = 'light';
  micBtnIcon = 'md-mic-off';
  chatBtnColor = 'light';
  bigElement: HTMLElement;
  messageReceived = false;
  messageList: { connectionId: string; message: string; userAvatar: string }[] = [];
  modalIsPresented = false;
  setUpModalIsPresented = true;
  videoDevices: any[] = [];
  audioDevice: any; 
  audioDevices: any[] = [];
  speakerphone = false;

  OV: OpenVidu;
  @ViewChild('mainStream', {static: false}) mainStream: ElementRef;
  session: Session;
  openviduLayout: OpenViduLayout;
  openviduLayoutOptions: OpenViduLayoutOptions;
  mySessionId: string;
  group_data: any;
  myUserName: string;
  localUser: UserModel;
  remoteUsers: UserModel[];
  resizeTimeout;

  timing: any = 'Connecting...';
  timer: Boolean = false;
  call_started: Boolean = false;
  ticks= 0;
  sub: Subscription;
    
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

  @ViewChildren('streamComponentRemotes') streamComponentRemotes: QueryList<StreamComponent>;
  @ViewChild('streamComponentLocal', {static: false}) streamComponentLocal: StreamComponent;

  constructor(
        public platform: Platform,
        private router: Router,
        private route: ActivatedRoute,
        private openViduSrv: OpenViduService,
        public modalController: ModalController,
        private androidPermissions: AndroidPermissions,
        public alertController: AlertController,
        private storage: Storage,
        private location: Location,
        public translate: TranslateService,
        private contactsService: ContactsService,
        private groupService: GroupService,
        private audio: AudioService,
        public events: Events
    ) {}

    @HostListener('window:beforeunload')
    beforeunloadHandler() {
        this.exitSession();
    }

    @HostListener('window:resize', ['$event'])
    sizeChange(event) {
        clearTimeout(this.resizeTimeout);
        this.updateLayout();
    }

    @HostListener('document:ionBackButton', ['$event'])
    overrideHardwareBackAction(event: any) {
      console.log('back button');
      this.confirmExit();
      event.detail.register(100, async () => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      });
    }

    async ngOnInit() {
        this.platform.ready().then(() => {
            this.storage.get('language')
            .then(lang => {
                if (lang) {
                    this.lang = lang;
                }
            });
            this.route.params.subscribe(params => {
                this.mySessionId = params['id']; 
                console.log(this.mySessionId)
                this.storage.get('id')
                .then(user_id => {
                    if (user_id) {
                        this.groupService.getGroupDetails(this.mySessionId, user_id)
                        .then(res => {
                            console.log('GROUP DATA', res);
                            this.group_data = res;
                            if(this.group_data.members.length == 2){
                                let member = this.group_data.memberData.find(o=>o._id != user_id)
                                var contact = this.contactsService.getContactName(member._id);
                                this.group_data.name = contact ? contact : member.mobile; 
                            }
                        }).catch(err => console.log('GROUP DATA ERROR', err));
                    }
                    
                })
                
                // alert(this.id);
            }); 
            // this.route.queryParams.subscribe(params => {
            //     if (params && params.special) {
            //         this.group_data = JSON.parse(params.special).data
            //         console.log('GROUP DATA', this.group_data)
            //         if(this.group_data.members.length == 2){
            //             console.log('personal_chat');
            //             this.storage.get('id').then((user_id: any)=>{
            //                 let member = this.group_data.memberData.find(o=>o._id != user_id)
            //                 console.log(member);
            //                 var contact = this.contactsService.getContactName(member._id);
            //                 this.group_data.name = contact ? contact : member.name; 
            //             });
            //         }
            //     }
            // })
            this.OV = new OpenVidu();
            this.localUser = new UserModel();
            if (this.platform.is('cordova') && this.platform.is('android')) {
                this.openViduSrv.checkAndroidPermissions().then(() => {
                    navigator.mediaDevices.ondevicechange = (ev) => { this.initDevices(); };
                    this.initPublisher().then(() => {this.setUpModalIsPresented = false; this.initDevices()}).catch((error) => console.log(error));
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                this.initPublisher().then(() => {this.setUpModalIsPresented = false; this.initDevices()}).catch((error) => console.log(error));
            }
        }); 
    }
    
    async confirmExit() {
        const alert = await this.alertController.create({
            header: 'Are You Sure You Want To Exit This Call?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Exit',
                    handler: () => {
                        console.log('Quit Call');
                        this.exitSession();
                    }
                }
            ]
        });
        await alert.present();
    }

  async ionViewDidEnter() {
    //   // Open modal to setting up the session
    //   const modal = await this.modalController.create({
    //     component: SettingUpModalComponent,
    //     showBackdrop: false,
    //     componentProps: {}
    //   });

    //   modal.onWillDismiss().then((data: any) => {
    //       if (data.data && data.data.user) {
    //           this.localUser = data.data.user;
    //           this.videoDevices = data.data.videoDevices;
    //           this.setUpModalIsPresented = false;
    //           this.initApp();
    //       } else {
    //           // Go back
    //             this.router.navigate(['/']);    
    //       }
    //   });
    //   return await modal.present().then(() => {
    //       this.refreshVideos();
    //   });
    }

    initApp() {
        console.log(this.localUser);
        console.log(this.videoDevices);
        this.setUpModalIsPresented;
        this.localUser.setType('local');
        this.checkAudioButton();
        this.checkVideoButton();
        this.remoteUsers = [];
        this.generateParticipantInfo();
        this.openviduLayout = new OpenViduLayout();
        this.openviduLayoutOptions = {
            maxRatio: 3 / 2, // The narrowest ratio that will be used (default 2x3)
            minRatio: 9 / 16, // The widest ratio that will be used (default 16x9)
            fixedRatio: false /* If this is true then the aspect ratio of the video is maintained
      and minRatio and maxRatio are ignored (default false)*/,
            bigClass: 'OV_big', // The class to add to elements that should be sized bigger
            bigPercentage: 0.82, // The maximum percentage of space the big ones should take up
            bigFixedRatio: false, // fixedRatio for the big ones
            bigMaxRatio: 3 / 2, // The narrowest ratio to use for the big elements (default 2x3)
            bigMinRatio: 9 / 16, // The widest ratio to use for the big elements (default 16x9)
            bigFirst: false, // Whether to place the big one in the top left (true) or bottom right
            animate: true, // Whether you want to animate the transitions
        };
        this.openviduLayout.initLayoutContainer(document.getElementById('layout'), this.openviduLayoutOptions);
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            setInterval(() => {
                this.updateLayout();
            }, 1000);
        }

        this.joinToSession();
        this.audio.playOnLoop('calling-tone');
    }

    ngOnDestroy() {
        this.exitSession();
    }

    ionViewWillLeave(){
        this.exitSession();
    }

    joinToSession() {
        this.OV = new OpenVidu();
        this.session = this.OV.initSession();
        this.subscribeToUserChanged();
        this.subscribeToStreamCreated();
        this.subscribedToStreamDestroyed();
        // this.subscribedToChat();
        this.connectToSession();

        // this.startTimer();
        //originalvikas
        // let value = this.translate.instant(['Connecting','Call_Timed_Out'], { value: this.lang });
        let value = this.translate.instant(['Connecting','Call_Timed_Out'], { value: this.lang })
        this.timing = value.Connecting;
        this.timer = true;
        setTimeout(() => {
            if(this.call_started == false){
                this.events.publish('userOnCall', {onCall: false, roomId: this.group_data._id});
                this.timing = value.Call_Timed_Out;
                this.audio.playOnLoop('call-ended-tone');
                this.timer = false
            }
        }, 30000)
        setTimeout(() => {
            if(this.call_started == false){
                this.events.publish('userOnCall', {onCall: false, roomId: this.group_data._id});
                this.exitSession();
            }
        }, 32500)
    }

    exitSession() {
        if (this.session) {
            this.session.disconnect();
        }
        this.audio.stop('calling-tone');
        this.audio.stop('call-ended-tone');
        this.remoteUsers = [];
        this.session = null;
        this.localUser = null;
        this.OV = null;
        this.openviduLayout = null;
        this.sub ? this.sub.unsubscribe() : false;
        this.router.navigate(['/home/tabs/tab1']);
    }

    resetVideoSize() {
        const element = document.querySelector('.' + this.BIG_ELEMENT_CLASS);
        if (element) {
            element.classList.remove(this.BIG_ELEMENT_CLASS);
            this.bigElement = undefined;
            this.updateLayout();
        }
    }

    checkVideoButton() {
        if (this.localUser.isVideoActive()) {
            this.camBtnIcon = 'videocam';
            this.camBtnColor = 'light';
        } else {
            this.camBtnIcon = 'eye-off';
            this.camBtnColor = 'primary';
        }
    }

    checkAudioButton() {
        if (this.localUser.isAudioActive()) {
            this.micBtnIcon = 'mic';
            this.micBtnColor = 'primary';
        } else {
            this.micBtnIcon = 'mic-off';
            this.micBtnColor = 'light'; 
        }
    }

    micStatusChanged(): void {
        this.localUser.setAudioActive(!this.localUser.getStreamManager().stream.audioActive);
        (<Publisher>this.localUser.getStreamManager()).publishAudio(this.localUser.isAudioActive());
        this.checkAudioButton();
    }

    camStatusChanged(): void {
        this.localUser.setVideoActive(!this.localUser.getStreamManager().stream.videoActive);
        (<Publisher>this.localUser.getStreamManager()).publishVideo(this.localUser.isVideoActive());
        this.checkVideoButton();
    }

    toggleCamera() {
        if (this.platform.is('cordova')) {
            if (this.videoDevices && this.videoDevices.length > 0) {
                let videoSource: any;
                // Select the first different device
                videoSource = this.videoDevices.filter((device) => device.deviceId !== this.localUser.getVideoSource())[0];
                console.log('SETTING DEVICE: ', videoSource);
                this.localUser.setVideoSource(videoSource.deviceId);

                this.localUser.setIsBackCamera(!this.localUser.isBackCamera());
                this.session.unpublish(<Publisher>this.localUser.getStreamManager());

                const publisher = this.OV.initPublisher(undefined, {
                    videoSource: this.localUser.getVideoSource(),
                    publishAudio: this.localUser.isVideoActive(),
                    publishVideo: this.localUser.isVideoActive(),
                    mirror: !this.localUser.isBackCamera()
                });

                this.cameraBtnColor = this.cameraBtnColor === 'light' ? 'primary' : 'light';
                this.localUser.setStreamManager(null);
                setTimeout(() => {
                    this.localUser.setStreamManager(publisher);
                    this.updateLayout();
                    this.session.publish(publisher);
                });

            }
        }
    }

    public toggleButtons() {
        this.buttonsVisibility = this.buttonsVisibility === 'in' ? 'out' : 'in';
        this.chatNotification = this.buttonsVisibility;
    }

    public toggleButtonsOrEnlargeStream(event) {
        event.preventDefault();
        event.stopPropagation();
        const path = event.path || event.composedPath();
        const element: HTMLElement = path.filter((e: HTMLElement) => e.className && e.className.includes('OT_root'))[0];
        if (this.bigElement && element === this.bigElement) {
            this.toggleButtons();
        } else if (this.bigElement !== element) {
            if (this.bigElement) {
                this.bigElement.classList.remove(this.BIG_ELEMENT_CLASS);
            } else {
                this.toggleButtons();
            }
            element.classList.add(this.BIG_ELEMENT_CLASS);
            this.bigElement = element;
        }
        this.updateLayout();
    }

    private generateParticipantInfo() {
            // this.mySessionId = 'A';
        this.storage.get('name').then((name: any) => {
            this.myUserName = name;
        });
    }

    private deleteRemoteStream(stream: Stream): void {
        const userStream = this.remoteUsers.filter((user: UserModel) => user.getStreamManager().stream === stream)[0];
        const index = this.remoteUsers.indexOf(userStream, 0);
        if (index > -1) {
            this.remoteUsers.splice(index, 1);
        }
    }


    private subscribeToUserChanged() {
        this.session.on('signal:userChanged', (event: any) => {
          const data = JSON.parse(event.data);
          this.remoteUsers.forEach((user: UserModel) => {
            if (user.getConnectionId() === event.from.connectionId) {
              if (data.avatar !== undefined) {
                user.setUserAvatar(data.avatar);
              }
            }
          });
        });
        
      }

    private subscribeToStreamCreated() {
        this.session.on('streamCreated', (event: StreamEvent) => {
            const subscriber = this.session.subscribe(event.stream, undefined);
            subscriber.on('streamPlaying', (e: StreamManagerEvent) => {
                this.updateLayout();
                (<HTMLElement>subscriber.videos[0].video).parentElement.classList.remove('custom-class');
            });
            const newUser = new UserModel();
            newUser.setStreamManager(subscriber);
            newUser.setConnectionId(event.stream.connection.connectionId);
            const nickname = event.stream.connection.data.split('%')[0];
            try {
                newUser.setNickname(JSON.parse(nickname).clientData);
            } catch (err) {
                newUser.setNickname(nickname);
            }
            newUser.setType('remote');
            this.openViduSrv.getRandomAvatar().then((avatar) => {
                newUser.setUserAvatar(avatar);
                this.remoteUsers.push(newUser);
                console.log(this.remoteUsers);
                this.sendSignalUserAvatar(this.localUser);
                // this.startTimer();
                this.call_started = true;
                this.audio.stop('calling-tone');
                this.events.publish('userOnCall', {onCall: true, roomId: this.group_data._id});
                
                console.log('user on call');

            });
            this.buttonsVisibility = 'out';
            this.chatNotification = 'out';
        });
    }

    private subscribedToStreamDestroyed() {
        this.session.on('streamDestroyed', (event: StreamEvent) => {
            this.deleteRemoteStream(event.stream);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.updateLayout();
            }, 20);
            event.preventDefault();
            setTimeout(() => {
                if(!this.remoteUsers.length){
                    this.call_started = false;
                    this.events.publish('userOnCall', {onCall: false, roomId: this.group_data._id});
                    let value = this.translate.instant(['Connecting','Call_Timed_Out'], { value: this.lang })
                    this.timing = value.Call_Timed_Out;
                    this.audio.playOnLoop('call-ended-tone');
                    this.timer = false
                    setTimeout(() => {
                        if(!this.remoteUsers.length){
                            this.exitSession();
                        }
                    }, 2500)
                }
            }, 2000)
        });
    }

    private sendSignalUserAvatar(user: UserModel): void {
        const data = {
          avatar: user.getAvatar(),
        };
        const signalOptions: SignalOptions = {
          data: JSON.stringify(data),
          type: 'userChanged',
        };
        this.session.signal(signalOptions);
      }

    private connectToSession(): void {
        this.openViduSrv
            .getToken(this.mySessionId)
            .then((token) => {
                this.connect(token);
            })
            .catch((error) => {
                console.error('There was an error getting the token:', error.code, error.message);
                this.openAlertError(error.message);
            });
    }

    private connect(token: string): void {
        this.session
            .connect(
                token,
                { clientData: this.myUserName },
            )
            .then(() => {
                this.connectWebCam();
            })
            .catch((error) => {
                console.error('There was an error connecting to the session:', error.code, error.message);
                this.openAlertError(error.message);
            });
    }
    
    private connectWebCam(): void {
        this.localUser.setNickname(this.myUserName);
        this.localUser.setConnectionId(this.session.connection.connectionId);
        this.session.publish(<Publisher>this.localUser.getStreamManager());
        this.localUser.getStreamManager().on('streamPlaying', () => {
            (<HTMLElement>this.localUser.getStreamManager().videos[0].video).parentElement.classList.remove('custom-class');
            this.updateLayout();
        });
        this.openViduSrv.getRandomAvatar().then((avatar) => {
            this.localUser.setUserAvatar(avatar);
            this.sendSignalUserAvatar(this.localUser);
        });
        this.updateLayout();
    }

    private updateLayout() {
        this.resizeTimeout = setTimeout(() => {
            if (this.openviduLayout) {
                this.openviduLayout.updateLayout();
                if(this.remoteUsers.length==0 ||this.remoteUsers.length==1){
                    (<HTMLElement>document.querySelector('#localUser .OT_widget-container.ng-star-inserted')).style.cssText='height: 200px;width: 120px;bottom: 10px;right: 3%;border-radius: 10px;position:fixed; z-index:1;';
                    (<HTMLElement>document.querySelector('#remoteUsers stream-component')).style.cssText="position:fixed;top:0px;height:100%;width:100%";
                }
                if(this.remoteUsers.length == 2){
                    (<HTMLElement>document.querySelector('#localUser .OT_widget-container.ng-star-inserted')).style.cssText='height: 33%;bottom:0px;left:0;position:fixed';
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[0]).style.cssText="position: fixed;bottom: 33%;height: 33%;left: 0;width: 100%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[1]).style.cssText="position: fixed;bottom: 66%;height: 33%;left: 0;width: 100%;";
                }
                if(this.remoteUsers.length == 3){
                    (<HTMLElement>document.querySelector('#localUser .OT_widget-container.ng-star-inserted')).style.cssText='height: 50%;bottom:0px;right:0;position:fixed;width:50%';
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[0]).style.cssText="position: fixed;bottom: 50%;height: 50%;left: 0;width: 50%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[1]).style.cssText="position: fixed;bottom: 50%;height: 50%;left: 50%;width: 50%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[2]).style.cssText="position: fixed;bottom: 0;height: 50%;left: 0;width: 50%;";
                }
                if(this.remoteUsers.length==4){
                    (<HTMLElement>document.querySelector('#localUser .OT_widget-container.ng-star-inserted')).style.cssText='height: 26%;width: 24%;bottom: 34%;right: 38%;border-radius: 10px;position:fixed; z-index:2;';
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[0]).style.cssText="position: fixed;bottom: 50%;height: 50%;left: 0;width: 50%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[1]).style.cssText="position: fixed;bottom: 50%;height: 50%;left: 50%;width: 50%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[2]).style.cssText="position: fixed;bottom: 0;height: 50%;left: 0;width: 50%;";
                    (<HTMLElement>document.querySelectorAll('#remoteUsers stream-component')[3]).style.cssText="position: fixed;bottom: 0;height: 50%;left: 50%;width: 50%;";
                }
                
                if (this.platform.is('cordova') && this.platform.is('ios')) {
                    setTimeout(() => {
                        if (this.streamComponentLocal) {
                            this.streamComponentLocal.videoComponent.applyIosIonicVideoAttributes();
                        }
                        if (this.streamComponentRemotes.length > 0) {
                            this.streamComponentRemotes.forEach((stream: StreamComponent) => {
                                stream.videoComponent.applyIosIonicVideoAttributes();
                            });
                        }
                    }, 250);
                }
            }
        }, 20);
    }

    private refreshVideos() {
        if (this.platform.is('ios') && this.platform.is('cordova')) {
            cordova.plugins.iosrtc.refreshVideos();
        }
    }

    private async openAlertError(message: string) {
        let value = this.translate.instant(['Error_occurred','There_was_an_error_connecting_to_the_session','OK'], { value: this.lang });
        const alert = await this.alertController.create({
            header: value.Error_occurred,
            subHeader: value.There_was_an_error_connecting_to_the_session,
            message: message,
            buttons: ['OK'],
        });
        await alert.present();
    }

    toggleMenu(){
        document.querySelector('#menu-open').classList.toggle('hide');
        document.querySelector('#menu-opened').classList.toggle('hide');
        
      }
    initDevices() {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            console.log("NAVIGATOR DEVICES", devices)
            devices.forEach(device => {
                console.log(device.kind + ": " + device.label +
                            " id = " + device.deviceId);
            });
        })
        this.OV.getDevices().then((devices: any) => {
            console.log("ALL Devices", devices)
            this.audioDevices = devices.filter((device) => device.kind === 'audioinput');
            this.videoDevices = devices.filter((device) => device.kind === 'videoinput');
            if (this.platform.is('cordova')) {
                if (this.platform.is('ios')) {
                    console.log('iOS platform');
                    setTimeout(() => {
                        this.refreshVideos();
                    },1100);
                } else if (this.platform.is('android')) {
                    console.log('Android platform');
                }
                console.log("DEVICES", this.videoDevices);
                // this.localUser.setVideoSource(this.videoDevices.filter((device: any) => device.label.includes('Front'))[0].deviceId);
                this.localUser.setVideoSource(this.videoDevices[0].deviceId)
            }
            this.initApp();
        });
    }

    setAudioDevice(event) {
        console.log('Setting audio device to: ', event.detail.value.label);
        this.audioDevice = event.detail.value;
        const audioSource = this.audioDevice.deviceId === 'None' ? undefined : this.audioDevice.deviceId;
        this.localUser.setAudioActive(!!audioSource);
        this.localUser.setAudioSource(audioSource);
        console.log('AUDIO SOURCE', audioSource);
        if (!!audioSource) {
          this.destroyPublisher();
          this.initPublisher();
        } else {
          this.micOff();
        }
    }

    setVideoDevice(event) {
        console.log('Setting video device to: ', event.detail.value.label);
        const videoSource = event.detail.value.deviceId === 'None' ? undefined : event.detail.value.deviceId;
        this.localUser.setVideoActive(!!videoSource);
        this.localUser.setVideoSource(videoSource);
        console.log('VIDEO SOURCE', videoSource);
        if (!!videoSource) {
            this.destroyPublisher();
            this.initPublisher();
        } else {
            this.camOff();
        }
    }

    camOff() {
        (<Publisher>this.localUser.getStreamManager()).publishVideo(false);

    }

    micOff() {
        (<Publisher>this.localUser.getStreamManager()).publishAudio(false);
    }

    private initPublisher(): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('initialize publisher');
            const device = this.videoDevices.filter((video) =>
                video.deviceId === this.localUser.getVideoSource()
            );

            let isBackCamera = false;
            if (this.platform.is('cordova')) {
                isBackCamera = !!device[0] && device[0].label.includes('Back');
            }
            this.localUser.setIsBackCamera(isBackCamera);

            this.OV.initPublisherAsync(undefined, {
                audioSource: this.localUser.getAudioSource(),
                videoSource: this.localUser.getVideoSource(),
                publishAudio: this.localUser.isAudioActive(),
                publishVideo: this.localUser.isVideoActive(),
                mirror: !this.localUser.isBackCamera()
            })
                .then((publisher: Publisher) => {
                    this.localUser.setStreamManager(publisher);
                    resolve(publisher);
                })
                .catch((error) => reject(error));
        });
    }

    private destroyPublisher() {
        console.log('Destroying publisher...');
        if (this.localUser.getStreamManager() && this.localUser.getStreamManager().stream) {
            this.localUser.getStreamManager().stream.disposeWebRtcPeer();
            this.localUser.getStreamManager().stream.disposeMediaStream();
            this.localUser.setStreamManager(null);
        }
    }

    private startTimer(time = null) {
        this.sub ? this.sub.unsubscribe() : false;
        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;
                
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }
}
