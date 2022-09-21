import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroehomeComponent } from '../heroes/pages/heroehome/heroehome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const route: Routes = [
  {
    path: '',

    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
