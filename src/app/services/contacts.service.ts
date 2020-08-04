import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { UserService } from '../shareduser/user.service';
import { GroupService } from '../shared/group.service';
import { Storage } from '@ionic/storage';
import { LoaderService } from './loader.service';
import { TranslateService } from '@ngx-translate/core';
import { IContactFindOptions, Contact, IContactField, ContactFieldType, Contacts } from '@ionic-native/contacts/ngx';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  localContacts: any = {};
  avatarArray:any = [];
  user_id: String;
  demoUsers = [{
    _id: "5e1ef7af17e8f2711b840562",
    name: "Vimal Saxena",
    user_id: "Vimal Saxena",
    email: "hello@gmail.co",
    password: "$2b$10$yLZfX6u6qOeF46NtKlaGQuxEBR40bY/xfAdgTGDRPS8TtmtwbDSWG",
    onesignal_id: "241118af-56f7-4f12-a161-03ed73fee753",
    mobile: "+819067442886",
    groups: [],
    social: false
  },{
    _id: "5e1766087101f9295f921a55",
    name: "Rohit",
    user_id: "Rohit",
    email: "rohitkjain90@gmail.com",
    password: "$2b$10$fzraeJmOzzq33L8mazwmU.QR26MueFxfJaPHY3glW7nsHJNTPvJnK",
    onesignal_id: "4676e156-7bbc-46be-b5c7-d30271ca21ee",
    mobile: "+918097283931",
    groups: [],
    social: false,
    contacts: [],
    avatar: "1579291102603.jpg"
  },
  {
    _id: "5e1efb3517e8f2711b84056d",
    mobile: "+919920807002",
    name: "arvey",
    email: "arveymenon@gmai",
    groups: [],
    social: false
  }]
  allContacts: any = this.demoUsers;
  mobile_prefix: any;
  mobile: any;

  constructor(
    private platform: Platform,
    private contacts: Contacts,
    private userService: UserService,
    private storage: Storage,
    public translate: TranslateService,
  ) {}

  setUserId(){
    return new Promise((resolve, reject) => {
      this.storage.get('id').then((val) => {
        this.user_id = val
        this.storage.get('mobile').then((mob) => {
          this.mobile = mob;
          this.mobile_prefix = mob.substring(0,3);
          resolve(mob);
        });
      });
    });
  }

  getUserId(){
    return this.user_id;
  }

  getPhoneNumber(){
    return this.mobile;
  }

  saveContacts() {
    return new Promise((resolve, reject) => {
      this.getContacts()
        .then((contacts: Contact[]) => {
          console.log('CONTACTS', contacts)
          const mobileNumbers = [];
          contacts.forEach((contact, index) => {
            var numbers = contact.phoneNumbers
            .filter((phoneNumber: IContactField) => {
              return phoneNumber.type === "mobile";
            }).map((phoneNumber: IContactField) => {
              return this.cleanPhoneNumber(phoneNumber.value);
            }).filter((phoneNumber: string) => {
              return phoneNumber.slice(1).match(/^[0-9]+$/) && phoneNumber.length >= 8;
            });
            if(numbers.length && numbers[0] != this.mobile){
              var newContact: any = {
                displayName: contact.displayName,
                phoneNumber: numbers[0],
                avatar: contact.photos ? contact.photos : ''
              };
              var number = numbers[0].toString(); var newObject = {[number]: newContact};
              this.localContacts[number] = newContact;
              mobileNumbers.push(numbers[0])
            }
            if(index == (contacts.length - 1)){
              console.log('LOCAL CONTACTS', this.localContacts);
              console.log('MOBILE NUMBERS', mobileNumbers)
              this.fetchContacts(mobileNumbers)
              resolve(true);
            }
          });
        })
        .catch((e: Error) => {
          console.log(e);
          reject(e)
        });
      });
  }

  getContacts = (): Promise<Contact[]> => {
    if (!this.platform.is('cordova')) {
      return Promise.reject(new Error('Cannot get contacts: not cordova.'));
    }

    const fields: ContactFieldType[] = ["phoneNumbers"];
    const options: IContactFindOptions = {
      filter: '',
      multiple: true,
      desiredFields: ['phoneNumbers', 'displayName', 'photos'],
      hasPhoneNumber: true
    };
    return this.contacts.find(fields, options);
  };

  cleanPhoneNumber = (phoneNumber: string): string => {
    const phoneNumberNoSpaces: string = phoneNumber.replace(/-|\s/g,"");
    if (phoneNumberNoSpaces.charAt(0) === '+') {
      return phoneNumberNoSpaces;
    } else if (phoneNumberNoSpaces.substring(0, 2) === "00") {
      return '+' + phoneNumberNoSpaces.slice(2);
    } else {
      // Use user's international prefix when absent
      // FIXME: update meteor-accounts-phone typings
      const prefix: string = this.mobile_prefix;
      if(phoneNumberNoSpaces.charAt(0) === "0"){
        console.log(phoneNumberNoSpaces);
        phoneNumberNoSpaces.slice(1)
      }
      return prefix + phoneNumberNoSpaces;
    }
  };

  fetchContacts(numbers){
    // numbers = numbers.slice(0, 500); // For Rohit
    if(this.platform.is('cordova')){
      this.userService.fetchContacts({numbers: numbers})
      .subscribe(fetched => {
        console.log('ALL CONTACTS', fetched);
        this.allContacts = fetched;
        for(let contact of this.allContacts){
          contact.name = this.localContacts[contact.mobile].displayName;
          contact.mobile = this.localContacts[contact.mobile].phoneNumber;
          if(contact.avatar)
            this.avatarArray[contact.mobile] = 'http://198.12.92.202/public/uploads/' + contact.avatar;
          else if(this.localContacts[contact.mobile].avatar)
            this.avatarArray[contact.mobile] = this.localContacts[contact.mobile].avatar;
          else 
            this.avatarArray[contact.mobile] = 'assets/images/user.png';
        }
        console.log(this.allContacts);
        console.log('AVATAR ARRAY', this.avatarArray);
        // this.setContacts().then(res => console.log('SET CONTACTS', res)).catch(err => console.log('CONTACTS ERROR', err));
      },
      err => { console.log(err); });
    } else {
      this.allContacts = this.demoUsers;
    }
    
  }

  public contactsData(){
    var data = {
      allContacts: this.allContacts,
      localContacts: this.localContacts,
      avatarArray: this.avatarArray
    }
    console.log('DATA RETURNED', data)
    return data;
  }

  setContacts(){
    console.log('SET CONTACTS')
    return new Promise((resolve, reject) => {
      var data = {
        id: this.user_id,
        contacts: this.localContacts
      }
      console.log('DATA SENT', data)
      this.userService.setContacts(data)
        .subscribe(set => {
          resolve(set)
          console.log('RESPONSE NO ERROR WALA AYA');
        },
        err => {
          console.log('RESPONSE NO ERROR WALA AYA');
          // resolve(true);
          reject(err);
        })
    });
  }

  getDemoUsers(){
    return this.demoUsers;
  }

  getContactName(id){
    let contact = this.allContacts.filter(contact => contact._id == id);
    return contact[0] ? contact[0].name : false;
  }

  getContactNameByMobile(mobile, fallback){
    let contact = this.allContacts.filter(contact => contact.mobile == mobile);
    return contact[0] ? contact[0].name : fallback;
  }

  getContactMobile(id){
    let contact = this.allContacts.filter(contact => contact._id == id);
    return contact[0] ? contact[0].mobile : false;
  }
}


