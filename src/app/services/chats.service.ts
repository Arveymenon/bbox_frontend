import { Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { GroupService } from '../shared/group.service';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { StorageService } from './storage.service';
import { ContactsService } from './contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  idval: any;
  data: any;
  groupCount: any;

  constructor(
    public groupService: GroupService,private router: Router,private storage: Storage, public loader: LoaderService, private storageService: StorageService, private contactsService: ContactsService
  ) {}

  loadGroups(){
    return new Promise((resolve, reject) => {
    this.storage.get('id').then((val) => {
      this.idval =  val; 
      
      this.groupService.getGroupList(val).subscribe((res: any) => {
        resolve(true);
        console.log('Response', res);
        var result: any = res; this.data = res;
        console.log(result.groups);
        this.groupService.groups = result.groups
        this.groupCount = result.groupsCount;
        var subscribers = []
        if(result.groups && result.groups.length){
          this.groupService.groups.forEach(group => {
            if(group.members.length == 2){
                group.name = this.contactsService.getContactNameByMobile(group.mobile, group.mobile);

              console.log('CHANGED NAME', group);
            }
          });
        }
        
      }, err => {
        reject(err);
         {console.log('SOME ERROR OCCURED', err)}
      });
  
    });
  });
  }
  
  getData(){
    return {
      data: this.groupService.groups,
      groupCount: this.groupCount,
    }
  }
}
