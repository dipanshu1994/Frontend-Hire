import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/index/demo/demo.component'
import { SignupComponent } from './components/index/signup/signup.component';


const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
