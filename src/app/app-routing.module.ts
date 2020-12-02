import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [  
   
  //path: '/dashboard' PageRouting
  //path: '/auth' AuthRouting
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    /* forRoot se usa para rutas principales*/
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
