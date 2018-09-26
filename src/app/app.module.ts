import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//ROUTES
import { APP_ROUTER } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';

// LIBRERIAS EXTERNOS
import { ToastrModule } from 'ngx-toastr';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    APP_ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
