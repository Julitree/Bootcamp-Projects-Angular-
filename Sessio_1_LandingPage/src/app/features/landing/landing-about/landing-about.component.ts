import { Component, OnInit } from '@angular/core';
import { ContentAbout } from './models/contentAbout';

@Component({
  selector: 'app-landing-about',
  templateUrl: './landing-about.component.html',
  styleUrls: ['./landing-about.component.scss']
})
export class LandingAboutComponent implements OnInit {
public contentOne?:ContentAbout;

  constructor() { 
 this.contentOne = {
   title: 'LOREM IPSUM',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nec dui vel pretium Integer libero orci, porttitor in dictum pharetra, vehicula sed mi. Sed mollis blandit eros. Vestibulum molestie,augue sit amet vehicula commodo, dui nulla consectetur odio, eget efficitur purus risus vel lorem. Vestibulum interdum tristique cursus.'
 }
  }
  ngOnInit(): void {
  }

}
