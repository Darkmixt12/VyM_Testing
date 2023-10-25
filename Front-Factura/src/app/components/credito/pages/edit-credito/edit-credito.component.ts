import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Ncredito } from 'src/models/notaCredito';
import { FacturaService } from 'src/services/factura.service';
import { ampo, estado } from 'src/services/selection';


@Component({
  selector: 'app-edit-credito',
  templateUrl: './edit-credito.component.html',
  styleUrls: ['./edit-credito.component.css'],
  providers: [FacturaService]
})
export class EditCreditoComponent implements OnInit 
{
formaddCredito: FormGroup;
operacion : string = 'Agregar '
id : string | undefined;
id1 : string | undefined;
  // selec del estado del producto devuelto 
  estados: estado[] = [
    {value: 'BUENO', viewValue: 'Bueno'},
    {value: 'MALO', viewValue: 'Malo'},
    {value: 'CAMBIO', viewValue: 'Cambio'},

  ];

  ampos: ampo[] = [
    {value: 'Ampo 1', viewValue: 'Ampo 1'},
    {value: 'Ampo 2', viewValue: 'Ampo 2'},
    {value: 'Ampo 3', viewValue: 'Ampo 3'},
    {value: 'Ampo 4', viewValue: 'Ampo 4'},
    {value: 'Ampo 5', viewValue: 'Ampo 5'},
    {value: 'Ampo 6', viewValue: 'Ampo 6'},
    {value: 'Ampo 7', viewValue: 'Ampo 7'},
    {value: 'Ampo 8', viewValue: 'Ampo 8'},
    {value: 'Ampo 9', viewValue: 'Ampo 9'},
    {value: 'Ampo 10', viewValue: 'Ampo 10'},
    {value: 'Ampo 11', viewValue: 'Ampo 11'},
    {value: 'Ampo 12', viewValue: 'Ampo 12'},
    {value: 'Ampo 13', viewValue: 'Ampo 13'},
    {value: 'Ampo 14', viewValue: 'Ampo 14'},
    {value: 'Ampo 15', viewValue: 'Ampo 15'},
    {value: 'Ampo 16', viewValue: 'Ampo 16'},
    {value: 'Ampo 17', viewValue: 'Ampo 17'},
    {value: 'Ampo 18', viewValue: 'Ampo 18'},
    {value: 'Ampo 19', viewValue: 'Ampo 19'},
    {value: 'Vapos', viewValue: 'Vapos'},

  ];
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public status!: String; /* variable para el mensaje de repetido en la base de datos */
  constructor(
    public dialog: MatDialogRef<EditCreditoComponent>, private fb: FormBuilder, private _facturaService: FacturaService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.formaddCredito = this.fb.group({ // Se conecta el archivo css con el archivo HTML  adentro de una etiqueta FORM
      numBoleta: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(5),Validators.pattern("^[0-9]*$")]],
      numCliente: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7),Validators.pattern("^[0-9]*$")]],
      agente: ['',Validators.required,],
      status: [null, Validators.required],
      detalle: [''],
      location: [null, Validators.required]
    })
    this.id = data.id
    console.log(this.id)

  }

ngOnInit() {
  this.esEditar(this.id)
}

esEditar(id: string | undefined) {
  if(id !== undefined){
    this.operacion = 'Editar'
    this.getCredito(id);
  }
}

getCredito(id: string){
  
 this._facturaService.getCreditoid(id).subscribe((data:any) => {
  console.log(data)
  console.log(data.credito.client)
  this.formaddCredito.patchValue({
    numBoleta: data.credito.creditoId,
    agente: data.credito.agente,
    numCliente: data.credito.client,
    status: data.credito.status,
    detalle: data.credito.description,
    location: data.credito.location,
    

  })

 })
}
  
btncancelar(){
  this.dialog.close({success: false});
}

addEditCredito2(formaddCredito: any) {
  if(formaddCredito.invalid){
    return;
  }
  const credito: Ncredito = {
    _id: this.formaddCredito.value._id,
    creditoId: this.formaddCredito.value.numBoleta,
    client: this.formaddCredito.value.numCliente,
    agente: this.formaddCredito.value.agente,
    status: this.formaddCredito.value.status,
    description: this.formaddCredito.value.detalle,
    location: this.formaddCredito.value.location,
    creditoRegDia_db: this.formaddCredito.value.creditoRegDia_db
  }

  if(this.id == undefined){
    // es agregar

    this._facturaService.saveCredito(credito).subscribe(
      response => {
        if(response)
        console.log(credito)
        this.mensajeDeUpdated('agregada');
      },
      error => {
        if(error){
          console.log(<any>error)
          this.status = 'failed'
        }
  
      }
  )
  }else{
    // es editar
    this._facturaService.updateCredito(this.id, credito).subscribe((data:any) =>{
      console.log(credito)
      this.mensajeDeUpdated('actualizada');
    })
  }
  this.dialog.close({success: true});

}

mensajeDeUpdated(operacion: string){

  this._snackBar.open(`Nota de credito  ${operacion} correctamente`, '', {
    duration: 2000,
    verticalPosition: this.verticalPosition
  });
}


}
