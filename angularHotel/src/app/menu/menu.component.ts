import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public datiUtenteService:DatiUtenteService
  ) { }
  condition:string = "OK"
  ngOnInit(): void {

  }

}
