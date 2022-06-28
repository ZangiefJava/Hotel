import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/srv-http.service";
import { PrenotazioneCamera } from "./PrenotazioneCamera";


@Injectable({
    providedIn: 'root'
  }) 
export class RepositoryPrenotazione{
    constructor(        
        public srvHTTPService:SrvHTTPService
    ){}
    prenota(prenotazione:PrenotazioneCamera):Observable<PrenotazioneCamera[]>{
        return this.srvHTTPService.prenota(prenotazione)
    }
}