import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
