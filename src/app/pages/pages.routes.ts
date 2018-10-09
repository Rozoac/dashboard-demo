import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'graficos', component: GraficosComponent, data: { titulo: 'Graficas' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTER = RouterModule.forChild(PAGES_ROUTES);
