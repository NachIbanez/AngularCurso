import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms' // Importamos módulo de Angular para manejar formularios reactivos
import { HttpClientModule } from '@angular/common/http'; // Importamos módulo para realizar peticiones HTTP por medio del API REST

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
