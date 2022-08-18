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


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutMeComponent,
    ContactMeComponent,
    ExperienceComponent,
    NavigationComponent,
    PorfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
