import { Component, OnInit } from '@angular/core';

import { GroupService } from '../shared/group.service';
import { Storage } from '@ionic/storage';
import { Group } from '../shared/group.model';
import Swal from 'sweetalert2';
 
import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
 

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.page.html',
  styleUrls: ['./join-group.page.scss'],
  providers: [GroupService]
})
export class JoinGroupPage implements OnInit {

  userArray : Array<{id : string, name: String ,avatar :String ,members:[]}> = []; 
 idval:string="";
  constructor(public groupService: GroupService,private storage: Storage, public router : Router, public loader : LoaderService) {
    
   
    this.storage.get('id').then((val) => {
      this.idval = val;
      console.log(val)
      this.getgroupuser(val);
      console.log(val)

    });
  }
  ngOnInit() {
  
  }

  joinGroup(){
    this.router.navigate(['join-group']);
  }

  createGroup(){
    this.router.navigate(['create-group']);
  }
  getgroupuser(val){
    this.loader.presentLoading();
    this.groupService.getusergroup(val).subscribe((res:any[]) => {
      this.loader.dismiss();
      console.log(res);
      this.userArray = new Array(); 
     // this.groupService.selectedGroup = res as Group;
     var groups:any = res;

     groups.forEach(element => {
     //   this.groupService.getusergroupname(element['groupid']).subscribe((res) => {
        this.userArray.push({ id : element['_id'] , name : element['name'] , avatar: element['avatar'] , members : element['members']});
      })
    })
  }

  data:any;

  onAccept(gid){
    console.log(gid);

    let postdata = {
      "id" : gid,
      "mid" : this.idval
    }

    console.log(postdata);

    this.groupService.acceptgroup(postdata).subscribe((res) => {
      console.log("RESULT", res);
                this.userArray = [];

                this.storage.get('id').then((val) => {
                  this.getgroupuser(val);
            
                });

  });
}
  


  onDelete(id) {
   
    let postdata = {
     
      "mid" : this.idval
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
         

          this.groupService.deleteGroup(id,postdata).subscribe((res) => {
          
            this.storage.get('id').then((val) => {
              this.getgroupuser(val);
        
            });
                  'Deleted!';
           
            })
         
        )
     
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
         
        )
      }
    })



   }

}
