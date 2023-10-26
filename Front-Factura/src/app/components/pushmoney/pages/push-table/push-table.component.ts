import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/models/factura';
import { FacturaService } from 'src/services/factura.service';
import { PagesService } from 'src/services/pages.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-push-table',
  templateUrl: './push-table.component.html',
  styleUrls: ['./push-table.component.css'],
  providers: [FacturaService, PagesService] 
})
export class PushTableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['facturasId','agente','cliente','fechaRegDia_db','push50','push100','push500','push1000','push5000','Monto','acciones' ];
  dataSource = new MatTableDataSource<Factura>
  loading?: boolean


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('TABLE') table!: ElementRef;


  constructor(
    private _facturaService: FacturaService,
    private _pagesService: PagesService

  ){}



  ngOnInit(): void {
    this._pagesService.getFacturas().subscribe((r)=>{
      this.dataSource.data = r})
  }
  
  
  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  }


  //? Aplica el filtro a la tabla pero es global busca por todos los campos sus relaciones 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //? Funcion para exportar en excel el contenido de la tabla
  exportAsExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');

  }


}


