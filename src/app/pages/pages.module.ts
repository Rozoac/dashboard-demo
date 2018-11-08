import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// MODULOS
import { SharedModule } from '../shared/shared.module';
import {DashboardComponent } from './dashboard/dashboard.component';
import {GraficosComponent } from './graficos/graficos.component';
import {ProgressComponent } from './progress/progress.component';
import {PagesComponent } from './pages.component';
import { PipesModule } from '../pipes/pipes.module';
// RUTAS
import { PAGES_ROUTER } from './pages.routes';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficosComponent,
    ProfileComponent,
    UsuariosComponent
  ],
  exports: [DashboardComponent, ProgressComponent, GraficosComponent],
  imports: [SharedModule, PAGES_ROUTER, PipesModule, FormsModule, CommonModule]
})
export class PagesModule {}


