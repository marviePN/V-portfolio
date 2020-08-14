import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutPortfolioComponent } from '../components/about-portfolio/about-portfolio.component';
import { HobbiesComponent } from '../components/hobbies/hobbies.component';
import { RelatedInformationComponent } from '../components/related-information/related-information.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutPortfolioComponent,
    HobbiesComponent,
    RelatedInformationComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
