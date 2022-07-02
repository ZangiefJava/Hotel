import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/srv-http.service";
import { Cliente } from "./Cliente";




@Injectable({
    providedIn: 'root'
  }) 
export class RepositoryCliente{
    constructor(        
        public srvHTTPService:SrvHTTPService
    ){}
    
    registra(cliente:Cliente):Observable<Cliente[]>{
        return this.srvHTTPService.registra(cliente)
    }
    login(cliente:Cliente):Observable<Cliente[]>{
        return this.srvHTTPService.login(cliente)
    }
    
}