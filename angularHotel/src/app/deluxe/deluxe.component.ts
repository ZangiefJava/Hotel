import { Component, OnInit } from '@angular/core';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-deluxe',
  templateUrl: './deluxe.component.html',
  styleUrls: ['./deluxe.component.css']
})
export class DeluxeComponent implements OnInit {

  constructor(
    public datiUtenteService:DatiUtenteService
  ) { }

  ngOnInit(): void {
  }
  prenota(){}
}
