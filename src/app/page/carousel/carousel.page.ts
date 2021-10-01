import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {

  dataNames = [];
  dataJson:any;

  constructor(private router: Router) { }

  ngOnInit () {
    this.initializaIntems()
  }
  vista2(){
    this.router.navigate(['/'])
  }

  initializaIntems(){

    this.dataNames = [
      { 
        name: 'For A Pessimist I am Pretty Optimistic	',
        edad: '3:48',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'That is what you get',
        edad: '3:40',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'Hallelujah',
        edad: '3:28',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'Misery Business',
        edad: '3:31',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'When It Rains',
        edad: '3:35',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'Let The Flames Begin',
        edad: '3:18',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },   { 
        name: 'Crushcrushcrush',
        edad: '3:08',
        img: 'https://img.discogs.com/5g_Vomo852yowPNdnTAzVtVCT18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029049-1268421249.jpeg.jpg'
      },  
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }
}
