import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { Global } from 'src/services/global';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonaComponent } from '../edit-persona/edit-persona.component';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BorrarFacturaComponent } from '../borrar-factura/borrar-factura.component';



@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
  providers: [FacturaService] 
})
export class FacturasComponent implements OnInit, AfterViewInit  {

  filterPost = ''
  displayedColumns: string[] = ['facturasId','numPedido','cliente', 'fechaReg', 'fechaRegDia_db', 'acciones' ];
  dataSource = new MatTableDataSource<Factura> /* se necesita para hacer la tabla */
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

  addEditPersona(id?: number){
    const dialogRef = this.dialog.open(EditPersonaComponent, {
      width: '500px', disableClose: true,
      data: {id: id, id2: id}  /* esta es nuestra badera para saber si el usuario esta editando y que elemento */

      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.success){
        this.getFacturas()
      }
      });
      /* despues de cerrarse suscribase a un evento */

  }

  addDeletePersona(id?: number){
    const dialogRef = this.dialog.open(BorrarFacturaComponent, {
      width: '270px', disableClose: true,
      data: {id: id}

  }); 
    dialogRef.afterClosed().subscribe(result => {
      if(result.success){
        this.getFacturas()
      }

    });

  }

  deleteFactura(id:any){
      this._facturaService.deleteFactura(id).subscribe(() =>{
        this.getFacturas();
        this.mensajeDeleteExito();
      })
  }

  mensajeDeleteExito(){

    this._snackBar.open('Factura Eliminada con Exito', '', {
      duration: 2000,
      verticalPosition: this.verticalPosition
    });
  }

}
