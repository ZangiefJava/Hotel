import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/srv-http.service";

import { TipologiaCamera } from "./TipologiaCamera";



@Injectable({
    providedIn: 'root'
  }) 
export class RepositoryTipologiaCamera{
    constructor(        
        public srvHTTPService:SrvHTTPService
    ){}
    getLista():Observable<TipologiaCamera[]>{
        return this.srvHTTPService.findAll()
    }
}