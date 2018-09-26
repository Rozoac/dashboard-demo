import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

const PAGES_ROUTES: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "graficos", component: GraficosComponent },
      { path: "progress", component: ProgressComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTER = RouterModule.forChild(PAGES_ROUTES);
