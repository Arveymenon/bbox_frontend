import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GroupService } from '../shared/group.service';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PopoverController, ToastController, Events, Platform } from '@ionic/angular';
import { FeedPopoverPage } from '../feed-popover/feed-popover.page';
import { AlertController } from '@ionic/angular';
import { LoaderService } from '../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../services/helper.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [GroupService]
})
export class Tab2Page implements OnInit {
  lang: String = 'EN';
  id: any;
  feeds: any[] = [];
  routerSubscription: any;
  commentsArray: FormGroup;
  captionArray: FormArray;
  loadingFeeds: Boolean;
  profile_pic: any;
  permission : boolean = true;

  fileSourceArray = [];
  fileArray = [];

  constructor(
    private storage: Storage,
    private groupService: GroupService,
    private router: Router,
    private ref: ChangeDetectorRef,
    public formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public loader : LoaderService,
    public toastController: ToastController,
    public translate: TranslateService,
    public events: Events,
    public helper: HelperService,
    public platform: Platform
  ) {

    

  }
  
  ngOnInit() {
    console.log('tabs3 opened');
    this.storage.get('id').then((val) => {
      console.log('ID: ', val);
      this.id = val;
      this.loadFeeds();
    })
    this.storage.get('profile_pic')
      .then(image => {
        image ? this.profile_pic = image : false;
      })
      
    this.commentsArray = this.formBuilder.group({
    });
    // this.captionArray = this.formBuilder.group({
    // });
  
    this.events.subscribe('feed:posted', (data) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Feed POSTED', data);
      this.loadFeeds();
    });
    // this.loadFeeds();
  }

  ionViewWillEnter(){
    this.loadFeeds();
  }

  async presentPopover(itt,admin_id, ev?: any) {

    console.log(itt);
    const popover = await this.popoverController.create({
      component: FeedPopoverPage,
      event: ev,
      translucent: true,
      showBackdrop: false,
      componentProps: {
        "permission": this.permission,
        "admin_id": admin_id // feed_admin_id
      }
      // mode: 'ios'
    });
    popover.onDidDismiss().then(
      (res:any)=>{
        console.log(res)

        if(res.data == "edit"){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              "feeddata": JSON.stringify({
                data: this.feeds[itt]
              })
            }
          };
          console.log(navigationExtras)  
          this.router.navigate(["create-feed"], navigationExtras);
        }

        if(res.data == "delete"){
          this.deleteFeedAlert(itt);
          console.log(this.feeds[itt]);
        }
        if(res.data == "report"){
          this.reportToast()
        
          
        }
      }
    )

    return await popover.present();

  }

  checkSources(feeds) {
    console.log(feeds);
    if (feeds.length) {
      const files = feeds.filter(chat => chat.file == true);
      files.forEach((file, index) => {
        this.helper.checkFileExists(file.attachment)
          .then(exists => {
            this.fileArray[file._id] = exists;
            this.getSource(exists, file.attachment)
              .then(source => {
                console.log('SOURCE', source);
                this.fileSourceArray[file._id] = source;
                if (index == (files.length - 1)) {
                  console.log('FILE ARRAY', this.fileArray);
                  console.log('FILE ARRAY FILE', this.fileSourceArray);
                  this.ref.detectChanges();
                }
              });
          });
      });
    }
  }

  getSource(local, attachment) {
    return new Promise((resolve, reject) => {
      console.log('GET SOURCE');
      if (local) {
        this.helper.getStoredFile(attachment)
          .then(file => { resolve(file); console.log('RES', file); })
          .catch(err => { console.log('ERORR', err); reject(err); });
      } else {
        resolve('http://198.12.92.202/public/uploads/' + attachment);
      }
    });
  }

  openFile(file, id){
    console.log(file);
    console.log(id);
    if (this.platform.is('android') ||  this.platform.is('ios')) {
      this.helper.openFile(file)
        .then(done => { console.log(done) })
        .catch(err => { console.log(err) });
    } else {
      console.log('open in browser');
      window.open('http://198.12.92.202/public/uploads/' + file, '_blank');
    }
  }

  downloadAttachment(file, i) {
    document.getElementById('download-' + i).classList.toggle('hidden');
    document.getElementById('spinner-' + i).classList.toggle('hidden');
    this.helper.downloadFile(file)
      .then(downloaded => {
        console.log('FILE DOWNLOADED SUCCESFULLY');
        document.getElementById('spinner-' + i).classList.toggle('hidden');
        document.getElementById('play-' + i).classList.toggle('hidden');
      });

    // setTimeout(() => {
    //   document.getElementById('spinner-' + i).classList.toggle('hidden');
    //   document.getElementById('play-' + i).classList.toggle('hidden');
    // }, 3000)
  }

  async reportToast() {
    // let value = this.translate.instant(['This_feed_has_been_reported'], { value: this.lang })
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get("This_feed_has_been_reported",{value: language})
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

  async deleteFeedAlert(itt) {
    let value = this.translate.instant(['Delete_Feed','Are_you_sure','cancel','Delete','Post_Deleted_Successfully'], { value: this.lang });
    const alert = await this.alertController.create({
      header: value.Delete_Feed,
      message: value.Are_you_sure,
      buttons: [
        {
          text: value.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: value.Delete,
          handler: () => {
            console.log('Confirm Okay');
            // api call here
            console.log(this.feeds[itt]._id)
            let body = {
              "feed_id": this.feeds[itt]._id
            }
            console.log(body);
          this.groupService.deleteFeed(body).subscribe((res: any)=>{
            if(res.error == false){
              console.log(res)
              this.feeds.splice(itt, 1);
              console.log('Confirm DELETION');
              this.loadFeeds();
              this.toastController.create({
                message: value.Post_Deleted_Successfully
              })
              console.log(this.feeds);
            }
            })
            
          }
        }
      ]
    });

    await alert.present();
  }


  reportFeed() {
    console.log('reported')
  }

  report(){
    console.log('reported');
  }
 

  chat(){
    this.router.navigateByUrl('/create-personal-chat');
  }

  loadFeeds() {
    console.log('FEEDS STARTED')
    this.loadingFeeds = true;
    this.feeds = []
    this.groupService.getFeeds(this.id).subscribe((res: any) => {
      console.log('FEEDS FETCHED');
      console.log('FEEDS', res);
      this.feeds = res;
      console.log(this.feeds);
      if (this.feeds.length) {
        for (var element in this.feeds) {
          console.log('ELEMENT', element);

          if(parseInt(this.feeds[element].likes.findIndex(o=>o.user_id = this.id)) != -1){
            this.feeds[element].liked = true;
          }else{
            this.feeds[element].liked = false;
          }

          //  A Separate Comments
          let caption_control_name = element+'-cap';
          console.log(caption_control_name);
          // this.captionArray.push(new FormControl(caption_control_name));
          // this.captionArray.addControl(caption_control_name, new FormControl(''));
          this.commentsArray.addControl(element, new FormControl(''));
          console.log(this.commentsArray);
          console.log(this.captionArray);
          if((parseInt(element) + 1) == this.feeds.length){
            this.loadingFeeds = false;
            }
        }

        this.checkSources(res);
      } else {
        this.loadingFeeds = false;
      }
      
    },
      err => {
        console.log("ERROR", err)
      }
    );
  }

  editFeed() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data": JSON.stringify({
          "city": "San Francisco",
          "state": "California"
        })
      }
    };
    this.router.navigate(["create-feed"], navigationExtras);
  }

  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/home/tabs/tab2') {
            this.loadFeeds();
            this.ref.detectChanges();
          }
        }
      }
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');
    event.target.disabled = true;
    this.loadFeeds()
    event.target.complete();
    setTimeout(() => {
      event.target.disabled = false;
    }, 100);
  }

  ionPageWillLeave() {
    this.routerSubscription.unsubscribe();
  }

  viewImage(src) {
    console.log('viewImage', src);
    this.router.navigate(['view-image', src])
  }

  viewVideo(src) {
    console.log('viewVideo', src);
    this.router.navigate(['view-video', src])
  }

  viewAllComments(event) {
    var commentsId = event.target.id + '-comments';
    console.log(commentsId)
    document.getElementById(commentsId).classList.toggle('hide');
  }

  like(itt) {
    console.log(itt)
    console.log(this.feeds[itt])

    this.groupService.postFeedLike({ id: this.feeds[itt]._id, user_id: this.id })
      .subscribe(data => {
        console.log(data);
        if (this.feeds[itt].liked == true) {
          this.feeds[itt].liked = false
        } else {
          this.feeds[itt].liked = true
        }
      });

  }

  comment(itt) {
    console.log(itt)
    console.log(this.commentsArray);
    console.log(this.commentsArray.value[itt]);
    if (this.commentsArray.value[itt]) {
      console.log({ id: this.feeds[itt]._id, user_id: this.id, text: this.commentsArray.value[itt] });
      this.groupService.postComment({ id: this.feeds[itt]._id, user_id: this.id, text: this.commentsArray.value[itt] })
        .subscribe((data: any) => {
          console.log(data);
          this.commentsArray.controls[itt].reset();
          this.feeds[itt].comments = data.comments;
        });
    }
  }

  requstEdit(itt){
    console.log(itt)
    this.feeds[itt].editable_caption = true
  }
  
  edit(itt){
    console.log(itt)
    this.feeds[itt].editable_caption = false
    console.log(this.captionArray.value[itt])
    console.log(this.captionArray)
    // this.feeds[itt].text = this.captionArray.controls[itt].value;
    console.log(this.feeds[itt]);
  }
}
