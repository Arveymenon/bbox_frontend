import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


import { User } from './user.model';

@Injectable()

//import { CONSTANTS } from '../services/constant';
export class UserService {
  url = environment.url;
  
  users: any = [];
  readonly baseURL = `${this.url}/api/search-user`;

  readonly baseURL2 = `${this.url}/groups/`;
  readonly baseURL3 = `${this.url}/api/userid/`;
  readonly baseURL4 = `${this.url}/api/user/avatar/`; 
  readonly baseURL5 = `${this.url}/api/user/social/login`;
  readonly baseURL6 = `${this.url}/api/user/name/`; 
  readonly baseURL7 = `${this.url}/api/generate-otp`; 
  readonly baseURL8 = `${this.url}/api/check/`;
  readonly baseURL9 = `${this.url}/api/contacts/fetch`;
  readonly baseURL10 = `${this.url}/api/contacts/update`;
  readonly baseURL11 = `${this.url}/api/user/subscriber/`; 
  readonly baseURL12 = `${this.url}/api/block-list/get/`; 
  readonly baseURL13 = `${this.url}/api/block-list/remove`; 


  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) { }

//   postGroup(gp: Group) {
//     return this.http.post(this.baseURL, gp);
//   }

  setAvatar(avatar){
    if(!avatar){
      return false;
    }
    if(avatar.search("facebook.com") != -1){
      // console.log("FACEBOOK AVATAR FOUND")
      console.log(avatar);
      return avatar;
    }
    else{
      // console.log("FACEBOOK AVATAR NOT FOUND")
      return 'http://198.12.92.202/public/uploads/' + avatar;
    }
  }

  getuserList(data, body) {
    return this.http.post(this.baseURL, body, {params: {name: data}});
  }

  putUser(data,id) {
    return this.http.put(this.baseURL2+ id, data);
  }

  userGroups(data,id) {
    return this.http.put(this.baseURL3+ id, data);
  }

  putUserName(data) {
    console.log(data)
    return this.http.put(this.baseURL6, data)
  }

  putUserAvatar(data) {
    return this.http.put(this.baseURL4, data);
  }
  
  // For Social Login
  postUser(data){
    return this.http.put(this.baseURL2, data);
  }

  socialLogin(data){
    return this.http.post(this.baseURL5, data)
  }

  generateOTP(data){
    return this.http.post(this.baseURL7, data)
  }

  checkMobileNumber(data){
    return this.http.post(this.baseURL8+'mobile-number', data);
  }

  checkDetails(data){
    return this.http.post(this.baseURL8+'details', data).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );;
  }
//   deleteGroup(_id: string) {
//     return this.http.delete(this.baseURL + `/${_id}`);
//   }

  showAlert(msg) {
    console.log(msg)
      let alert = this.alertController.create({
        message: msg,
        header: 'Error',
        buttons: ['OK']
      });
      alert.then(alert => alert.present());

  }

  fetchContacts(data){
    return this.http.post(this.baseURL9, data);
  }

  setContacts(data){
    return this.http.post(this.baseURL10, data);
  }

  setSubscriber(data){
    return this.http.post(this.baseURL11, data);
  }

  getBlockList(id){
    console.log(id);
    return this.http.get(this.baseURL12 + id);
  }

  removeFromBlock(data){
    return this.http.post(this.baseURL13, data);
  }

}