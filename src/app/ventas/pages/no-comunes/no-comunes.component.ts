import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Inma';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = [
    'María',
    'Enrique',
    'Luis',
    'Eduardo'
  ];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    this.nombre = 'Ricardo';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Inma',
    edad: 35,
    dirección: 'Miguelturra, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
