import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/Servizi/srv-http.service";

import { Cliente } from "./Cliente";
import { Ospite } from "./Ospite";




@Injectable({
    providedIn: 'root'
  }) 
export class RepositoryOspite{
    constructor(        
        public srvHTTPService:SrvHTTPService
    ){}
    
    registraOspite(ospite:Ospite):Observable<Ospite[]>{
        return this.srvHTTPService.registraOspite(ospite)
    }
    
    getListaCliente():Observable<Cliente[]>{
        return this.srvHTTPService.findAllCliente()
    }
}