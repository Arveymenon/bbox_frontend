import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContactsListComponent } from '../shared/components/contacts-list/contacts-list.component';
import { ModalController, ToastController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
// import {
//   BarcodeScannerOptions,
//   BarcodeScanner
// } from "@ionic-native/barcode-scanner/ngx";
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { Storage } from '@ionic/storage';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { Router } from '@angular/router';
import { UserService } from '../shareduser/user.service';
import { LoaderService } from '../services/loader.service';
import { BranchIo, BranchUniversalObject } from '@ionic-native/branch-io/ngx';
// declare var navigator: Navigator;
@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.page.html',
  styleUrls: ['./invite-member.page.scss'],
  providers: [GroupService, UserService],
})
export class InviteMemberPage implements OnInit {
  lang: String = 'EN';
  encodeData: any;
  scannedData: {};
  // barcodeScannerOptions: BarcodeScannerOptions;
  details: any;
  resultArray: any[];
  sharing_link: any;
  show_on_desktop = false;
  buo: BranchUniversalObject;
  constructor(
    public modalController: ModalController,
    private socialSharing: SocialSharing,
    // private barcodeScanner: BarcodeScanner,
    private storage: Storage,
    private groupService: GroupService,
    private router: Router,
    private platform: Platform,
    private ref: ChangeDetectorRef,
    public userService: UserService,
    private toastController: ToastController,
    private translate: TranslateService,
    private loader: LoaderService,
    private zbar: ZBar,
    private branch: BranchIo
  ) {
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
    this.storage.get('id').then((val) => {
      this.encodeData = val;
      var properties = {
        canonicalIdentifier: "user/" + val,
        contentMetadata: {
          user_id: val
        }
      }
      this.branch.createBranchUniversalObject(properties).then(buo => {
        this.buo = buo;
        var urlProperties = {
          $deeplink_path: "user/" + val,
          user_id: val
        };
        this.buo.generateShortUrl({}, urlProperties)
          .then(res => {
            console.log("Response: ", res.url);
            this.sharing_link = res.url + '?type=personal&id=' + val;
          })
          .catch(err => {
            console.log("Error: ", err);
          });
      })
    });
  }

  ngOnInit() {
    if((!this.platform.is('ios') && !this.platform.is('android'))){
      this.show_on_desktop = false;
    }else{
      this.show_on_desktop = true;
    }
  }

  async inviteMemberByPhone(){
    const modal = await this.modalController.create({
      component: ContactsListComponent,
      showBackdrop: false,
      componentProps: {}
    });

    modal.onWillDismiss().then((data: any) => {
        //ON DISMISS
    });

    return await modal.present()
  }

  async inviteMemberByLine(){
    console.log('Invite By Line');
    this.socialSharing.canShareVia('jp.naver.line.android',"Download the Amazing B-Box App to chat with me now!. Click on the following link:" + this.sharing_link)
    .then((res)=>{
      console.log('working')
      console.log(res);
    }).catch(async error=>{
      console.log('not working')
      console.log(error)
      // let value = this.translate.instant(['Kindly_Download_Line_To_Share_Via_Line'], { value: this.lang })

      this.storage.get('language').then((language: any)=>{
        console.log(language)
        
        this.translate.get("Kindly_Download_Line_To_Share_Via_Line",{value: language})
        .subscribe(async (res: any)=>{
  
          const toast = await this.toastController.create({
            message: res,
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.ref.detectChanges();
        });
      })
    })
    
  }

  inviteMemberByFacebook(){
    console.log('Invite By Facebook');
    if((!this.platform.is('ios') && !this.platform.is('android'))){
      var navigator: any;
      navigator = window.navigator;
      // navigator.share() = {
      //   'works'
      // };
      navigator.share({
        title: "BBox",
        text: "Download the Amazing B-Box App to chat with me now!. Click on the following link: " + this.sharing_link,
        url: "www.facebook.com"  
      }).then(res=>{
        console.log(res);
      }).catch((error) => console.log('Error sharing', error));
      // this.socialSharing.share("Download the Amazing B-Box App to chat with me now!. Click on the following link: https://app.link/to-be-sent","BBox",null,"www.facebook.com").then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // });
    }else{
      this.socialSharing.shareViaFacebook("Download the Amazing B-Box App to chat with me now!. Click on the following link: " + this.sharing_link,).then((res)=>{
        console.log(res);
      }).catch(error=>{
        console.log(error)
      })
    }
  }

  inviteMemberByEmail(){
    this.socialSharing.canShareViaEmail().then(() => {
      // Share via email
      this.socialSharing.shareViaEmail("Download the Amazing B-Box App to chat with me now!. Click on the following link: " + this.sharing_link, 'Hey! Lets Chat on B-Box', null).then(() => {
        // Success!
      }).catch(error => {
        console.log("INSIDE ERROR", error)
      });
    }).catch(err => {
      console.log("OUTSIDE ERROR", err);
    });
     
  }
  
  inviteMemberByOtherApps(){
    this.socialSharing.share('Download the Amazing B-Box App to chat with me now!','Hey! Lets Chat on B-Box',null,this.sharing_link)
  }

  scanCode() {
    let options: ZBarOptions = {
      flash: 'off',
      drawSight: false
    }

    this.zbar.scan(options)
      .then(scanned => {
          console.log(scanned); // Scanned code
          var scannedData = scanned;  // link?type=personal&id=val
          console.log(scannedData);
          var paramsString = scannedData.split('?'); // link | type=personal&id=val
          console.log(paramsString);
          var params = paramsString[1].split('&'); // type=personal | id=val
          console.log(params);
          let paramsSplit1 = params[0].split('='); // type | personal
          console.log(paramsSplit1);
          let paramsSplit2 = params[1].split('='); // id | val
          console.log(paramsSplit2);
          if(paramsSplit1[1] == 'personal'){
            this.checkChat(paramsSplit2[1]);
          } else {
            this.joinGroup(paramsSplit2[1]);
          }
      })
      .catch(error => {
          console.log(error); // Error message
      });
  }

  checkChat(id){
    this.loader.presentLoading();
    console.log('Clicked and ID', id);
    var user_id = this.encodeData;
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
      member: this.encodeData
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
