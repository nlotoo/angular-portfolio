import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnChanges {

  constructor() { }

  // ngOnInit(): void {
  //   console.log('sled towa')
  // }

  ActiveNav = ''
  ActiveNavAbout = ''
  ActiveNavExperience = ''
  ActiveNavPortfolio = ''
  ActiveNavContact = ''

  setACtiveNav(data: string) {


    if (data === '#') {
      this.ActiveNav = 'active-a-tag'
      this.ActiveNavExperience = ''
      this.ActiveNavPortfolio = ''
      this.ActiveNavAbout = ''
      this.ActiveNavContact = ''

    }
    else if (data === '#about') {
      this.ActiveNavAbout = 'active-a-tag'
      this.ActiveNavExperience = ''
      this.ActiveNavPortfolio = ''
      this.ActiveNav = ''
      this.ActiveNavContact = ''

    }
    else if (data === '#experience') {
      this.ActiveNavExperience = 'active-a-tag'
      this.ActiveNavAbout = ''
      this.ActiveNavPortfolio = ''
      this.ActiveNav = ''
      this.ActiveNavContact = ''

    }
    else if (data === '#portfolio') {
      this.ActiveNavPortfolio = 'active-a-tag'
      this.ActiveNav = ''
      this.ActiveNavExperience = ''
      this.ActiveNavAbout = ''
      this.ActiveNavContact = ''

    }
    else if (data === '#contact') {
      this.ActiveNavContact = 'active-a-tag'
      this.ActiveNav = ''
      this.ActiveNavExperience = ''
      this.ActiveNavAbout = ''
      this.ActiveNavPortfolio = ''
    }

    // this.ActiveNav === '#' ? 'active-a-tag' : ''
  }



  ngOnChanges() {

  }

}
