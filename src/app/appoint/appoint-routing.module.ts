import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointComponent } from './appoint.component';
const routes: Routes = [
  {
    path: 'appoint',component:AppointComponent
  },
  
  {
    path: '',
    redirectTo: 'appoint',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointRoutingModule { }
