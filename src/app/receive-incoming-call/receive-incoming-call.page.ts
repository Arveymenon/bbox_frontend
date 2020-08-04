import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../services/storage.service';
import { ContactsService } from '../services/contacts.service';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receive-incoming-call',
  templateUrl: './receive-incoming-call.page.html',
  styleUrls: ['./receive-incoming-call.page.scss'],
})
export class ReceiveIncomingCallPage implements OnInit {
  group_data: any;
  mySessionId: any;
  playing_ringtone: any;
  constructor(
      private groupService: GroupService,
      private storage: Storage,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location,
      private ref: ChangeDetectorRef,
      private storageService: StorageService,
      private contactsService: ContactsService,
      private ringtone: NativeRingtones,
      private filePath: FilePath,
      public events: Events,
      public alertController: AlertController
    ) {
      this.route.params.subscribe(params => {
        this.mySessionId = params['id']; 
        this.ringtone.getRingtone().then(ringtones => {
            console.log('RINGTONES', ringtones);
            this.filePath.resolveNativePath(ringtones[0].Url).then(nativePath => {
              this.playing_ringtone = nativePath;
              this.ringtone.playRingtone(nativePath).then(started => {
                console.log('Started', started);
              });
            });
        })
        .catch(err => {
          console.log('Error', err);
        });
        console.log(this.mySessionId);
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
                      this.ref.detectChanges();
                  }).catch(err => console.log('GROUP DATA ERROR', err))
              }
          })
          
          // alert(this.id);
        }); 
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

  ngOnInit() {
  }

  pickUp(){
    this.stopRingtone();
    if(this.storageService.getCallType() == 'video')
      this.router.navigate(['video-chat/' + this.group_data._id]);
    else
      this.router.navigate(['audio-call/' + this.group_data._id]);
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
                    this.dropUp();
                }
            }
        ]
    });
    await alert.present();
}

  dropUp(){
    this.stopRingtone();
    this.router.navigate(['home/tabs/tab1']);
  }

  stopRingtone(){
    this.ringtone.stopRingtone(this.playing_ringtone);
  }
}
