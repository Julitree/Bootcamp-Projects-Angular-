import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'app-landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.scss']
})
export class LandingHeroComponent implements OnInit {
public heroHome?:Hero;
  constructor() {
    this.heroHome ={
      src:'../../../../assets/image/home_bg.jpg',
      alt: 'woman_biking',
    }
   }


  ngOnInit(): void {
  }

}
