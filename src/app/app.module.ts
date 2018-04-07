import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
 import { AppRoutingModule } from './/app-routing.module';
import { CategoriaComponent } from './categorias/categorias.component';
import { CategoriasService } from './services/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './services/clientes.service';
 
 
 @NgModule({
   declarations: [
   AppComponent,
   CategoriaComponent,
   ClientesComponent
    
  ],
   
   imports: [
     BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   ],

  providers: [CategoriasService, ClientesService],
   bootstrap: [AppComponent]
 })
 export class AppModule { }