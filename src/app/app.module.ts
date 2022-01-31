import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {FormsModule} from "@angular/forms";
import { ModalPersonalizadoComponent } from './components/modal-personalizado/modal-personalizado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {IvyCarouselModule} from "angular-responsive-carousel";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CronometroComponent,
    FormularioComponent,
    ListaComponent,
    PrincipalComponent,
    ModalPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    IvyCarouselModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
