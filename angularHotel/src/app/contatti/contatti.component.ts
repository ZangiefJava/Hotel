import { Component, OnInit } from '@angular/core';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  constructor(
    public datiUtenteService:DatiUtenteService
  ) { }

  ngOnInit(): void {
  }

}
