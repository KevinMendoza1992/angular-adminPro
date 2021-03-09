import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// instalacion : npm install sweetalert2
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSbmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [false, Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router) { }

  crearUsuario  () {
    this.formSbmitted = true;
    console.log(this.registerForm.value);

    if( this.registerForm.invalid ) {
      return;
    } 
    
    // Realizar el posteo
    this.usuarioService.crearUsuario( this. registerForm.value)
        .subscribe( resp => {
          // redireccionar cuando se logguea, ir al dashboard
          this.router.navigateByUrl('/');
        }, (err) => {
          // si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });
  }

  /*Validacion para que se llenen los campos de registro */
  campoNoValido( campo: string ):boolean {

    if( this.registerForm.get(campo).invalid && this.formSbmitted){
      return true;
    }else {
      return false;
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSbmitted;
  }

  contraseniasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if( (pass1 !== pass2) && this.formSbmitted) {
      return true;
    } else {
      return false;
    }
  }
 
  passwordsIguales( pass1Name: string, pass2Name: string) {

    return ( formGroup: FormGroup) => {
      
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

}
