import { ViewChild, ElementRef, Injectable } from '@angular/core';
import { FacturaService } from './factura.service';


@Injectable()
export class PagesService {


  constructor(
    private _facturaService: FacturaService
  ) {}

  testPagesService(){
    console.log('Testing from Service Pages')
  }


}
