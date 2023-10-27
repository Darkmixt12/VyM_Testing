import { ViewChild, ElementRef, Injectable } from '@angular/core';
import { FacturaService } from './factura.service';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/models/factura';
import { Subject, Observable, map } from 'rxjs';

@Injectable()
export class PagesService {
  dataSource = new MatTableDataSource<Factura>();

  constructor(private _facturaService: FacturaService) {}

  testPagesService() {
    console.log('Testing from Service Pages');
  }

  // //? Jala la info de las facturas de la BQ y las muestra en la tabla //
  // getFacturas(): Observable<any> {
  //   var subject = new Subject<any>();

  //     this._facturaService.listaFacturas().subscribe(
  //       (response) => {

  //         if (response.facturasInfo) {
  //           console.log(response.facturasInfo); /* para que se llenen los campos */
  //           subject.next(response.facturasInfo);
  //         }
  //       },
  //       (error) => {
  //         console.log(<any>error);
  //       }
  //     );
  //   return subject.asObservable();
  // }

  //? Jala la info de las facturas de la BQ y las muestra en la tabla //

  getFacturas(): Observable<any> {
    return this._facturaService.listaFacturas();
  }

  // (response) => {
  //
  //   if (response.facturasInfo) {
  //     console.log(response.facturasInfo); /* para que se llenen los campos */

  // },
  // (error:any) => {
  //   console.log(<any>error);
  // }
  // );
  //return
}
