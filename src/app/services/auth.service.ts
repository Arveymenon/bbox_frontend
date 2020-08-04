
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './loader.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
 
const TOKEN_KEY = 'access_token';
const DATA_NAME = 'name';
const DATA_EMAIL = 'email';
const DATA_ID = 'id';
const DATA_AVATAR = 'profile_pic';
const DATA_MOBILE = 'mobile';
const DATA_SUBSCRIBERS = 'subscribers';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(null);
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController,
    private translate: TranslateService,
    private loader: LoaderService,
    private nativeStorage: NativeStorage) {
      // this.checkToken();
  }
 
  checkToken() {
    console.log('Started CheckToken')
    return new Promise((resolve, reject) => {
      console.log('New CheckToken')
      this.plt.ready().then(() => {
        if (this.plt.is('cordova')){
          this.nativeStorage.getItem(TOKEN_KEY).then(token => {
            console.log("Token", token)
            if (token) {
              let decoded = this.helper.decodeToken(token);
              let isExpired = this.helper.isTokenExpired(token);
      
              if (!isExpired) {
                this.user = decoded;
                this.authenticationState.next(true);
                resolve(true);
              } else {
                this.nativeStorage.remove(TOKEN_KEY);
                this.authenticationState.next(false);
                resolve(false);
              }
            }
            else {
              resolve(false);
            }
          }).catch(err => resolve(false));
        }
        else{
          this.storage.get(TOKEN_KEY).then(token => {
            console.log("Token", token)
            if (token) {
              let decoded = this.helper.decodeToken(token);
              let isExpired = this.helper.isTokenExpired(token);
      
              if (!isExpired) {
                this.user = decoded;
                this.authenticationState.next(true);
                resolve(true);
              } else {
                this.storage.remove(TOKEN_KEY);
                this.authenticationState.next(false);
                resolve(false);
              }
            }
            else {
              resolve(false);
            }
          }).catch(err => console.log('ERROR', err));
        }
      }).catch(err => console.log('ERROR', err))
    });
  }

 
  register(credentials) {
    return new Promise((resolve, reject) => {
      this.loader.presentLoading();
      this.http.post(`${this.url}/api/register`, credentials).pipe(
        catchError(e => {
          this.loader.dismiss();
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      ).subscribe(res => {
        this.loader.dismiss();
        console.log('REGISTERD', res);
        var promises = [];
        console.log('Platform is cordova', this.plt.is('cordova'));
        promises.push( this.plt.is('cordova') ? this.nativeStorage.setItem(TOKEN_KEY, res['token']) : this.storage.set(TOKEN_KEY, res['token']) );
        promises.push(this.storage.set(DATA_MOBILE, res['mobile']));
        promises.push(this.storage.set(DATA_NAME, res['name']));
        promises.push(this.storage.set(DATA_EMAIL, res['email']));
        promises.push(this.storage.set(DATA_ID, res['id']));
        promises.push(this.storage.set(DATA_AVATAR, res['avatar']));
        promises.push(this.storage.set(DATA_SUBSCRIBERS, res['subscribers'] ? res['subscribers'] : false ));
        promises.push(this.user = this.helper.decodeToken( res['token']));
        console.log(promises);
        this.authenticationState.next(true);
        Promise.all(promises).then(results => {
                                resolve(res);
                              });
      }, err => {this.loader.dismiss()});
    });
  }
 
  login(credentials) {
    return new Promise((resolve, reject) => {
      var promises = []
      console.log('Platform is cordova', this.plt.is('cordova'));
      promises.push( this.plt.is('cordova') ? this.nativeStorage.setItem(TOKEN_KEY, credentials['token']) : this.storage.set(TOKEN_KEY, credentials['token']) );
      promises.push(this.storage.set(DATA_MOBILE, credentials['mobile']));
      promises.push(this.storage.set(DATA_NAME, credentials['name']));
      promises.push(this.storage.set(DATA_EMAIL, credentials['email']));
      promises.push(this.storage.set(DATA_ID, credentials['id']));
      promises.push(this.storage.set(DATA_AVATAR, credentials['avatar']));
      promises.push(this.user = this.helper.decodeToken( credentials['token']));
      console.log(promises);
      this.authenticationState.next(true);
      Promise.all(promises).then(results => {
                              resolve(true);
                            });
    });
    // return this.http.post(`${this.url}/api/login`, credentials)
    //   .pipe(
    //     tap(res => {
    //     }),
    //     catchError(e => {
    //       this.showAlert(e.error.msg);
    //       throw new Error(e);
    //     })
    //   );
  }
 
  logout() {
    return new Promise((resolve, reject) => {
      if(this.plt.is('cordova')){
        this.nativeStorage.remove(TOKEN_KEY).then(() => {
          this.authenticationState.next(false);
          this.storage.remove('lang').then(() => {
            resolve(true);
          })
        }, err => {
          reject(err);
        })
        .catch(err => {
          reject(err);
        })
      }
      else {
        this.storage.remove(TOKEN_KEY).then(() => {
          this.authenticationState.next(false);
          this.storage.remove('lang').then(() => {
            resolve(true);
          })
        }, err => {
          reject(err);
        })
        .catch(err => {
          reject(err);
        })
      }
    })
    
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    console.log(msg)
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get(msg,{value: language})
      .subscribe(async (res: any)=>{

        
      });
        let alert = this.alertController.create({
          message: msg,
          header: 'Error',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
    });
  }

  socialLogin(res){
    return new Promise((resolve, reject) => {
      var promises = []
      promises.push(this.storage.set(TOKEN_KEY, res['token']));
      promises.push(this.storage.set(DATA_NAME, res['name']));
      promises.push(this.storage.set(DATA_EMAIL, res['email']));
      promises.push(this.storage.set(DATA_ID, res['id']));
      promises.push(this.storage.set(DATA_AVATAR, res['avatar']));
      promises.push(this.user = this.helper.decodeToken(res['token']));
      this.authenticationState.next(true);
      Promise.all(promises.map(p => p.catch(e => e)))
                            .then(results => {   
                              resolve(true);
                            }) 
    });
  }
}