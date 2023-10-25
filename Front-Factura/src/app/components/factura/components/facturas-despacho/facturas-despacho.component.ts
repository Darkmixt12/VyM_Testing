import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { Global } from 'src/services/global';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
 

@Component({
  selector: 'app-facturas-despacho',
  templateUrl: './facturas-despacho.component.html',
  styleUrls: ['./facturas-despacho.component.css'],
  providers: [FacturaService] 
})
export class FacturasDespachoComponent implements OnInit, AfterViewInit{

displayedColumns: string[] = ['facturasId', 'numMesa','nomAlistador','nomChequeador', 'fechaAlistado','fechaChequeo', 'horaChequeo'];
  dataSource = new MatTableDataSource<Factura> /* se necesita para hacer la tabla */
  public facturasList!: Factura[];
  loading: boolean = false /* loading bar */
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

/* inyector de  dependencias */
  constructor(
    public dialog: MatDialog,
    private _facturaService: FacturaService,
    private _snackBar: MatSnackBar

  ){}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getFacturas();
  } /* no olvidar llamarl o bien NGONINIT */
getFacturas(){
    this.loading = true
    setTimeout(()=>{
      this._facturaService.listaFacturas().subscribe(
        response => {
          this.loading = false
          if(response.facturasInfo){
            this.dataSource.data = response.facturasInfo /* para que se llenen los campos */
          
          }
        },
        error => {
          console.log(<any> error);
        }
    )
    }, 700 )

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }













}
