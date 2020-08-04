import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavParams, PopoverController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { popoverController } from '@ionic/core';



// import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';
import { AppComponent } from '../app.component';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-feed-popover',
  templateUrl: './feed-popover.page.html',
  styleUrls: ['./feed-popover.page.scss'],
})
export class FeedPopoverPage implements OnInit, AfterContentChecked {

  permission : any;
  admin_id: any;
  user_id: any;
  constructor(
    private storage: Storage,
    private route: ActivatedRoute,
    public navParams: NavParams,
    private cdr: ChangeDetectorRef,
    public popoverController: PopoverController
  ) {

    console.log("FEEDPOPOVER")

  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.permission = this.navParams.get('permission');
    this.admin_id = this.navParams.get('admin_id');
    this.storage.get('id').then(res => {
      this.user_id = res;
      console.log(this.user_id);
      console.log(this.admin_id);
    });
  }

  edit() {
    console.log("EDIT")
    this.popoverController.dismiss('edit');
  }

  delete() {
    console.log("DELETE")
    this.popoverController.dismiss('delete');
  }

  report() {
    console.log("REPORT")
    this.popoverController.dismiss('report');
  }
}


