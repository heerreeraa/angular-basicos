// Todos nuestros componentes deben estar importador y declarados aquí
// ESTE ES EL MÓDULO RAÍZ O PRINCIPAL
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Teroía de la muñeca RUSA
    // Al importar el componente padre en el componente raíz
    // No hace falta que importemos todos sus hijos que ya 
    // están importados en el padre
    HeroesModule,
    ContadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
