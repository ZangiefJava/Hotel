import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SrvHTTPService } from "src/app/Servizi/srv-http.service";
import { Servizio } from "./Servizio";





@Injectable({
    providedIn: 'root'
})
export class RepositoryServizio {
    constructor(
        public srvHTTPService: SrvHTTPService
    ) { }

    getListaServizio(): Observable<Servizio[]> {
        return this.srvHTTPService.findAllServizio()
    }

}