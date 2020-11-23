import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutPgComponent } from './components/about-pg/about-pg.component';
import { IconsComponent } from './components/re_use/icons/icons.component';
import { ProjectsPgComponent } from './components/projects-pg/projects-pg.component';
import { ButtonsComponent } from './components/re_use/buttons/buttons.component';
import { SectionsComponent } from './components/re_use/sections/sections.component';
import { QCAComponent } from './components/projects-pg/pages/qca/qca.component';
import { CAComponent } from './components/projects-pg/pages/ca/ca.component';
import { ADASComponent } from './components/projects-pg/pages/adas/adas.component';
import { WebInfoPgComponent } from './components/re_use/web-info-pg/web-info-pg.component';
import { WeatherComponent } from './components/projects-pg/pages/weather/weather.component';
import { ImgComponent } from './components/re_use/img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePgComponent,
    AboutPgComponent,
    IconsComponent,
    ProjectsPgComponent,
    ButtonsComponent,
    SectionsComponent,
    QCAComponent,
    CAComponent,
    ADASComponent,
    WebInfoPgComponent,
    WeatherComponent,
    ImgComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
