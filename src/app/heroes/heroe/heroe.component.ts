import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css']
    
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

// ONE WAY DATA BINDING -> 'get'
// El get sirve para captar un dato y actualizarlo en el DOM
// A través del evento de un elemento HTML
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        // Los '$' sirven sólo para concatenar
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log("fjsfvbn");
        this.edad = 30;
    }

}