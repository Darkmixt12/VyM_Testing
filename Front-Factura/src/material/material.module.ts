import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    MatAutocompleteModule,

    
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,/* modulo de tabla */
    MatPaginatorModule,/* modulo para cambiar pagina */
    MatSortModule,/* modo para ordenar*/
    MatFormFieldModule,/* libreria para buscar */
    MatInputModule,/* libreria para buscar*/
    MatIconModule, /* libreria para iconos*/
    MatButtonModule, /* libreria para botones */
    MatTooltipModule, /* libreria para comentario al boton*/
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }