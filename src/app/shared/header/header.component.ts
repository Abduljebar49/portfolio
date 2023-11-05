import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor(private router:Router){}
  openProject(event:number){
    switch(event){
      case 1: this.router.navigateByUrl('/projects'); break;
      case 2: this.router.navigateByUrl('/about'); break;
      case 3: this.router.navigateByUrl('contact'); break;
      default: '';
    }
      console.log("inside open project")
  }
}
