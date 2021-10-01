import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about4',
  templateUrl: './about4.page.html',
  styleUrls: ['./about4.page.scss'],
})
export class About4Page implements OnInit {

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
        name: 'Misery Business',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      },
      {
        name: 'Born For This',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      },
      {
        name: 'Emergency',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      }, 
      { 
        name: 'Brighter',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      },
      { 
        name: 'When It Rains	',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      },  
      { 
        name: 'Decoy',
        edad: '3:21',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      }, 
      { 
        name: 'My Heart',
        edad: 'En vivo',
        img: 'https://images-na.ssl-images-amazon.com/images/I/712OXepdTKL._AC_SL1500_.jpg'
      }, 
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}
