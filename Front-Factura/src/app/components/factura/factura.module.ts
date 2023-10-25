import { NgModule } from '@angular/core';
import { BorrarFacturaComponent } from './components/borrar-factura/borrar-factura.component';
import { DespachoFacturaComponent } from './components/despacho-factura/despacho-factura.component';
import { EditPersonaComponent } from './components/edit-persona/edit-persona.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { FacturasDespachoComponent } from './components/facturas-despacho/facturas-despacho.component';
import { MaterialModule } from 'src/material/material.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
	BorrarFacturaComponent,
	DespachoFacturaComponent,
	EditPersonaComponent,
	FacturasComponent,
	FacturasDespachoComponent


	
    //! PIPES // 

  ],
  imports: [
	MaterialModule,
	CommonModule,
	FontAwesomeModule
  ]
})
export class FacturaModule { }
