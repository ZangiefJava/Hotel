import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/Cliente';


@Injectable({
  providedIn: 'root'
})

export class LoginUtenteService {

  url: string = "http://localhost:8080"

  constructor(
    private http:HttpClient
  ) { }

  verificaEsistenza(cliente:Cliente):Observable<Cliente>{   
    console.log("*** "+ cliente.user)  
    return this.http.post<Cliente>(this.url+"/findById", cliente)
     
  }
  
}

