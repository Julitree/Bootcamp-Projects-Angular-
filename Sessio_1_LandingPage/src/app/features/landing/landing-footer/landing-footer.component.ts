import { Component, OnInit } from '@angular/core';
import { Footer } from './models/footer';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss']
})
export class LandingFooterComponent implements OnInit {
public infoFooter?:Footer;
  constructor() { 
    this.infoFooter={
      info:'Made By Julitree 2021',
      iconOne:'../../../../assets/image/icons/facebook.svg',
      iconTwo:'../../../../assets/image/icons/gorjeo.svg',
      iconThree:'../../../../assets/image/icons/instagram.svg',
    }
  }

  ngOnInit(): void {
  }

}
