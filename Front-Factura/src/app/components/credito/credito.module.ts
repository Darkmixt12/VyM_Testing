import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrarCreditoComponent } from './pages/borrar-credito/borrar-credito.component';
import { EditCreditoComponent } from './pages/edit-credito/edit-credito.component';
import { NotasCreditoComponent } from './pages/notas-credito/notas-credito.component';
import { MaterialModule } from 'src/material/material.module';





@NgModule({
  declarations: [
    
	BorrarCreditoComponent,
	EditCreditoComponent,
	NotasCreditoComponent
    //! PIPES // 

  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class CreditoModule { }
