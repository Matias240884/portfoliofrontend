import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'panel', component:PanelComponent},
  {path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }