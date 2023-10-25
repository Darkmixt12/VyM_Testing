import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Ncredito } from 'src/models/notaCredito';
import { FacturaService } from 'src/services/factura.service';
import { EditCreditoComponent } from '../edit-credito/edit-credito.component';
import { BorrarFacturaComponent } from '../../../factura/components/borrar-factura/borrar-factura.component';
import { MatPaginator } from '@angular/material/paginator';
import {BorrarCreditoComponent } from '../borrar-credito/borrar-credito.component';

@Component({
  selector: 'app-notas-credito',
  templateUrl: './notas-credito.component.html',
  styleUrls: ['./notas-credito.component.css'],
  providers: [FacturaService]
})
export class NotasCreditoComponent implements OnInit, AfterViewInit{
displayedColumns: string[] = ['creditoId','client', 'agente','status', 'location', 'description', 'acciones']
loading: boolean = false;
dataSource = new MatTableDataSource<Ncredito>

@ViewChild(MatPaginator) paginator!: MatPaginator
constructor(
  public dialog: MatDialog,
  private _facturaService: FacturaService

){}

ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
}

ngOnInit(){
  this.getCreditos();
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

getCreditos(){
  this.loading = true;
  setTimeout(()=> {
    this._facturaService.listaCreditos().subscribe(
      response => {
        this.loading = false
        if(response.creditosInfo){
          this.dataSource.data = response.creditosInfo
        }
      },
      error => {
        console.log(<any> error)
      }
    )
  }, 700)
}

openAddEditCredito(id?: string){
  const dialogRef = this.dialog.open(EditCreditoComponent, {
    width: '550px', disableClose: true,

    data: {id:id}
  })
  dialogRef.afterClosed().subscribe(result => {
    if(result.success){
      this.getCreditos();
    }
  })
}

addDeletePersona(id?: number){
  const dialogRef = this.dialog.open(BorrarFacturaComponent, {
    width: '270px', disableClose: true,
    data: {id: id}
 })

}

addDeleteCredito(id?: number){
  const dialogRef = this.dialog.open(BorrarCreditoComponent, {
    width: '270px', disableClose: true,
    data: {id: id}
 })
 dialogRef.afterClosed().subscribe(result => {
  if(result.success){
    this.getCreditos()
  }

});
}
}