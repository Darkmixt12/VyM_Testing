import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'; /* formularios */
import { FormsModule } from '@angular/forms'; /* formularios  --save rxjs-compat si no funciona el RXJS*/ 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /*angular material */


/* ANGULAR MATERIALS */

import { ReactiveFormsModule } from '@angular/forms'; 
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';



/* Componentes */
import { AppComponent } from './app.component';

import { MaterialModule } from 'src/material/material.module';
import { CreditoModule } from './components/credito/credito.module';
import { FacturaModule } from './components/factura/factura.module';
import { HomeModule } from './components/home/home.module';
import { PushmoneyModule } from './components/pushmoney/pushmoney.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FacturaModule,
    HomeModule,
    CreditoModule,
    PushmoneyModule,
    MaterialModule,
    SharedModule,


    BrowserModule,
    routing,


    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    

    
  ],
  providers: [appRoutingProviders,
  {
    provide: MAT_DATE_LOCALE, useValue : 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
