import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* Ejemplo de una promesa en js
    const promesa = new Promise( (resolve, reject) => {

      if(false){
        resolve('Hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    })
    .catch( error => {
      console.log('Error en la promesa', error);
    });

    console.log('Fin del init');
    */
   
   // Promesa en angular

   this.getUsuarios().then ( usuarios => {
     console.log(usuarios);
   });

   }

   getUsuarios() {

    return new Promise( resolve => {
 
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));

    });

   }

}
