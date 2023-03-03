import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        <!-- Al poner click entre paréntesis queremos decir
        que lo que hay dentro es un evento (hay varios) -->
        <button (click)="acumular( +base )"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    `,
    styleUrls: ['../../app.component.css']

})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        //Se utiliza 'this' para hacer 
        //referencia a la propiedad de la clase
        this.numero += valor;
    }

}