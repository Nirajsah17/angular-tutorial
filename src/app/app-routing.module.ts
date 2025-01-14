import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CAtegoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users/:id/:name', component: UsersComponent
  },
  {
    path: 'categories', component: CAtegoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
