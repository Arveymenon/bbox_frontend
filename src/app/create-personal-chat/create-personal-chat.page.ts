import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,NgForm} from '@angular/forms';
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

@Component({
  selector: 'app-create-personal-chat',
  templateUrl: './create-personal-chat.page.html',
  styleUrls: ['./create-personal-chat.page.scss'],
})
export class CreatePersonalChatPage implements OnInit {
  cant_find: any;
  lang: String = 'EN';
  searchQuery:any;
  items = new Array(0);
  public myForm: FormGroup;
  userArray : Array<{memberid : string,accepted: boolean, admin: boolean, nameval: String}> = []; 
  
  constructor(public userService: UserService,
    public groupService: GroupService,
    private router: Router, 
    private toastController: ToastController,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    public storage: Storage,
    public navCtrl : NavController,
    public loader : LoaderService,
    public translate: TranslateService
    ) {
      this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
          this.cant_find = this.translate.instant('cant find', { value: this.lang });
        }
      })
     }

    id: any;
    sub:any;

  ngOnInit() {
    this.storage.get('id').then((val: any)=>{
      console.log(val)
      this.id = val;
    });
  }

  
  back(){
    this.navCtrl.pop();
  }

  async addmember(val,name) {
    console.log(this.userArray.findIndex(o=>o.memberid == val));
    console.log(this.userArray)
    if(this.userArray.findIndex(o=>o.memberid == val) == -1){

      this.items.length += 1;
      this.userArray[0] = {
        memberid : val,
        accepted: false,
        admin: false,
        nameval : name
      };
    }else{
      // let value = this.translate.instant('Cannot_Add_Same_User_Again', { value: this.lang });
      this.storage.get('language').then((language: any)=>{
        console.log(language)
        
        this.translate.get("Cannot_Add_Same_User_Again",{value: language})
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
    }
  }

  removeUser(val){
    console.log(this.userArray.findIndex(o=>o.memberid == val.memberid));
    let member_id = this.userArray.findIndex(o=>o.memberid == val.memberid);
    this.userArray.splice(member_id,1)
  }

  addtogroup(){
    console.log(this.userArray)
    //  Adding admin as member
    if(this.userArray.length >= 1){

      this.storage.get('id').then((val: any)=>{
        console.log(val)
        this.storage.get('name').then((name: any)=>{
          console.log(name)
          this.userArray.push({
            memberid : val,
            accepted: true,
            admin: true,
            nameval : name
          });
          var empty_group = {
            name: "Personal Group",
            description: "No Description"
          }
          this.groupService.postGroup(empty_group).subscribe((res: any) => {
            console.log(res)
            this.loader.presentLoading();
            this.userService.putUser({members: this.userArray},res._id).subscribe((res1) => {
            this.loader.dismiss();
              this.userService.users = [];
              this.router.navigate(['home/tabs/tab1']);
              this.ref.detectChanges();
              this.showToast();
              });

          });
        });
      })
    }

  }

  refreshUserList(ev) {
    
    var data = ev.target.value;
    if(data == ""){
    
      this.userService.users = [];

    }else{
      // this.loader.presentLoading();
      let body = {
        user_id: this.id
      }  
    this.userService.getuserList(data, body).subscribe((res) => {
      this.userService.users = res as User[];
      // this.loader.dismiss();
      console.log(this.userService.users);
    });
  }
  }

  selectIndividual(event,ittrator){
    console.log(ittrator)
    console.log(this.userArray)
    console.log(this.userArray[ittrator])

    this.removeUser(ittrator);
    var currentID = event.target.id.replace('-image','');
    document.getElementById(currentID+'-container').classList.toggle('individual-overlay');

  }

  async showToast() {
    // let value = this.translate.instant('Chat_Created_Successfully', { value: this.lang });
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get("Chat_Created_Successfully",{value: language})
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
  }

  inviteMembers(){
    this.router.navigate(['invite-member']);
  }

}
