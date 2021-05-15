import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  public headerList?: string[];
  public headerLogo?: string;

  constructor() { 
    this.headerList = ['Home', 'About', 'Conntent'];
    this.headerLogo = 'Biker\' den'; 
  }

  ngOnInit(): void { 
  }

}
