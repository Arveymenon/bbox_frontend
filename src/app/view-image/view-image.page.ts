import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.page.html',
  styleUrls: ['./view-image.page.scss'],
})
export class ViewImagePage implements OnInit {
  image: any;
  constructor(
    private route: ActivatedRoute
  ) {
    console.log("IMAGE");
    this.route.params.subscribe(params => {
      console.log(params);
      this.image = params['image']; 
      console.log(this.image);
     // alert(this.id);
    }); 
  }

  ngOnInit() {
  } 

}
