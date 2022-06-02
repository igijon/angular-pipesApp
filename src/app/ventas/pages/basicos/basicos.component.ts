import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'inma';
  nombreUpper: string = 'INMA';
  nombreCompleto: string = 'iNma GijÓn';

  fecha: Date = new Date(); //El día de hoy

}
