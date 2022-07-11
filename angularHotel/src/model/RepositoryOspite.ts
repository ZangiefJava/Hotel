import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/Servizi/srv-http.service";
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
    
    getListaOspite():Observable<Ospite[]>{
        return this.srvHTTPService.findAllOspite()
    }
}