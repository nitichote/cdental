import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtShowComponent } from './pt-show.component';
import { PtVisitComponent } from './pt-visit.component';
import { PtComponent } from './pt.component';

const routes: Routes = [
  {
    path: '',component:PtComponent,
    children: [
      {
          path: '',  pathMatch: 'full',
          component: PtShowComponent,
         // canActivateChild: [AuthGuard, CalendarGuard]
      },
      {

          path: 'visit',
          component: PtVisitComponent,
         // canActivateChild: [AuthGuard, CalendarGuard]
      }
  ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtRoutingModule { }
