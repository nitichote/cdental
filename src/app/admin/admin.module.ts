import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MemberComponent } from './member.component';
import { TxComponent } from './tx.component';
import { DxComponent } from './dx.component';


@NgModule({
  declarations: [
    AdminComponent,
    MemberComponent,
    TxComponent,
    DxComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
