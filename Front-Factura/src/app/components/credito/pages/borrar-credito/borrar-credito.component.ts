import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FacturaService } from 'src/services/factura.service';

@Component({
  selector: 'app-borrar-credito',
  templateUrl: './borrar-credito.component.html',
  styleUrls: ['./borrar-credito.component.css'],
  providers: [FacturaService]
})
export class BorrarCreditoComponent {
  formDelete: FormGroup;
  idDelete: string;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _facturaService: FacturaService,
    private _snackBar: MatSnackBar,
    private readonly fb: FormBuilder,
    public dialog: MatDialogRef<BorrarCreditoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    // importar el form buildp ara poder usar los form*/
    this.formDelete = this.fb.group({
      // es el input //
      deletePasswordform: [data.id.deletePassword]
    })

    this.idDelete = data.id;
  };


  deleteCredito() {
    // si el valor del form .deletepasswordform es == a la contraseña entonces realiza el delete 
if (this.formDelete.value.deletePasswordform == '6985') {
    // idDelete contiene el ID_ del objeto en la base de datos y asi lo borra
this._facturaService.deleteCredito(this.idDelete).subscribe(() => {
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
}
