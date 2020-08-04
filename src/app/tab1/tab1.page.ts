import { Component , OnInit, ChangeDetectorRef } from '@angular/core';

import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { StorageService } from '../services/storage.service';
import { ContactsService } from '../services/contacts.service';
import { Socket } from 'ngx-socket-io';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [GroupService]
})
export class Tab1Page implements OnInit {
  userArray: Array<{id: string, name: String , chats: [] , members: []}> = [];
  idval='';
  routerSubscription: any;
  name: String;
  groupCount: any = [];
  loadingGroups = true;
  data: any = [];
  segment = 'personal';
  subscribers: any;
  userId: any;

  constructor(public groupService: GroupService, private router: Router, private storage: Storage, private ref: ChangeDetectorRef,
              public loader: LoaderService, private storageService: StorageService, private contactsService: ContactsService,
              private socket: Socket, public translate: TranslateService, public alertController: AlertController,
              public toastCtrl: ToastController) { }
  ngOnInit() {


    this.loadGroups();
    this.routerWatch();
    this.storageService.fetchSubscriberStatus()
    .then(fetched => {
      let subValue = this.storageService.getSubscriberStatus();
      console.log('SUBSCRIBER', subValue);
      if (typeof subValue != 'undefined') {
        this.subscribers = subValue;
      } else {
        this.subscribers = this.storageService.setSubscriberStatus(false);
      }
    });
    this.socket.connect();
    this.storage.get('id').then((userId: any) => {
      this.userId = userId;
      this.socket.fromEvent('notify-' + userId).subscribe((message: any) => {
        console.log(message);
        this.loadGroups();
      });
    });
  }

  segmentChanged($event) {
    console.log($event);
    this.segment = $event.detail.value;
  }

  onClickDetails(id, subscriber) {
    subscriber ? this.router.navigate(['group-chat-admin', id]) : this.router.navigate(['group-chat', id]);
  }

  sharedvalue() {

  }

  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/home/tabs/tab1') {
            this.loadGroups();
            this.ref.detectChanges();
          }
        }
      }
    );
  }

  createGroup(type) {
    this.storageService.setGroupType(type);
    this.router.navigate(['create-group']);
  }

  createPersonal() {
    this.router.navigateByUrl('/contact-list');
  }

  loadGroups() {
    console.log('loading groups');
    // this.loadingGroups = true;
    this.storage.get('id').then((val) => {
      this.idval =  val;

      this.groupService.getGroupList(val).subscribe((res: any) => {
        console.log('Response', res);
        let result: any = res; this.data = res;
        console.log(result.groups);
        this.groupService.groups = result.groups;
        this.groupCount = result.groupsCount;
        let subscribers = [];
        if (result.groups && result.groups.length) {
          this.groupService.groups.forEach(group => {
            if (group.members.length == 2) {
                group.name = this.contactsService.getContactNameByMobile(group.mobile, group.mobile);

                console.log('CHANGED NAME', group);
            }
          });
        }
        if (this.loadingGroups == true) {
          this.loadingGroups = false;
        }
        this.subscribers = this.storageService.getSubscriberStatus();
        if (this.subscribers == false) {
          this.segment = 'personal';
        }
        console.log('SUBSCRIBERS', this.subscribers);
      }, err => {
         {console.log('SOME ERROR OCCURED', err);}
      });

    });

    this.storage.get('name').then((val) => {
      this.name =  val;
    });

  }

  ionViewDidLeave() {
    document.getElementById('fab-btn').classList.remove('fab-button-close-active');
    document.getElementById('fab-list').classList.remove('fab-list-active');
    document.getElementById('fab-btn1').classList.remove('fab-button-show');
    document.getElementById('fab-btn2').classList.remove('fab-button-show');
    document.getElementById('fab-btn3').classList.remove('fab-button-show');
  }

  ionPageWillLeave() {
      this.routerSubscription.unsubscribe();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.loadGroups();
    event.target.complete();
  }

  getCount(id) {
    const group = this.groupCount.filter(m => m._id == id);
    // console.log('NEEDLE', group);
    if (group.length != 0) {
      return group[0].count.length;
    } else {
      return 0;
    }
  }

  getLastChat(chats, type) {
    if (chats.length != 0) {
      let chat = chats[chats.length - 1];
      return typeof chat.file != 'undefined' ? chat.attachment : chat.message;
    } else {
      return 'New ' + type + ' Created';
    }

  }

  getLastTime(chats) {
    if (chats.length != 0) {
      let chat = chats[chats.length - 1];
      return typeof chat.chattime;
    } else {
      return '';
    }
  }

  async deleteAlert(id) {
    let value = this.translate.instant(['Block_Chat','Confirm_Block','cancel','Block'], { value: 'en' });
    const alert = await this.alertController.create({
      header: value.Block_Chat,
      message: value.Confirm_Block,
      buttons: [
        {
          text: value.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            // this.longpressclass[itt] = "message-bubble-received-flex";
          }
        }, {
          text: value.Block,
          role: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteChat(id)
            .then(res => {
              this.presentToast("The chatroom has been blocked");
              this.loadGroups();
            })
            .catch(err => {console.log(err)});
          }
        }
      ]
    });

    await alert.present();
  }

  deleteChat(id){
    return new Promise((resolve, reject) => {
      var body = {
        user_id: this.userId
      }
      this.groupService.deleteChatRoom(id, body).subscribe(
        deleted => { resolve(true); },
        err => { reject(err) }
      );
    });
  }

  async removeAlert(id) {
    let value = this.translate.instant(['Block_Chat','Confirm_Block','cancel','Block'], { value: 'en' });
    const alert = await this.alertController.create({
      header: value.Block_Chat,
      message: value.Confirm_Block,
      buttons: [
        {
          text: value.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            // this.longpressclass[itt] = "message-bubble-received-flex";
          }
        }, {
          text: value.Block,
          role: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            this.removeFromChat(id)
            .then(res => {
              this.presentToast("The chatroom has been blocked");
              this.loadGroups();
            })
            .catch(err => {console.log(err)});
          }
        }
      ]
    });

    await alert.present();
  }

  removeFromChat(id){
    return new Promise((resolve, reject) => {
      this.groupService.removeMember({member: this.idval}, id).subscribe(
        deleted => { resolve(true); },
        err => { reject(err) }
      );
    });
  }

  async presentToast(text) {
    
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get(text,{value: language})
      .subscribe(async (res: any)=>{

        const toast = await this.toastCtrl.create({
          message: res,
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.ref.detectChanges();
      });
    })
    // const toast = await this.toastCtrl.create({
    //     message: text,
    //     position: 'bottom',
    //     duration: 3000
    // });
    // await toast.present();
  }

}
