import { NgModule } from "@angular/core";
// MODULOS
import { SharedModule } from '../shared/shared.module';
import {DashboardComponent } from './dashboard/dashboard.component'
import {GraficosComponent } from './graficos/graficos.component'
import {ProgressComponent } from './progress/progress.component'
import {PagesComponent } from './pages.component'
//RUTAS
import { PAGES_ROUTER } from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficosComponent
  ],
  exports: [DashboardComponent, ProgressComponent, GraficosComponent],
  imports: [SharedModule, PAGES_ROUTER]
})
export class PagesModule {}


