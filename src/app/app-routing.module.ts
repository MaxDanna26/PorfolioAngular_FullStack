import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { PorfolioItemComponent } from './pages/porfolio-item/porfolio-item.component';
import { ExtraComponent } from './pages/extra/extra.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutmeComponent },
  {path: 'item', component: PorfolioItemComponent},
  {path: 'extra', component: ExtraComponent},
  {path: '', pathMatch: 'full',redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
