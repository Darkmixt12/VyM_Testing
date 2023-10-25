import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { faUserPen, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { DateAdapter } from '@angular/material/core';
import {filter, map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

// select para numero de mesa
interface mesa {
  value: string;
  viewValue: string;
}
interface alistador {
  value: string;
  viewValue: string;
}

interface chequeador {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css'],
  providers: [FacturaService] 
})
export class EditPersonaComponent  {
// selec del numero de mesa
  mesas: mesa[] = [
    {value: 'MESA 1', viewValue: '1'},
    {value: 'MESA 2', viewValue: '2'},
    {value: 'MESA 3', viewValue: '3'},

  ];
  // AUTO SELECT INTELIGENTE DEL FORM ALISTADOR
  alistadores: alistador[] = [
    {value: 'Daniel', viewValue: 'Daniel'},
    {value: 'Brandon', viewValue: 'Brandon'},
    {value: 'Cesar', viewValue: 'Cesar'},
    {value: 'Fernando', viewValue: 'Fernando'},
    {value: 'Deivis', viewValue: 'Deivis'},
    {value: 'Guillermo', viewValue: 'Guillermo'},
    {value: 'Jose David', viewValue: 'Jose David'},
    {value: 'James', viewValue: 'James'},
    {value: 'Jimmy', viewValue: 'Jimmy'},
    {value: 'Jaime', viewValue: 'Jaime'},
    {value: 'Jordan', viewValue: 'Jordan'},
    {value: 'Kenneth Quiroz', viewValue: 'Kenneth Quiroz'},
    {value: 'Kenneth Azofeifa', viewValue: 'Kenneth Azofeifa'},
    {value: 'Maicol', viewValue: 'Maicol'},
    {value: 'Richard', viewValue: 'Richard'},
    {value: 'Luis Murcia', viewValue: 'Luis Murcia'},
    {value: 'Luis Pastel', viewValue: 'Luis Pastel'},
    {value: 'Franco', viewValue: 'Franco'},
    {value: 'Jeremy', viewValue: 'Jeremy'},
  ];

    // AUTO SELECT INTELIGENTE DEL FORM ALISTADOR
    chequeadores: chequeador[] = [
      {value: 'Daniel', viewValue: 'Daniel'},
      {value: 'Brandon', viewValue: 'Brandon'},
      {value: 'Cesar', viewValue: 'Cesar'},
      {value: 'Deivis', viewValue: 'Deivis'},
      {value: 'Fernando', viewValue: 'Fernando'},
      {value: 'Guillermo', viewValue: 'Guillermo'},
      {value: 'Jose David', viewValue: 'Jose David'},
      {value: 'James', viewValue: 'James'},
      {value: 'Jimmy', viewValue: 'Jimmy'},
      {value: 'Jaime', viewValue: 'Jaime'},
      {value: 'Jordan', viewValue: 'Jordan'},
      {value: 'Kenneth Quiroz', viewValue: 'Kenneth Quiroz'},
      {value: 'Kenneth Azofeifa', viewValue: 'Kenneth Azofeifa'},
      {value: 'Maicol', viewValue: 'Maicol'},
      {value: 'Richard', viewValue: 'Richard'},
      {value: 'Luis Murcia', viewValue: 'Luis Murcia'},
      {value: 'Luis Pastel', viewValue: 'Luis Pastel'},
      {value: 'Franco', viewValue: 'Franco'},
      {value: 'Jeremy', viewValue: 'Jeremy'},
      
    ];
  
  maxDate: Date;
  faUserPen = faUserPen
  faFilePen = faFilePen
  form!: FormGroup;  // formulario del HTML
  id: number | undefined; // variable donde se asigna la ID que pasa por el DIALOG
  verticalPosition: MatSnackBarVerticalPosition = 'top'; // posicion donde se va a monstrar el mensaje al eliminar algo o editar
  constructor(
    private dateAdapter: DateAdapter<any>,
    private _facturaService: FacturaService, // improta el servicio factura con los metodos //
    public dialog: MatDialogRef<EditPersonaComponent>, // selecciona en si el componente donde se abre la ventanita al dar click en el boton //
    private fb: FormBuilder, // variable para creacion de formularios
    private _snackBar: MatSnackBar, // variable para mensajes emergentes
    
    /* este form sirve para llenar los campos automatica en el EDITAR para guiar un poco al usuario en su uso*/
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.maxDate = new Date();
      this.form = this.fb.group({
        cliente: [data.id.client],
        pushMoney: [data.id.pushMoney],
        fechaReg: [data.id.fechaReg],
        nameAlistador: [data.id.nomAlistador],
        nameChequeador: [data.id.nomChequeador],
        numMesa: [data.id.numMesa],
        fechaAlistado: [data.id.fechaAlistado],
        horaChequeo: [data.id.horaChequeo],
        fechaChequeo: [data.id.fechaChequeo]
        
        /* FORMULARIO PARA EDIT */
      })
  
      // JALA EL NUMERO DE LA FACTURA PARA AGREGARLA EN HTML 
      this.id = data.id.facturasId;
      
    //console.log(this.id)
  }

  ngOnInit(){

  }
  

  getFactura(id: string){
    this._facturaService.getFactura(id).subscribe(
      response =>{
        if(response){
          console.log(response)
        }
      }
      )

  }

  updatedFactura(id: any){
    const factura: Factura ={
      _id: this.form.value._id,
      facturasId: this.form.value.facturasId,
      numPedido: this.form.value.numPedido,
      client: this.form.value.cliente,
      fechaReg: this.form.value.fechaReg,
      pushMoney: this.form.value.pushMoney,
      nomAlistador: this.form.value.nameAlistador,
      nomChequeador: this.form.value.nameChequeador,
      numMesa: this.form.value.numMesa,
      fechaAlistado: this.form.value.fechaAlistado,
      fechaChequeo: this.form.value.fechaChequeo,
      horaChequeo: this.form.value.horaChequeo,
      agente: this.form.value.agente,
      push100: this.form.value.push100,
      push50: this.form.value.push50,
      push500: this.form.value.push500,
      push1000: this.form.value.push1000,
      push5000: this.form.value.push5000,

    }
    this._facturaService.updateFactura(this.data.id._id, factura).subscribe((data:any) => {
    console.log(data)
    })

    this.dialog.close({success: true});
    this.mensajeDeUpdated();
  }

  mensajeDeUpdated(){

      this._snackBar.open('Factura Editada con Exito', '', {
        duration: 2000,
        verticalPosition: this.verticalPosition
      });
  }
  
  btncancelar(){
    this.dialog.close({success: false});
  }

  addEditPersona(){
}


}

