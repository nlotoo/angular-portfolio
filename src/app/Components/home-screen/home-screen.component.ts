import { Component, OnInit } from '@angular/core';
// import { style } from './home-screen.component.css'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],

})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  faCoffee = faCoffee;
  ngOnInit(): void {
  }

}
