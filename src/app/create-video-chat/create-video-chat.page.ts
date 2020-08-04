import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GroupService } from '../shared/group.service';
import { UserService } from '../shareduser/user.service';

@Component({
  selector: 'app-create-video-chat',
  templateUrl: './create-video-chat.page.html',
  styleUrls: ['./create-video-chat.page.scss'],
})
export class CreateVideoChatPage implements OnInit {
  lang: String = 'EN';
  userArray : Array<{id : string, name: String, avatar: String}> = []; // Groups
  video_members: Array<{id: String}> = [];
  room_id: any;
  group_id: any;
  group_data: any;
  user_id: any;
  video_chat: any;


  constructor(
    public route: ActivatedRoute,
    public storage: Storage,
    public router: Router,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    private groupService: GroupService,
    public userService : UserService,
    ) {
      this.storage.get('id').then((val: any)=>{
        console.log(val)
        this.user_id = val;
        this.toggleIDs(val);
      })
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          // this.data = JSON.parse(params.special);
          console.log(JSON.parse(params.special));
          this.video_chat = JSON.parse(params.special).video
          this.group_id = JSON.parse(params.special).room_id
          this.room_id = this.group_id;
          console.log(this.group_id);
          
          this.groupService.getGroupDetails(this.group_id,this.user_id).then((res: any)=>{
            console.log(res)
            this.group_data = res
            if(res){
              res.memberData.forEach(element=>{
                if(res.memberData.length >= this.userArray.length){
                  this.userArray.push({ id : element['_id'] , name : element['name'], avatar : element['avatar']});     
                }
              })
            }
          },error=>{
            console.log(error);
          })
        }
      });
     }

  ngOnInit() {
  }

  selectIndividual(event, pos){
    // console.log(this.checkAll())
    var currentID = event.target.id.replace('image-','');
    document.getElementById('container-'+currentID).classList.toggle('individual-overlay');
    this.toggleIDs(this.userArray[pos].id);
    
    
    console.log(document.querySelector('.images-container').classList.contains('overlay'))
    if(document.querySelector('.images-container').classList.contains('overlay')){
        document.querySelector('.images-container').classList.toggle('overlay');
        document.querySelector('.checkmark').classList.toggle('hidden');
        document.querySelector('.all-text').classList.toggle('blue');
    }
    
  }

  selectAll(event){
    document.querySelector('.images-container').classList.toggle('overlay');
    document.querySelector('.checkmark').classList.toggle('hidden');
    document.querySelector('.all-text').classList.toggle('blue');
    
    this.toggleAll(); // Handles ONLY Front End

    console.log(this.checkAll());
    // Checks
    //  if Front End select all has an overlay
    //  else Toggle Selected Users
    if(document.querySelector('.images-container').classList.contains('overlay')){
      this.userArray.forEach(group => {
        this.toggleIDs(group.id,'add')
      })
    }else{
      this.video_members = [this.user_id];
      console.log(this.video_members);
    }
  }


  toggleAll(){
    for(let i = 0; i < this.userArray.length ; i++) {
      if(this.userArray[i].id != this.user_id){

        if(document.querySelector('.images-container').classList.contains('overlay')){
  
          if(!document.getElementById('container-'+(i+1)).classList.contains('individual-overlay')){
            document.getElementById('container-'+(i+1)).classList.toggle('individual-overlay');
          }
          
        }else{
          
          if(document.getElementById('container-'+(i+1)).classList.contains('individual-overlay')){
            document.getElementById('container-'+(i+1)).classList.toggle('individual-overlay');
          }
  
        }

      }
    }
  }

  checkAll(){
    console.log(this.userArray)
    console.log(this.video_members)
    if(this.userArray.length == this.video_members.length){
      return true;
    }
    else {
      return false;
    }
  }

  toggleIDs(id,action?: any){
    
    console.log(id)
    var index = this.video_members.indexOf(id);
    console.log(action)
    console.log(index)


    if(action){

          if(action == 'add' && index == -1){
              this.video_members.push(id);
            return;
          }else if(action == 'remove' && index > -1){
            this.video_members.splice(index, 1);
            return;
          }

    }else{

          if (index > -1) {
            this.video_members.splice(index, 1);
          }
          else{
            this.video_members.push(id);
          }
          console.log(this.video_members)

    }


  }

  startVideoChat(){
    console.log('Navigating to Video Chat Page')
    console.log(this.video_members);
    if(this.video_members.length < 2){
      // let value = this.translate.instant('Kindly_Select_Members_To_Chat', { value: this.lang });
      this.presentToast("Kindly_Select_Members_To_Chat");
      return;
    }
    if(this.video_members.length > 5){
      // let value = this.translate.instant('You_Can_Select_Only_Upto_4_Mumbers', { value: this.lang });
      this.presentToast("You_Can_Select_Only_Upto_4_Mumbers");
      return;
    }

    let data = this.group_data;
    data.chats = [];
    var body = {
      members: this.video_members,
      group_data: data,
      group_name: this.group_data.name,
      type: this.video_chat == 1 ? 'video' : 'audio'
    }
    console.log('BODY', body);
    this.groupService.postVideoCall(body)
      .subscribe(data => {

        // Should a user get a notification if any one of selected the user is not available?
        if(this.video_chat == 1){
          this.router.navigate(['video-chat/' + this.room_id]);
        } else if(this.video_chat == 0) {
          this.router.navigate(['audio-call/'  + this.room_id]);
        }
      })
    
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
        // this.ref.detectChanges();
      });
    })

}
}