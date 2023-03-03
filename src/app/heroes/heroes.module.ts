import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Se declaran los 'submodulos' del modulo padre
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Se declaran los módulos que queremos que se vean fuera del padre
    exports: [
        ListadoComponent
    ],
    imports: [
        // CommonModule son las directivas personalizadas que utilizamos
        // En el HTML para jugar con la información. se importan a través 
        // de esta importacióm
        CommonModule
    ]

})

export class HeroesModule {

}