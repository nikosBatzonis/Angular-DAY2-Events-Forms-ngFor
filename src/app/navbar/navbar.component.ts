import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  title: string;
  contactUs: string;
  clickCount: number = 0;

  constructor() {
    this.contactUs = 'Contact-us';
    this.title = 'Car Rental';
  }
  countClick() {
    this.clickCount = this.clickCount + 10;
    console.log(this.clickCount);
  }

  ngOnInit(): void {}
}
