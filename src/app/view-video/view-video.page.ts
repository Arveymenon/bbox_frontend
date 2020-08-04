import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})
export class ViewVideoPage implements OnInit {
  video: any;
  constructor(private route: ActivatedRoute) {
    console.log("VIDEO");
    this.route.params.subscribe(params => {
      this.video = params['video']; 
      console.log(this.video);
     // alert(this.id);
    }); 
  }

  ngOnInit() {
  }

}
