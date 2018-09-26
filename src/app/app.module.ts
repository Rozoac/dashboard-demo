import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NopagefoundComponent, DashboardComponent, ProgressComponent, GraficosComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
