import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dataNames = [];
  dataJson:any;


  ngOnInit () {
    this.initializaIntems()
  }

  constructor(private router: Router) { }

  vista3(){
    this.router.navigate(['/'])
  }

  initializaIntems(){

    this.dataNames = [
      { 
        name: 'All We Know',
        edad: '3:13',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      },
      {
        name: 'Pressure',
        edad: '3:05',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      },
      {
        name: 'Emergency',
        edad: '4:00',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      }, 
      { 
        name: 'Brighter',
        edad: '3:33',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      },
      { 
        name: 'Never Let This Go',
        edad: '3:43',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      },  
      { 
        name: 'Whoa',
        edad: '3:21',
        img: 'https://img.discogs.com/8D8acOZ4T5R-wa_PQs1FiN_oKjw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1029060-1225414535.jpeg.jpg'
      }, 
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

  

}
