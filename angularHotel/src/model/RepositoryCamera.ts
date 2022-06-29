import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/srv-http.service";
import { Camera } from "./Camera";



@Injectable({
    providedIn: 'root'
  }) 
export class RepositoryCamera{
    constructor(        
        public srvHTTPService:SrvHTTPService
    ){}
    
    getListaCamera(id:number):Observable<Camera[]>{
        return this.srvHTTPService.findAllCamera(id)
    }
    
}