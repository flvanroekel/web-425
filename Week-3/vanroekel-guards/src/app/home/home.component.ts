import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Home Page!</h1>
  `,
  styles:[ `
  .home { 
    margin-right: 5%;
  margin-left: 5%;
  text-align: center
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}