import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EstadosComponent } from './estados/estados.component';
import { LoginComponent } from "@estados/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'estados', component: EstadosComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
 export class RoutingModule {}
