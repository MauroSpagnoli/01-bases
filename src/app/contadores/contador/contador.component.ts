import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`<h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base.toString()}}</strong></h3>
    
    <button (click)="acumular(base)" > + {{base}}</button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumular(-base)" > - {{base}}</button>
    `

})

export class ContadorComponent{
    titulo: string = 'Contador App'; //Variables que se le puede pasar a la template
    numero: number = 0;
    base: number = 5;
  
  
    acumular(valor:number){
      this.numero +=valor;
    }
}