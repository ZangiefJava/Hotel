import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from 'src/model/Camera';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';


@Injectable({
  providedIn: 'root'
})
export class SrvHTTPService {
  url:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }
  
  
 prenota(prenotazione:PrenotazioneCamera):Observable<PrenotazioneCamera[]>{
    return this.http.post<PrenotazioneCamera[]>(this.url+"/nuovaPrenotazioneCamera", prenotazione)
  }
  findAll():Observable<Camera[]>{
    return this.http.get<Camera[]>(this.url+"/listaCamera")
  }

}
