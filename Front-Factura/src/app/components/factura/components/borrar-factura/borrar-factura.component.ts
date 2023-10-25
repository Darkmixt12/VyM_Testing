import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {MatSnackBar,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { FacturaService } from 'src/services/factura.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-borrar-factura',
  templateUrl: './borrar-factura.component.html',
  styleUrls: ['./borrar-factura.component.css'],
  providers: [FacturaService],
})
export class BorrarFacturaComponent implements OnInit {
  formDelete!: FormGroup; /* este es el nombre del form del HTMP GROUP */
  idDelete: number; /* se iguala a la _Id de la factura para que luego la reciba el DELETEFACTURA() y elimine*/
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _facturaService: FacturaService,
    private _snackBar: MatSnackBar,
    private readonly fb: FormBuilder,
    public dialog: MatDialogRef<BorrarFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    /* importar form builder para poder usar los form*/
    this.formDelete = this.fb.group({
      /* deletePasswordform es el input*/
      deletePasswordform: [data.id.deletePassword],
    });

    this.idDelete = data.id;
  }

  deleteFactura() {
          // si el valor del form .deletepasswordform es == a la contraseña entonces realiza el delete 
    if (this.formDelete.value.deletePasswordform == '1234') {
          // idDelete contiene el ID_ del objeto en la base de datos y asi lo borra
      this._facturaService.deleteFactura(this.idDelete).subscribe(() => {
        this.mensajeDeleteExito();
        this.dialog.close({ success: true });
      });
    }else{
      this.mensajeDeleteError();
    }
  }

  mensajeDeleteExito() {
    this._snackBar.open('Factura Eliminada con Exito', '', {
      duration: 2000,
      verticalPosition: this.verticalPosition,
    });
  }

  mensajeDeleteError() {
    this._snackBar.open('ERROR de Contraseña Digite de nuevo.', '', {
      duration: 2000,
      verticalPosition: this.verticalPosition,
    });
  }
  cancelar() {
    this.dialog.close({ success: false });
  }

  addDeletePersona1() {}

  ngOnInit(): void {}
}
