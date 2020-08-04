import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { UserService } from '../shareduser/user.service';
import { GroupService } from '../shared/group.service';
import { User } from '../shareduser/user.model';
import { Group } from '../shared/group.model';
import { Storage } from '@ionic/storage';
import { LoaderService } from '../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
  providers: [UserService, GroupService, ContactsService]

})
export class AddMemberPage implements OnInit {

  lang: String = 'EN';
  cant_find : any;
  searchQuery: any;
  items = new Array(0);
  public myForm: FormGroup;
  user_id: any;
  userArray: Array<{ memberid: string, accepted: boolean, admin: boolean, nameval: String }> = [];
  contactsData: any;
  constructor(
    public userService: UserService,
    public groupService: GroupService,
    private router: Router,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    public storage: Storage,
    public loader: LoaderService,
    public navCtrl: NavController,
    public translate: TranslateService,
    public location: Location,
    private contactsService: ContactsService
  ) { 
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
    this.cant_find = this.translate.instant('cant find', { value: this.lang });
    console.log(this.cant_find)
    this.contactsData = this.contactsService.contactsData();
    this.userService.users = this.contactsData;
    console.log(this.contactsData)
  }

  id: String = "";  // group id
  sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log(this.id)
      //alert(this.id);
      this.storage.get('id').then((val: any) => {
        this.user_id = val

        this.storage.get('name').then((name: any) => {

          // to check if existing users are there in this group
          //  IF groupService.groups is empty means its a new group ELSE Members Already Exists
        this.groupService.groups = [];
        this.getgroupuser(this.id,val,name);

        console.log(val)
        });
      })

    });



  }

  back() {
    this.groupService.groups = [];
    this.navCtrl.pop();
    this.location.back()
  }

  async addmember(val, name) {
    this.storage.get('language').then(async (language: any)=>{
      console.log(language)
      this.translate.get("Cannot_Add_Same_User_Again",{value: language})
      .subscribe(async (res: any)=>{
      if(this.groupService.groups && this.groupService.groups.length != 0){
        if(this.groupService.groups.findIndex(o => o._id == val) == -1 && this.userArray.findIndex(o => o.memberid == val) == -1){
          this.userArray.push({ memberid: val, accepted: false, admin: false, nameval: name });
        }else{
          const toast = await this.toastController.create({ message: res, duration: 1000, position: "bottom", });
          toast.present();
          this.ref.detectChanges();
        }
      }else{
        console.log(this.userArray.findIndex(o => o.memberid == val));
        console.log(this.userArray)
        if (this.userArray.findIndex(o => o.memberid == val) == -1) {
          this.items.length += 1;
          this.userArray.push({ memberid: val, accepted: false, admin: false, nameval: name });
        } else {
            const toast = await this.toastController.create({ message: res, duration: 1000, position: "bottom", });
            toast.present();
            this.ref.detectChanges();
          }
        }
      });
    })
  }

  removeUser(val, event) {
    console.log(this.userArray.findIndex(o => o.memberid == val.memberid));
    let index = this.userArray.findIndex(o => o.memberid == val.memberid);
    if (index != 0 || this.groupService.groups.length != 0) {
      this.userArray.splice(index, 1)

      //  handle front End
      var currentID = event.target.id.replace('-image', '');
      document.getElementById(currentID + '-container').classList.toggle('individual-overlay');
    }
  }

  async addtogroup() {
    console.log(this.userArray)
    if(this.groupService.groups && this.groupService.groups.length == 0){
      if (this.userArray.length > 2) {
        this.updateGroup();
      } else {
        this.showToast("Kindly_Add_2_or_more_Members_To_Proceed");
      }
    }else{
        if (this.userArray.length > 0) {
          this.updateGroup();
        }
    }
  }

  updateGroup(){
    // this.loader.presentLoading();
    this.userService.putUser({ members: this.userArray }, this.id).subscribe((res) => {
      // this.loader.dismiss();
      // let value = this.translate.instant(['Members_Added_Successfully'], { value: this.lang })
      this.groupService.groups = []
      this.showToast("Members_Added_Successfully");
      this.router.navigate(['home/tabs/tab1']);
      this.ref.detectChanges();
    });
  }

  userGroup() {
    // this.loader.presentLoading();
    this.userService.userGroups(this.userArray, this.id).subscribe((res) => {
      // this.loader.dismiss();
      // this.router.navigate(['home/tabs/tab1']);
    });
  }

  refreshUserList(ev) {
    
    var data = ev.target.value;
    if (data == "") {
      
      this.userService.users = this.contactsData.allContacts;

    } else {
      // this.loader.presentLoading();
      console.log('DATA', data);
      this.userService.users = this.find(this.contactsData.allContacts, data);
      console.log(this.userService.users)
    }
  }

  find(items, text) {
    console.log('items',items)
    text = text.split(' ');
    return items.filter(function(item) {
      return text.every(function(el) {
        return item.content.indexOf(el) > -1;
      });
    });
  }

  selectIndividual(event, ittrator) {
    console.log(ittrator)
    console.log(this.userArray)
    console.log(this.userArray[ittrator])
    this.removeUser(ittrator, event);

  }

  async showToast(msg) {

    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get(msg,{value: language})
      .subscribe(async (res: any)=>{

        const toast = await this.toastController.create({
          message: res,
          duration: 1000,
          position: "bottom",
        });
        toast.present();
      });
    })
  }

  getgroupuser(group_id,user_id,user_name) {
    console.log(group_id,user_id,user_name);
    console.log(this.groupService.groups);
    // this.loader.presentLoading()
    this.groupService.getGroupDetails(group_id,user_id).then((res: any) => {
      // this.loader.dismiss()
      console.log(res)
      if(res._id){
        console.log('no error');
        this.groupService.groups = res['memberData'] as Group[];
        console.log(this.groupService.groups);
      }else{
        //DO NOTIHNG
      }
    }).finally(()=>{
      if(this.userArray.length == 0 && this.groupService.groups.length == 0){
        this.userArray.push({
          memberid: user_id,
          accepted: true,
          admin: true,
          nameval: user_name
        });
      }
    })
    console.log(this.groupService.groups)
    if(!this.groupService.groups || this.groupService.groups.length == 0){
    }
  }

  async delete(userid) {
    if(userid == this.user_id){
      console.log('Cannot Remove The User Him/Herself')
      const toast = await this.toastController.create({ message: 'Cannot Remove The Admin User', duration: 1000, position: "bottom", });
      toast.present();
    }else if(3 <= this.groupService.groups.length){

      // removable condition
      if((3 == this.groupService.groups.length)){
        this.cannotDeleteToast()
      }else{
        this.groupService.removeMember({member: userid}, this.id).subscribe(async (res) => {
          this.groupService.groups.splice(this.groupService.groups.findIndex(o => o._id == userid),1);
          console.log(res);
          const toast = await this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", });
          toast.present();
        });
      }


    }else{
      const toast = await this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", });
      toast.present();
      console.log('Needs Atleast 3 members')
    }
  }

  // removable function
  async cannotDeleteToast(){
    if((this.userArray.length != 0)){
      const toast = await this.toastController.create({ message: 'Kindly Update The Group With Added Users And Then Delete Existing Users', duration: 3000, position: "bottom", });
      toast.present();
    }
    if(this.userArray.length == 0){
      const toast = await this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", });
      toast.present();
    }
  }

  inviteMembers(){
    this.router.navigate(['invite-member']);
  }


}


<?xml version='1.0' encoding='utf-8'?>
<manifest android:hardwareAccelerated="true" android:versionCode="1" android:versionName="0.0.1" package="io.bbox.client" xmlns:android="http://schemas.android.com/apk/res/android">
    <supports-screens android:anyDensity="true" android:largeScreens="true" android:normalScreens="true" android:resizeable="true" android:smallScreens="true" android:xlargeScreens="true" />
    <uses-permission android:name="android.permission.INTERNET" />
    <application android:hardwareAccelerated="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:name="androidx.multidex.MultiDexApplication" android:networkSecurityConfig="@xml/network_security_config" android:supportsRtl="true" android:usesCleartextTraffic="true">
        <activity android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode" android:label="@string/activity_name" android:launchMode="singleTop" android:name="MainActivity" android:theme="@android:style/Theme.DeviceDefault.NoActionBar" android:windowSoftInputMode="adjustResize">
            <intent-filter android:label="@string/launcher_name">
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <provider android:authorities="${applicationId}.provider" android:exported="false" android:grantUriPermissions="true" android:name="org.apache.cordova.camera.FileProvider">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/camera_provider_paths" />
        </provider>
        <activity android:label="@string/multi_app_name" android:name="com.synconset.MultiImageChooserActivity" android:theme="@style/Theme.AppCompat.Light" />
        <receiver android:enabled="true" android:name="nl.xservices.plugins.ShareChooserPendingIntent">
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
            </intent-filter>
        </receiver>
        <provider android:authorities="${applicationId}.sharing.provider" android:exported="false" android:grantUriPermissions="true" android:name="nl.xservices.plugins.FileProvider">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/sharing_paths" />
        </provider>
        <amazon:enable-feature android:name="com.amazon.device.messaging" android:required="false" xmlns:amazon="http://schemas.amazon.com/apk/res/android" />
        <service android:exported="false" android:name="com.onesignal.ADMMessageHandler" />
        <receiver android:name="com.onesignal.ADMMessageHandler$Receiver" android:permission="com.amazon.device.messaging.permission.SEND">
            <intent-filter>
                <action android:name="com.amazon.device.messaging.intent.REGISTRATION" />
                <action android:name="com.amazon.device.messaging.intent.RECEIVE" />
                <category android:name="io.bbox.starter" />
            </intent-filter>
        </receiver>
        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/fb_app_id" />
        <meta-data android:name="com.facebook.sdk.ApplicationName" android:value="@string/fb_app_name" />
        <activity android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation" android:label="@string/fb_app_name" android:name="com.facebook.FacebookActivity" />
        <service android:name="de.appplant.cordova.plugin.background.ForegroundService" />
        <provider android:authorities="${applicationId}.opener.provider" android:exported="false" android:grantUriPermissions="true" android:name="io.github.pwlin.cordova.plugins.fileopener2.FileProvider">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/opener_paths" />
        </provider>
        <activity android:name="com.soundcloud.android.crop.CropImageActivity" />
    </application>
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />
    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-feature android:name="android.hardware.telephony" android:required="false" />
    <uses-permission android:name="android.permission.RECEIVE_SMS" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.SEND_SMS" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>


//CREATE FEED CODE
<!-- Text area -->
    <div class="type-message">
      <!-- Text Message Area -->
      <div class="type-message-container">

        <!-- DEMO ITEM -->
        <!-- <ion-item class="preview" text-wrap>
          <ion-thumbnail  slot="start">
            <ion-img src="assets/images/user.png"></ion-img>
          </ion-thumbnail>
          <ion-label>
            2141251521512.jpg
          </ion-label>
          <ion-button *ngIf="uploading == false" slot="end" fill="clear" (click)="deleteFile(img, pos)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-button>
          <ion-spinner name="crescent" color="primary"></ion-spinner>
        </ion-item> -->

        <ion-item class="preview" *ngFor="let img of images; index as pos" text-wrap>
          <ion-thumbnail *ngIf="getExt(img) != 'video'" slot="start">
            <ion-img [src]="img.path"></ion-img>
          </ion-thumbnail>
          <ion-thumbnail *ngIf="getExt(img) == 'video'" slot="start">
            <video [src]="img.path" height="50" width="70" muted [muted]="true" preload="auto" playsinline autoplay loop></video>
          </ion-thumbnail>
          <ion-label>
            {{ img.displayName }}
          </ion-label>
          <ion-button *ngIf="uploading == false" slot="end" fill="clear" (click)="deleteFile(img, pos)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-button>
          <ion-spinner *ngIf="uploading == true" name="crescent" color="primary"></ion-spinner>
        </ion-item>
        <ion-item class="preview" *ngFor="let doc of docs; index as pos" text-wrap>
          <ion-thumbnail slot="start">
            <img src="assets/images/thumbnail.png">
          </ion-thumbnail>
          <ion-chip color="primary">
            <ion-icon name="attach" color="primary"></ion-icon>
          </ion-chip>
          <ion-label>
            {{ doc.name}}
          </ion-label>  
          <ion-button *ngIf="uploading == false" slot="end" fill="clear" (click)="deleteFile(doc, pos)">
            <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-button>
          <ion-spinner *ngIf="uploading == true" name="crescent" color="primary"></ion-spinner>
        </ion-item>
        <ion-progress-bar *ngIf="uploading == true" value="{{ upload_value }}" buffer="{{ buffer_value }}"></ion-progress-bar>
        <form [formGroup]="feedForm" (ngSubmit)="onSubmit()">
          
          <div class="chatbox-wrapper">
            <ion-item class="rounded" lines="none">
                <ion-textarea formControlName="text" rows="3" (keyup.enter)="onSubmit()" placeholder="{{'Enter Message'|translate}}..."></ion-textarea>
            </ion-item>
          </div>
        
          <div class="buttons-container">
            <ion-button fill="clear" (click)="showModal()" *ngIf="!feed_id || feed_id  == -1">
              <ion-icon slot="icon-only" name="md-eye" color="primary"></ion-icon>
            </ion-button>

            <ion-button fill="clear" (click)="selectAFile()" *ngIf="!feed_id || feed_id  == -1">
              <ion-icon slot="icon-only" name="md-attach" color="primary"></ion-icon>
            </ion-button>
            <input type="file" (change)="getFileFromBrowser($event, 'video')" id="video" accept="video/mp4,video/x-m4v,video/*" style="display: none">
            <ion-button fill="clear" (click)="selectVideoFromGallery()" *ngIf="!feed_id || feed_id  == -1">
              <ion-icon slot="icon-only" name="md-videocam" color="primary"></ion-icon>
            </ion-button>
            
            <input type="file" (change)="getFileFromBrowser($event, 'image')" id="image" accept="image/*" style="display: none">
            <ion-button fill="clear" (click)="selectImage()" *ngIf="!feed_id || feed_id  == -1">
              <ion-icon slot="icon-only" name="md-camera" color="primary"></ion-icon>
            </ion-button>

            <ion-button fill="clear" type="submit">
              <ion-icon slot="icon-only" name="md-send" color="primary"></ion-icon>
            </ion-button>
          </div>
        </form>
      </div>
    </div>