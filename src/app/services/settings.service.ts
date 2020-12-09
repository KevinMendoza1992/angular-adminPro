import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  
  constructor() {
    
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    //Lo que hara la siguiente linea de codigo es cambiar el atributo href donde se encuentra la ruta que contiene el thema
    this.linkTheme.setAttribute('href', url);
   }

   changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    //Lo que hara la siguiente linea de codigo es cambiar el atributo href donde se encuentra la ruta que contiene el thema
    this.linkTheme.setAttribute('href', url);
    //lo que se hara a continuacion sera gurdar el tema en el local storage
    localStorage.setItem('theme', url);
    
     // ahora se usara la funcion checkcurrentTheme para que el check enlos temas se posicione en cada cuadro seleccionado
     this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }

    });

  }

}
