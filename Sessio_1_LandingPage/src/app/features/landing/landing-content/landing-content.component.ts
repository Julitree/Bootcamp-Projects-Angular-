import { Component, OnInit } from '@angular/core';
import { Icontent,articlesBlog } from './Icontent';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {
public contentOne?:Icontent;
public contentTwo?:Icontent;
public articleBlogOne?:articlesBlog;
public articleBlogTwo?:articlesBlog;
public articleBlogThree?:articlesBlog;

  constructor() { 
    this.contentOne={
      title: 'LOREM IPSUM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nec dui vel pretium Integer libero orci, porttitor in dictum pharetra, vehicula sed mi. Sed mollis blandit eros. Vestibulum molestie,augue sit amet vehicula commodo, dui nulla consectetur odio, eget efficitur purus risus vel lorem. Vestibulum interdum tristique cursus.',
      src:'../../../../assets/image/articleOne_bg.jpg',
      alt: 'woman_biking',
    },
    this.contentTwo={
      title: 'LOREM IPSUM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nec dui vel pretium Integer libero orci, porttitor in dictum pharetra, vehicula sed mi. Sed mollis blandit eros. Vestibulum molestie,augue sit amet vehicula commodo, dui nulla consectetur odio, eget efficitur purus risus vel lorem. Vestibulum interdum tristique cursus.',
      src:'../../../../assets/image/articleFive_bg.jpeg',
      alt: 'woman_biking',
    },
      this.articleBlogOne={
        contentOne:'Lorem ipsum',
        contentTwo: 'descubre más',
        src:'../../../../assets/image/articleFive_bg.jpeg',
        alt: 'woman_biking',
      },
      this.articleBlogTwo={
        contentOne:'Lorem ipsum',
        contentTwo: 'descubre más',
        src:'../../../../assets/image/articleThree_bg.jpeg',
        alt: 'woman_biking',
      },
      this.articleBlogThree={
        contentOne:'Lorem ipsum',
        contentTwo: 'descubre más',
        src:'../../../../assets/image/articleSix_bg.jpeg',
        alt: 'woman_biking',
      }
  }
  ngOnInit(): void {
  }

}
