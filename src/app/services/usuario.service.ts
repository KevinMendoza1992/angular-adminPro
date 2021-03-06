import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/login-form.interfaces';
import { RegisterForm } from '../interfaces/register-form.interfaces';

const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor(  private http: HttpClient,
                private router: Router,
                private ngZone: NgZone) { 
                  this.googleInit();
                }

  googleInit() {

    return new Promise( resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '815160275215-jhlh215e4qg1aebr8gab5kn5mu8a58dr.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })
  }

  logout() {
    localStorage.removeItem( 'token');

    this.auth2.signOut().then( () => {

      this.ngZone.run( () => {
        this.router.navigateByUrl('/login');
      })
    });
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map( resp => true),
      catchError( error => of(false))
    )
  }

  crearUsuario ( formData: RegisterForm) {
    
    /*Como se realiza una peticion http en anular */
    return this.http.post(`${ base_url }/usuarios`, formData)
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token);
                })
              );
  }
  
  login ( formData: LoginForm) {
    
    /*Como se realiza una peticion http en anular */
    return this.http.post(`${ base_url }/login`, formData)
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token);
                })
              );
  }

  loginGoogle ( token ) {
    
    return this.http.post(`${ base_url }/login/google`, {token})
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token);
                })
              );
  }

}

/* Para revisar peticiones http, se puede usar el httpclient de angular */