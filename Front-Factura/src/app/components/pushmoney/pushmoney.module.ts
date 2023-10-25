import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushmoneyRoutingModule } from './pushmoney-routing.module';
import { PushTableComponent } from './pages/push-table/push-table.component';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PushTableComponent
  ],
  imports: [
    CommonModule,
    PushmoneyRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PushmoneyModule { }
