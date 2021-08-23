import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointRoutingModule } from './appoint-routing.module';
import { AppointComponent } from './appoint.component';


@NgModule({
  declarations: [
    AppointComponent
  ],
  imports: [
    CommonModule,
    AppointRoutingModule
  ]
})
export class AppointModule { }
