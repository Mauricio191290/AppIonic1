import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about5',
  templateUrl: './about5.page.html',
  styleUrls: ['./about5.page.scss'],
})
export class About5Page implements OnInit {

  constructor(private router: Router) { }

  regresar(){
    this.router.navigate(['/'])
  }
  dataNames = [];
  dataJson:any;

  
  ngOnInit () {
    this.initializaIntems()
  }
 

  initializaIntems(){

    this.dataNames = [
      { 
        name: 'Fast In My Car',
        edad: '3:43',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      },
      {
        name: 'Now',
        edad: '4:07',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      },
      {
        name: 'Grow Up',
        edad: '3:51',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      }, 
      { 
        name: 'Last Hope',
        edad: '5:01',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      },
      { 
        name: 'Part II',
        edad: '4;51',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      },  
      { 
        name: 'Anklebiters',
        edad: '3:18',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      }, 
      { 
        name: 'Still Into You',
        edad: '4:58',
        img: 'https://img.discogs.com/93pGsCw1YRrBeqPJ2DIKP5YW5Cw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4456821-1391293963-5121.jpeg.jpg'
      }, 
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}
