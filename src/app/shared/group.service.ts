import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

import { Group } from './group.model';
import { Socket } from 'ngx-socket-io';
import { timeout } from 'rxjs/operators';

@Injectable()
export class GroupService {
  url = environment.url;
  selectedGroup: Group;
  groups: Group[];
  ugroups: Group[];
  readonly baseURL = `${this.url}/groups`;
  readonly baseURL2 = `${this.url}/chats/`;
  readonly baseURL6 = `${this.url}/chats/all/`;
  readonly baseURL3 = `${this.url}/api/usergp/`;
  readonly baseURL4 = `${this.url}/api/delgp/`;
  readonly baseURL5 = `${this.url}/groups/updatemembers/`;
  readonly baseURL7 = `${this.url}/join`;
  readonly baseURL8 = `${this.url}/join/`;
  readonly baseURL9 = `${this.url}/feeds/`;
  readonly baseURL10 = `${this.url}/groups/group/id`;
  
 
  // id:any;

  id:string="";
 
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private socket: Socket,) {
   }

 
 
  postGroup(gp) {
    return this.http.post(this.baseURL, gp);
  }

  //SESSION VALUE OF ID
  sharedvalue() {
     this.storage.get('id').then((val) => {
      this.id = val;
     });
  }
  

  getGroupList(val,admin = null) {
    console.log("VALUE PASSED",val);
    return this.http.get(this.baseURL,{params:{id: val, admin: admin}});
  }

  getGroupDetails(id,user_id) {
    return new Promise((resolve,reject)=>{
        this.http.post(this.baseURL+'/details/'+id,{user_id: user_id})
        .pipe(timeout(5000))
        .subscribe((res: any)=>{
            console.log(res);
            resolve(res);
          },(err: any)=>{
          resolve(err);
        })
    })
    // return new Promise((resolve, reject)=>{
    //   resolve();
    // })
  }

  getusergroup(val){
    console.log('URL', (this.baseURL3 + val))
    return this.http.get(this.baseURL3 + val);

  }

  getusergroupname(val){
    return this.http.get(this.baseURL2 + val);

  }

  getgroupuser(val){
    return this.http.get(this.baseURL6 + val);

  }


  putGroup(gp: Group) {
    return this.http.put(this.baseURL + `/${gp._id}`, gp);
    
  }

  putEditGroup(gp: Group) {
    return this.http.put(this.baseURL+'/group' + `/${gp._id}`, gp);
    
  }
  

  deleteGroup(id,member) {
    return this.http.put(this.baseURL8 + id, member);
  }


  //For Chats Group Chat
  putChat(gp: Group, id){
    console.log("PUT URL", this.baseURL2 + id);
    console.log("DATA", gp)
    this.socket.emit('send-message', { 
      text: gp, 
      room: id,
      // sent_from: this.temp_name,
      type: 1 // 1-> text
    })
    return this.http.put(this.baseURL2 + id, gp);
  }

  getChat(id) {
    return this.http.get(this.baseURL6 + id);
  }

  putChatReadAll(data){
    return this.http.post(this.baseURL2 + 'read-all', data);
  }
  

  delusergrp(id,grpid) {
    return this.http.put(this.baseURL4 + id,{params:{idval: grpid}});
  }

  delmember(id,memid) {
    return this.http.delete(this.baseURL5 + id,{params:{idval: memid}});
  }

  acceptgroup(data) {
    //var data = {"id" : id ,"mid" : memid};
    return this.http.put(this.baseURL7 ,data);
  }

  createFeed(data){
    return this.http.post(this.baseURL9 + 'add', data);
  }
  
  editFeed(data){
    return this.http.put(this.baseURL9 + 'single-feed', data);
  }
  
  deleteFeed(data){
    console.log('BODY', data)
    return this.http.delete(this.baseURL9 + 'single-feed/'+ data.feed_id);
  }

  getFeeds(data){
    console.log('FEED DATA', data);
    console.log(this.baseURL9 + data);
    return this.http.get(this.baseURL9 + data);
  }
  
  postFeedLike(data){
    return this.http.post(this.baseURL9+'/like', data);
  }
  
  postComment(data){
    return this.http.post(this.baseURL9+'/comment', data);
  }

  postVideoCall(data){
    return this.http.post(this.baseURL + '/create/video-chat', data);
  }

  removeMember(data, id){
    return this.http.request('delete', this.baseURL + '/remove-member/' + id, {body: data});
  }

  checkExists(data){
    return this.http.post(this.baseURL + '/create/check', data);
  }

  checkMember(data){
    return this.http.post(this.baseURL + '/member/check', data);
  }

  deleteChat(data){
    return this.http.request('delete', this.baseURL2 + '/single-chat/' + data.id , {body: data});
  }

  deleteChatRoom(id, body){
    return this.http.request('delete', this.baseURL + '/' + id, {body: body});
  }

}