import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../shareduser/user.service';
import { Storage } from '@ionic/storage';
import { LoaderService } from '../services/loader.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.page.html',
  styleUrls: ['./block-list.page.scss'],
})
export class BlockListPage implements OnInit {
  user_id: any;
  blocked_users: any;;

  constructor(
    private userService: UserService,
    private storage: Storage,
    private loader: LoaderService,
    private ref: ChangeDetectorRef,
    private alertController: AlertController,
    private translate: TranslateService,
    private contactsService: ContactsService
  ) {
    
  }

  ngOnInit() {
    this.storage.get('id').then(val => {
      this.user_id = val;
      this.getList();
    })
  }

  getList(){
    this.loader.presentLoading();
    this.userService.getBlockList(this.user_id).subscribe((list: any) => {
      this.loader.dismiss();
      list.forEach(item => {
        item.name = this.contactsService.getContactName(item._id);
      });
      this.blocked_users = list;
      this.ref.detectChanges();
    })
  }

  removeBlock(id){
    console.log(id);
    var body = {
      user_id: this.user_id,
      blocked_user: id
    }
    console.log(body);
    this.userService.removeFromBlock(body).subscribe(removed => {
      this.getList();
    }, err => console.log(err));
  }

  async deleteAlert(id, name) {
    let value = this.translate.instant(['Block_Chat','Confirm_Block','cancel','Block'], { value: 'en' });
    const alert = await this.alertController.create({
      header: "Are you Sure?",
      message: "Kindly confirm you want to unblock " + name,
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
            this.removeBlock(id)
          }
        }
      ]
    });

    await alert.present();
  }

}
