import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {

  

  constructor( private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    /* const url = `./assets/css/colors/${theme}.css`;
    //Lo que hara la siguiente linea de codigo es cambiar el atributo href donde se encuentra la ruta que contiene el thema
    this.linkTheme.setAttribute('href', url);
    //lo que se hara a continuacion sera gurdar el tema en el local storage
    localStorage.setItem('theme', url); */

    this.settingsService.changeTheme(theme);
  }

}
