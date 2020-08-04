import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { IContactFindOptions, Contact, IContactField, ContactFieldType, Contacts } from '@ionic-native/contacts/ngx';
import { UserService } from '../shareduser/user.service';
import { Storage } from '@ionic/storage';
import { GroupService } from '../shared/group.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ContactsService } from '../services/contacts.service';
import { Location } from '@angular/common';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  searching: Boolean = false;
  searchTerm: any;
  allContacts: any;
  localContacts: any = [];
  avatarArray:any = [];
  user_id: String;
  userArray: any = [];
  constructor(
    private platform: Platform,
    private contacts: Contacts,
    private userService: UserService,
    private storage: Storage,
    private groupService: GroupService,
    private router: Router,
    private loader: LoaderService,
    private ref: ChangeDetectorRef,
    public translate: TranslateService,
    private toastController: ToastController,
    private contactsService: ContactsService,
    private location: Location,
    private storageService: StorageService,
    private alertController: AlertController
  ) {
    this.storage.get('id').then((val) => {
      this.user_id = val
    });
  }

  ngOnInit() {
    if(this.platform.is('cordova')){
      var contactsData:any = this.contactsService.contactsData();
      console.log(contactsData);
      this.avatarArray = contactsData.avatarArray;
      this.allContacts = contactsData.allContacts;
    }
    else{
      this.allContacts = this.contactsService.getDemoUsers();
    }
  }

  

  checkAndCreateGroup(id, name) {
    this.loader.presentLoading();
    console.log('Clicked and ID', id);
    var body = {
      members: [id, this.user_id]
    }
    this.groupService.checkExists(body)
    .subscribe((check: any) => {
      console.log(check);
      this.loader.dismiss();
      this.ref.detectChanges();
      console.log('CHECk', check)
      if(check.blocked && check.user == this.user_id){
        this.deleteAlert(id, name);
      }
      else if(check.blocked && check.user != this.user_id){
        this.showToast("The User has blocked you.")
        // this.showToast("You have blocked this user. Kindly remove him from your Blocked List to continue.");
      }
      else if(check.exists){
        this.router.navigate(['group-chat', check.response[0]._id]);
      }
      else {
        this.loader.presentLoading();
        this.userArray[0] = { memberid : this.user_id, accepted: true, admin: true };
        this.userArray[1] = { memberid : id, accepted: false, admin: false };
        var empty_group = {
          name: "Personal Group",
          description: "No Description"
        }
        this.groupService.postGroup(empty_group).subscribe((res: any) => {
          console.log(res)
          this.userService.putUser({members: this.userArray},res._id).subscribe((res1) => {
            this.router.navigate(['group-chat', res._id]);
            this.loader.dismiss();
            this.ref.detectChanges();
            this.showToast();
            });

        }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
      }
    },
      err => { this.loader.dismiss(); this.ref.detectChanges(); }
    )
  }

  async showToast(lang = null) {
    // let value = this.translate.instant('Chat_Created_Successfully', { value: this.lang });
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get("Chat_Created_Successfully",{value: language})
      .subscribe(async (res: any)=>{

        const toast = await this.toastController.create({
          message: lang ? lang : res,
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.ref.detectChanges();
      });
    })
  }
  
  goToInvitePage(){
    this.location.back();
    setTimeout(() => {
      this.router.navigate(['invite-member']);
    }, 400)
  }

  removeBlock(id, name){
    console.log(id);
    var body = {
      user_id: this.user_id,
      blocked_user: id
    }
    console.log(body);
    this.userService.removeFromBlock(body).subscribe(removed => {
      this.showToast("User has been removed from your Block List. Kindly continue to initiate chat with "+ name)
    }, err => console.log(err));
  }

  async deleteAlert(id, name) {
    let value = this.translate.instant(['Block_Chat','Confirm_Block','cancel','Unblock'], { value: 'en' });
    const alert = await this.alertController.create({
      header: "Are you Sure?",
      message: "You have blocked " + name + ". Do you want to remove " + name + " from your Block List?",
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
          text: value.Unblock,
          role: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            this.removeBlock(id, name)
          }
        }
      ]
    });

    await alert.present();
  }
}
