import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';
import {MatSelectModule} from '@angular/material/select';
import { DateAdapter } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';
// SELECT NUMERO DE MESA //
interface mesa {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FacturaService,
  {provide: LOCALE_ID, useValue: 'es-ES'}],

})
export class HomeComponent implements OnInit {
  // SELECT PARA NUMERO DE MESA
  mesas: mesa[] = [
    {value: 'MESA 1', viewValue: '1'},
    {value: 'MESA 2', viewValue: '2'},
    {value: 'MESA 3', viewValue: '3'},
  ];
  maxDate: Date;
  // AUTO SELECT INTELIGENTE DEL FORM ALISTADOR
  nameAlistadorFilter = new FormControl('');
  optionsAlistador: string[] = ['Daniel', 'Brandon','Cesar', 'Fernando','Guillermo','Jimmy', 'Jaime','James', 'Kenneth Quiroz', 'Kenneth Azofeifa','Luis','Jair', 'Maicol','Jordan','Luis Murcia','Luis Pastel','Richard'];
  filteredOptionsAlistador!: Observable<string[]>;
  // AUTO FILTRADO DEL FORM CHEQUEADOR 
  nameChequeadorFilter = new FormControl('');
  optionsChequeador: string[] = ['Daniel', 'Brandon','Cesar','Fernando','Guillermo','Jimmy', 'Jaime','James', 'Kenneth Quiroz', 'Kenneth Azofeifa','Luis', 'Maicol','Jair','Jordan','Luis Murcia','Luis Pastel','Richard'];
  filteredOptionsChequeador!: Observable<string[]>;

    formAddFactura: FormGroup; /* nombre del formulario en el HTML */
    faFileInvoiceDollar = faFileInvoiceDollar
   
     /* title!: string para inicializar si nnecesidad de igual a algo */
    public status!: String; /* sirve para cuando se guarde o no en la base de datos tire un mensaje */
  constructor(
    private dateAdapter: DateAdapter<any>,
    private _facturaService: FacturaService,
    private fb: FormBuilder /* fb es la clase de formbuilder ayuda a crear formulario*/
  ){
    this.maxDate = new Date();
    this.formAddFactura = this.fb.group({
      factura: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")] ], // cuando hay mas de una validacion color [ ] convirtiendo las validaciones en un Array
      cliente: ['',Validators.required],
      fechaReg: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      numPedido: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      nameChequeador: [''],
      nameAlistador: [''],
      fechaAlistado: [null,Validators.required],
      fechaChequeo: [null,Validators.required],
      horaChequeo: ['',[Validators.required,Validators.pattern("^[0-9:]+PM|pm|AM|am$")]], 
      numMesa: ['',Validators.required]
    })
    dateAdapter.setLocale('es');
  }

  ngOnInit(){
    this.filteredOptionsAlistador = this.nameAlistadorFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptionsChequeador = this.nameChequeadorFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || ''))
    )
  }
  
  private _filter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.optionsChequeador.filter(option => option.toLowerCase().includes(filterValue2));
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
      numPedido: this.formAddFactura.value.numPedido,
      client: this.formAddFactura.value.cliente,
      fechaReg: this.formAddFactura.value.fechaReg.toISOString().slice(0,10),
      pushMoney: this.formAddFactura.value.pushM,
      nomAlistador: this.nameAlistadorFilter.value,
      nomChequeador: this.nameChequeadorFilter.value,
      numMesa: this.formAddFactura.value.numMesa,
      fechaAlistado: this.formAddFactura.value.fechaAlistado.toISOString().slice(0,10),
      fechaChequeo: this.formAddFactura.value.fechaChequeo.toISOString().slice(0,10),
      horaChequeo: this.formAddFactura.value.horaChequeo,
      agente: this.formAddFactura.value.agente,
      push100: this.formAddFactura.value.push100,
      push50: this.formAddFactura.value.push50,
      push500: this.formAddFactura.value.push500,
      push1000: this.formAddFactura.value.push1000,
      push5000: this.formAddFactura.value.push5000,
      
    }

    this._facturaService.saveFactura(factura).subscribe(
      response => {
        if(response )
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
