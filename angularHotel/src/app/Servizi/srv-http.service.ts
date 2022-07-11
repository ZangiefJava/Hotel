import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { Ospite } from 'src/model/Ospite';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { Servizio } from 'src/model/Servizio';
import { TipologiaCamera } from 'src/model/TipologiaCamera';
import { DatiUtenteService } from './dati-utente.service';


@Injectable({
  providedIn: 'root'
})
export class SrvHTTPService {
    
  url:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }
  
  
  findAll():Observable<TipologiaCamera[]>{
    return this.http.get<TipologiaCamera[]>(this.url+"/listaTipologiaCamera")
  }
  findAllCamera(id:number): Observable<Camera[]> {
    return this.http.post<Camera[]>(this.url+"/listaCamera", id)
  }
  registra(cliente:Cliente):Observable<Cliente[]>{    
    return this.http.post<Cliente[]>(this.url+"/registra", cliente)
  }
  registraOspite(ospite:Ospite):Observable<Ospite[]>{    
    return this.http.post<Ospite[]>(this.url+"/registraOspite", ospite)
  }
  prenota(prenotazione:PrenotazioneCamera):Observable<PrenotazioneCamera>{   
    console.log("*** "+ prenotazione.cliente?.user )
    return this.http.post<PrenotazioneCamera>(this.url+"/nuovaPrenotazioneCamera", prenotazione)
  }
  
  findAllCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+"/listaCliente")
  } 
  findAllServizio():Observable<Servizio[]>{
    return this.http.get<Servizio[]>(this.url+"/listaServizio")
  }  
  findAllPrenotazione(cliente:Cliente): Observable<PrenotazioneCamera[]> {
    return this.http.post<PrenotazioneCamera[]>(this.url+"/listaPrenotazione", cliente)
  } 

}
