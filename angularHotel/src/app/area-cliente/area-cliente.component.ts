import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  constructor(
    public datiUtenteService: DatiUtenteService,
    public repositoryPrenotazione: RepositoryPrenotazione

  ) { }

  ngOnInit(): void {

  }
  cliente: Cliente = this.datiUtenteService.cliente

  arrPrenotazione?: PrenotazioneCamera[] = this.cliente.arrPrenotazione

  getListaPrenotazione(cliente: Cliente) {
    this.repositoryPrenotazione.getListaPrenotazione(cliente)
      .subscribe(risp => {
        this.arrPrenotazione = risp;
      })
  }
}
