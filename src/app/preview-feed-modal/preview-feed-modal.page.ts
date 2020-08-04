import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-preview-feed-modal',
  templateUrl: './preview-feed-modal.page.html',
  styleUrls: ['./preview-feed-modal.page.scss'],
})
export class PreviewFeedModalPage implements OnInit {
  // @Input() firstName: string;
  // @Input() lastName: string;
  // @Input() middleInitial: string;
  firstName: string;
  groups: any = [];
  allgroupnames: any = [];
  gname: any;
  text: any;
  images: any = [];
  docs: any = [];
  constructor(navParams: NavParams) {
    console.log(navParams.get('text'));
    console.log(navParams.get('group'));
    console.log(navParams.get('groupname'));
    this.firstName = navParams.get('text');
    this.groups = navParams.get('group');
    this.allgroupnames = navParams.get('groupname');
    this.images = navParams.get('images');
    this.docs = navParams.get('docs');
    console.log(this.images);
    console.log(this.docs);
  }

  ngOnInit() {

    for(let groupname of this.allgroupnames){
      for(let group of this.groups){
        if(group == groupname.id){
          this.gname =  groupname.name;
        }
      }
    }
  }

  getExt(entry) {
    var file = entry.path.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    var isnum = /^\d+$/.test(ext);
    if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
      return 'image';
    }
    else {
      return 'video';
    }
  }


}
