import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  page1(){
    this.router.navigate(['/dashboard']);
  }
  page2(){
    this.router.navigate(['/carousel']);
  }
  page3(){
    this.router.navigate(['/about3']);
  }
  page4(){
    this.router.navigate(['/about4']);
  }
  page5(){
    this.router.navigate(['/about5']);
  }
  page6(){
    this.router.navigate(['/about6']);
  }
}
