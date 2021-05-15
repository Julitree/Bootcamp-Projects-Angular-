import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './features/landing/landing.component';
import { LandingHeaderComponent } from './features/landing/landing-header/landing-header.component';
import { LandingHeroComponent } from './features/landing/landing-hero/landing-hero.component';
import { LandingAboutComponent } from './features/landing/landing-about/landing-about.component';
import { LandingContentComponent } from './features/landing/landing-content/landing-content.component';
import { LandingFooterComponent } from './features/landing/landing-footer/landing-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingAboutComponent,
    LandingContentComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
