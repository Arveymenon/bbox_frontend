import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  subscriber: Boolean;
  groupType: Number;
  callType: String;
  pushToken: String;
  mobileNumber: String;

  constructor(
    private nativeStorage: NativeStorage,
    private storage: Storage
  ) {}

  firstTimeAppOpened(){
    return new Promise((resolve, reject) => {
      this.storage.get("ftap").then(fetched => {
        if(fetched){
          resolve(false);
        }
        else {
          this.storage.set("ftap", true).then(set => {
            resolve(true);
          })
        }
      })
    });
  }

  setSubscriberStatus(status){
    this.subscriber = status
    console.log(this.subscriber);
    this.storage.set('subscribers', status)
    return status;
  }

  fetchSubscriberStatus(){
    return new Promise((resolve, reject) => {
      this.storage.get('subscribers')
      .then(value => {
        this.subscriber = value;
        resolve(true);
      })
    });
  }

  getSubscriberStatus(){
    return this.subscriber;
  }

  setGroupType(type){
    // type: 1 - Normal Group, 2 - Subscriber List
    this.groupType = type
  }

  getGroupType(){
    return this.groupType;
  }

  setCallType(type){
    this.callType = type;
  }

  getCallType(){
    return this.callType;
  }

  addInArray(key, value){
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(key)
      .then(
        data => {
          if(data && data instanceof Array){
            data.push(value);
            this.nativeStorage.setItem(key, data)
            .then(
              () => resolve(true),
              error => reject(error)
            )
            .catch(err => reject(err));
          }
          else {
            resolve(false);
          }
        },
        error => reject(error)
      )
      .catch(err => reject(err));
    });
  }

  checkInArray(key, value){
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(key)
      .then(
        data => {
          if(data && data instanceof Array){
            data.includes(value) ? resolve(true) : resolve(false);
          } 
          else {
            // NO DATA PRESENT THEN CREATE ARRAY AND STORE
            this.nativeStorage.setItem(key, new Array())
            .then(
              () => resolve(false),
              error => reject(error)
            )
            .catch(err => reject(err));
          }
        },
        error => reject(error)
      )
      .catch(err => reject(err));
    });
  }

  removeFromArray(key, value){
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(key)
      .then(
        data => {
          if(data && data instanceof Array){
            var index = data.indexOf(value);
            if (index !== -1) {
              data.splice(index, 1);
              this.nativeStorage.setItem(key, data)
              .then(
                () => resolve(true),
                error => reject(error)
              )
              .catch(err => reject(err));
            }
            else {
              resolve(false);
            }
          } 
          else {
            resolve(false);
          }
      })
      .catch(err => reject(err));
    })
  }
  
  setToken(token){
    this.pushToken = token
  }

  getToken(){
    return this.pushToken;
  }

}
