import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './Components/home-screen/home-screen.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { ContactFormComponent } from './Components/contact-me/contact-form/contact-form/contact-form.component'

import { IconModule } from '@ant-design/icons-angular';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutMeComponent,
    ContactMeComponent,
    ExperienceComponent,
    NavigationComponent,
    PorfolioComponent,
    ContactFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,

    IconModule,
    FontAwesomeModule,
    NzIconModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    
    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }