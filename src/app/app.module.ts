import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PorfolioItemComponent } from './pages/porfolio-item/porfolio-item.component';
import { ExtraComponent } from './pages/extra/extra.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    PortfolioComponent,
    PorfolioItemComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
