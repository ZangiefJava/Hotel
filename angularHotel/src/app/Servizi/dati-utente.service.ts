import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/Cliente';


@Injectable({
  providedIn: 'root'
})
export class DatiUtenteService {
  public cliente:Cliente = new Cliente("")
  constructor() { }
}
