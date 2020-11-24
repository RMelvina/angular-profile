import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPgComponent } from './components/about-pg/about-pg.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ADASComponent } from './components/projects-pg/pages/adas/adas.component';
import { CAComponent } from './components/projects-pg/pages/ca/ca.component';
import { QCAComponent } from './components/projects-pg/pages/qca/qca.component';
import { WeatherComponent } from './components/projects-pg/pages/weather/weather.component';
import { ProjectsPgComponent } from './components/projects-pg/projects-pg.component';

const routes: Routes = [
  // {path:'', component: NavBarComponent},
  { path: '404', component: HomePgComponent },
  { path: 'about', component: AboutPgComponent },
  { path: 'projects', component: ProjectsPgComponent },
  { path: 'qca', component: QCAComponent },
  { path: 'ca', component: CAComponent },
  { path: 'adas', component: ADASComponent },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
