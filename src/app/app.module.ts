import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//ROUTES
import { APP_ROUTER } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';

// LIBRERIAS EXTERNOS
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";

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
    SweetAlert2Module.forRoot(),
    BrowserModule,
    HttpClientModule,
    PagesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
