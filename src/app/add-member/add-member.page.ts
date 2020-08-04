import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController, Platform } from '@ionic/angular';
import { UserService } from '../shareduser/user.service';
import { GroupService } from '../shared/group.service';
import { User } from '../shareduser/user.model';
import { Group } from '../shared/group.model';
import { Storage } from '@ionic/storage';
import { LoaderService } from '../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { ContactsService } from '../services/contacts.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
  providers: [UserService, GroupService]

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
  avatarArray: any = [];
  mobile: String;
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
    private contactsService: ContactsService,
    private platform: Platform,
    private storageService: StorageService
  ) {
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
    this.mobile = this.contactsService.getPhoneNumber();
    this.cant_find = this.translate.instant('cant find', { value: this.lang });
    console.log(this.cant_find);
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
    
    if (this.platform.is('cordova')) {
      this.contactsData = this.contactsService.contactsData();
      console.log('DATA', this.contactsData)
      this.userService.users = this.contactsData.allContacts;
      this.avatarArray = this.contactsData.avatarArray;
    }
    else {
      this.userService.users = this.contactsService.getDemoUsers();
    }

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
      // var currentID = event.target.id.replace('-image', '');
      // document.getElementById(currentID + '-container').classList.toggle('individual-overlay');
    }
  }

  async addtogroup() {
    console.log(this.userArray)
    if(this.groupService.groups && this.groupService.groups.length == 0){
      if (this.userArray.length > 1) {
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
    var members = this.userArray;
    if(this.groupService.groups && this.groupService.groups.length == 0){
      members.push({
        memberid: this.user_id,
        accepted: true,
        admin: true,
        nameval: 'You'
      });
    }
    this.userService.putUser({ members: members }, this.id).subscribe((res) => {
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
      if (this.platform.is('cordova')) {
        console.log('DATA', data);
        this.userService.users = this.find(this.contactsData.allContacts, data);
        console.log(this.userService.users)
      }
      else {
        this.userService.users = this.find(this.userService.users, data)
      }
    }
  }

  find(items, text) {
    console.log('items',items)
    var text = text.split(' ');
    return items.filter(function(item) {
      return text.every(function(el) {
        return item.name.indexOf(el) > -1;
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
        this.groupService.groups.forEach(element => {
          var contact = this.contactsService.getContactName(element['_id']);
          element.name = contact ? contact : element['mobile'];
          if(element.mobile == this.mobile){
            element.name = 'You';
          }
        });
        console.log(this.groupService.groups);
      }
    },err => {
        //DO NOTIHNG
        // this.userArray.push({
        //   memberid: user_id,
        //   accepted: true,
        //   admin: true,
        //   nameval: 'You'
        // });
    }).finally(()=>{
      if(this.userArray.length == 0 && this.groupService.groups.length == 0){
        // this.userArray.push({
        //   memberid: user_id,
        //   accepted: true,
        //   admin: true,
        //   nameval: 'You'
        // });
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
