import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';
import { TipologiaCamera } from 'src/model/TipologiaCamera';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione
  ) { }

  ngOnInit(): void {
  }


  arrTipologia: string[] = ["SUPERIOR"]
  arrPrenotazione: PrenotazioneCamera[] = []

  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, "", new TipologiaCamera(0, "", 0)), new Cliente(""))

  prenota() {
    this.repositoryPrenotazione.prenota(this.newPrenotazione).subscribe(risp => { this.arrPrenotazione = risp; })

    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, "", new TipologiaCamera(0, "", 0)), new Cliente(""))
  }
}
