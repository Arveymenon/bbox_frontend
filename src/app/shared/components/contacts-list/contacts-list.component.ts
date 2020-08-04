import { Component, OnInit, ViewChild } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName, IContactFindOptions, ContactFieldType, IContactField } from '@ionic-native/contacts/ngx';
import { Platform, ModalController, AlertController, ToastController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  lang: String = 'EN';
  searchTerm: any;
  allContacts: any;
  itemsInPage: 50;
  page: number = 0;
  ANDROID_PERMISSIONS = [
      'android.permission.READ_CONTACTS',
      'android.permission.SEND_SMS',
  ];

  constructor(
    private contacts: Contacts,
    private platform: Platform,
    private modalController: ModalController,
    private sms: SMS,
    private androidPermissions: AndroidPermissions,
    private alertController: AlertController,
    private toastController: ToastController,
    public translate: TranslateService,
    public storage: Storage,
  ) { 
    this.storage.get('language')
    .then(lang => {
      if (lang) {
        this.lang = lang;
      }
    })
   
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova') && this.platform.is('android')) {
        this.checkAndroidPermissions().then(() => {
          this.fetchContactsData();
        });
      }
      else{
        this.fetchContactsData();
      }
    });
  }

  fetchContactsData(){
    this.page = 0;
    this.contacts.find(['displayName', 'phoneNumbers'], {filter: this.searchTerm ? this.searchTerm : '', multiple: true})
        .then(data => {
          console.log("CONTACTS DATA", data);
          console.log(Number(this.itemsInPage) + 1)
          this.allContacts = data.slice(0, 51);
          console.log(this.allContacts);
          this.page++;
        })
        .catch(err => {console.log(err)})
  }

  dismiss(){
    this.modalController.dismiss();
  }

  private onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  sendInviteSMS(contact){
    this.sms.hasPermission() 
      .then(async permission => {
        if(permission == true){
          let value = this.translate.instant(['confirm','Send_Invite_to_contact','OK','cancel','send','Invite_Sent_Successfully'], { value: this.lang });
          const alert = await this.alertController.create({
            header: value.confirm,
            message: value.Send_Invite_to_contact,
            buttons: [
              {
                text: value.cancel,
                role: 'cancel',
                cssClass: 'secondary',
              }, {
                text: value.send,
                handler: async () => {
                  this.sms.send(contact, "Download the Amazing B-Box App to chat with me now!. Click on the following link: https://app.link/to-be-sent");
                  const toast = await this.toastController.create({
                    message: value.Invite_Sent_Successfully,
                    duration: 2000
                  });
                  toast.present();
                }
              }
            ]
          });
      
          await alert.present();
        }
        else{
          if (this.platform.is('cordova') && this.platform.is('android')) {
            this.checkAndroidPermissions();
          }
        }
      })
  }

  public checkAndroidPermissions(): Promise<any> {
        console.log('Requesting Android Permissions');
        return new Promise((resolve, reject) => {
            this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
                .then(() => {
                  const promisesArray: Promise<any> [] = [];
                  this.ANDROID_PERMISSIONS.forEach((permission) => {
                    console.log('Checking ', permission);
                    promisesArray.push(this.androidPermissions.checkPermission(permission));
                  });
                  Promise.all(promisesArray).then((responses) => {
                    let allHasPermissions = true;
                    responses.forEach((response, i) => {
                        allHasPermissions =  response.hasPermission;
                        if (!allHasPermissions) {
                          reject(
                            new Error(
                              'Permissions denied: ' + this.ANDROID_PERMISSIONS[i]
                            ));
                        }
                    });
                    resolve();
                  }).catch((err) => { console.log(err); });
                })
                .catch((err) => console.error('Error requesting permissions: ', err));
        });
    }

    loadData(event) {
        this.contacts.find(['displayName', 'phoneNumbers'], {filter: this.searchTerm ? this.searchTerm : '', multiple: true})
        .then(data => {
          console.log("CONTACTS DATA", data);
          console.log(Number(this.itemsInPage) * Number(this.page+1) + 1)
          this.allContacts = data.slice(0, Number(this.itemsInPage) * Number(this.page+1) + 1);
          this.page++
          event.target.complete();
          event.target.disabled = true;
        })
        .catch(err => {console.log(err)})
    }
}
