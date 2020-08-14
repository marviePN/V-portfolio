import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutPortfolioComponent } from '../components/about-portfolio/about-portfolio.component';
import { HobbiesComponent } from '../components/hobbies/hobbies.component';
import { RelatedInformationComponent } from '../components/related-information/related-information.component';




const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full" 
  },
  {
    path: "aboutPortfolio",
    component: AboutPortfolioComponent,
    pathMatch: "full" 
  },
  {
    path: "hobbies",
    component: HobbiesComponent,
    pathMatch: "full" 
  },
  {
    path: "relatedInformation",
    component:RelatedInformationComponent,
    pathMatch:"full"

  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
