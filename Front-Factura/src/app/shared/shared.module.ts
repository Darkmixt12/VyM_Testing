import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from 'src/material/material.module';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    LoadingBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SearchBarComponent,
    LoadingBarComponent
  ]
})
export class SharedModule { }
