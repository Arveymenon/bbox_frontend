import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveStateService {

  public url : any;

  constructor(public router: Router)
  {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        // Traverse the active route tree
        this.url = this.router.url;
        console.log('URL', this.url);
      }
    });
  }

  is(name : string) : boolean
  {
    return this.url == name;
  }
}
