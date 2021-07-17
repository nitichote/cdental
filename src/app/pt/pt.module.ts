import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtRoutingModule } from './pt-routing.module';
import { PtComponent } from './pt.component';
import { PtShowComponent } from './pt-show.component';
import { PtVisitComponent } from './pt-visit.component';


@NgModule({
  declarations: [
    PtComponent,
    PtShowComponent,
    PtVisitComponent
  ],
  imports: [
    CommonModule,
    PtRoutingModule
  ]
})
export class PtModule { }
