import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-despacho-factura',
  templateUrl: './despacho-factura.component.html',
  styleUrls: ['./despacho-factura.component.css'],
  providers: [FacturaService],
})
export class DespachoFacturaComponent {
  nameAlistadorFilter = new FormControl('');
  optionsAlistador: string[] = ['Alonso', 'Brandon','Cesar','Daniel', 'Fernando','Guillermo','Jimmy', 'Jaime','James', 'Kenneth Quiroz', 'Kenneth Azofeifa','Luis', 'Maicol','Jordan','Luis Murcia','Luis Pastel','Richard'];
  filteredOptionsAlistador!: Observable<string[]>;
  
  formAddFactura: FormGroup; /* nombre del formulario en el HTML */
  faFileInvoiceDollar = faFileInvoiceDollar
 
   /* title!: string para inicializar si nnecesidad de igual a algo */
  public status!: String; /* sirve para cuando se guarde o no en la base de datos tire un mensaje */
constructor(
  private _facturaService: FacturaService,
  private fb: FormBuilder /* fb es la clase de formbuilder ayuda a crear formulario*/
){
  this.formAddFactura = this.fb.group({
    factura: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")] ], // cuando hay mas de una validacion color [ ] convirtiendo las validaciones en un Array
    pedido: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
    nameAlistador: [''],
  })

}

ngOnInit(){
  this.filteredOptionsAlistador = this.nameAlistadorFilter.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.optionsAlistador.filter(option1 => option1.toLowerCase().includes(filterValue));
}

// metodo para el segundo formulario
agregarFactura2(form: any){

  // PARA CAPTURAR UNO DE LOS DATOS QUE YA CAPTURAMOS EN EL INPUT PODEMOS HACER ESTO //
  //onst cliente = this.formAddFactura.get('cliente')?.value//

  const factura: Factura = {
    _id: '',
    facturasId: this.formAddFactura.value.factura,
    numPedido: this.formAddFactura.value.pedido,
    client: this.formAddFactura.value.cliente,
    fechaReg: this.formAddFactura.value.fechaReg,
    pushMoney: this.formAddFactura.value.pushM,
    nomAlistador: this.nameAlistadorFilter.value,
    nomChequeador: this.formAddFactura.value.nomChequeador,
    numMesa: this.formAddFactura.value.numMesa,
    fechaAlistado: this.formAddFactura.value.fechaAlistado,
    fechaChequeo: this.formAddFactura.value.fechaChequeo,
    horaChequeo: this.formAddFactura.value.horaChequeo,
    agente: this.formAddFactura.value.agente,
    push100: this.formAddFactura.value.push100,
    push50: this.formAddFactura.value.push50,
    push500: this.formAddFactura.value.push500,
    push1000: this.formAddFactura.value.push1000,
    push5000: this.formAddFactura.value.push5000,



    // public agente: String,
    // public push1000: String,
    // public push500: String,
    // public push100: String,
    // public push50: String,
    // public push5000: String,
    }
  this._facturaService.saveFactura(factura).subscribe(
    response => {
      if(response)
        this.status = 'success';
        form.reset()
        console.log(factura)
    },
    error =>{
      if(error){
        console.log(<any>error)
        this.status = 'failed'}
  console.log(factura);
}
); 

}


}
