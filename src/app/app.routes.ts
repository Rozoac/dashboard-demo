import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const APP_ROUTES: Routes = [

    {
        path: '' ,
        component: PagesComponent,
        children: [
            { path: 'dashboard' , component: DashboardComponent},
            { path: 'graficos' , component: GraficosComponent},
            { path: 'progress' , component: ProgressComponent},
            { path: '' , redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: '**' , component: NopagefoundComponent }
];

export const APP_ROUTER = RouterModule.forRoot(APP_ROUTES);
