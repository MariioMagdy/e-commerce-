import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1000, noPause: true} }
  ]
})
export class HomeComponent implements OnInit {

  constructor() {

   }

  //  Images = ['../assets/images/slider/slider-1.jpg', '../assets/images/slider/slider-2.jpg', '../assets/images/slider/slider-3.jpg'];

  //  SlideOptions = { items: 1, dots: true};
  //  CarouselOptions = { items: 3, dots: true, nav: true };




  ngOnInit(): void {
  }

}
