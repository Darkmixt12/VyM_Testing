import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Factura } from '../models/factura';
import {Observable} from 'rxjs';
import { Global } from './global';
import { Ncredito } from 'src/models/notaCredito';


@Injectable()
export class FacturaService {
    public url:string;
    constructor(
      private _http: HttpClient,  
    ){
        this.url = Global.url
    }

    testService(){
        return 'Probando el servicio de angular';
    }

    saveFactura(factura:Factura): Observable<any>{
        
        let params = JSON.stringify(factura)
        let headers = new HttpHeaders().set('Content-Type','application/json'); /* oara que la informacion vaya en ese formato */

        return this._http.post(this.url+'facturas-save-check', params, {headers:headers});
    }

    saveCredito(credito:Ncredito): Observable<any>{
        
        let params = JSON.stringify(credito)
        let headers = new HttpHeaders().set('Content-Type','application/json'); /* oara que la informacion vaya en ese formato */

        return this._http.post(this.url+'credito-save-check', params, {headers:headers});
    }


    listaFacturas(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.get(this.url+'facturas-list', {headers: headers})
    }

    listaCreditos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.get(this.url+'creditos-list', {headers: headers})
    }

    getFactura(_id: string): Observable<Factura>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get<Factura>(this.url+'facturas/'+_id, {headers:headers})
    }

    deleteFactura(id: any): Observable<void>{
        return this._http.delete<void>(this.url+'facturas-deleted/'+id)
    }

    
    deleteCredito(id: any): Observable<void>{
        return this._http.delete<void>(this.url+'creditos-deleted/'+id)
    }


    updateFactura(id: any, factura: Factura): Observable<void>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put<void>(this.url+'facturas-updated/'+id, factura, {headers: headers})
    }

    updateCredito(id: any, notacredito: Ncredito): Observable<void>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put<void>(this.url+'creditos-updated/'+id, notacredito, {headers: headers})
    }

    getCreditoid(id: string): Observable<Ncredito>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get<Ncredito>(this.url+'credito/'+id, {headers:headers})
    }

}
