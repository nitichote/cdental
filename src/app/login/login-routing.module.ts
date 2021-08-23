import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RecoveryComponent } from './recovery.component';

const routes: Routes = [ {
  path: '',component:LoginComponent,},
  {path: 'recovery',component:RecoveryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
