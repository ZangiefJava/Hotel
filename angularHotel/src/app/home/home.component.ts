import { Component, OnInit } from '@angular/core';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public datiUtenteService:DatiUtenteService
  ) { }

  ngOnInit(): void {
  }

}
