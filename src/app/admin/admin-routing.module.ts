import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MemberComponent } from './member.component';
import { TxComponent } from './tx.component';

const routes: Routes = [
  {
    path: '',component:AdminComponent,
    children: [
      {
          path: '',  pathMatch: 'full',
          component: MemberComponent,
         // canActivateChild: [AuthGuard, CalendarGuard]
      },
      {

          path: 'tx',
          component: TxComponent,
         // canActivateChild: [AuthGuard, CalendarGuard]
      }
  ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
