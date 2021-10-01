import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about6',
  templateUrl: './about6.page.html',
  styleUrls: ['./about6.page.scss'],
})
export class About6Page implements OnInit {

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
        name: 'Hard Times',
        edad: '3:03',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      },
      {
        name: 'Rose-Colored Boy',
        edad: '3;33',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      },
      {
        name: 'Told You So',
        edad: '3:09',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      }, 
      { 
        name: 'Forgiveness	',
        edad: '3:40',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      },
      { 
        name: 'Fake Happy',
        edad: '3:56',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      },  
      { 
        name: '26',
        edad: '3:42',
        img: 'https://img.discogs.com/eykN3jA24Ngkxyc6sHdB5gn3xtc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10261049-1495515819-3444.jpeg.jpg'
      }, 
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}
