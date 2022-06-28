import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryCamera } from 'src/model/RepositoryCamera';
import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';

import { TipologiaCamera } from 'src/model/TipologiaCamera';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  arrTipologia: TipologiaCamera[] = []
  arrPrenotazione: PrenotazioneCamera[] = []
  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  arrCamera:Camera[]=[]
  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione,
    public repositoryCamera:RepositoryCamera
  ) {}

  ngOnInit(){this.getLista()}

  prenota() {
    this.repositoryPrenotazione.prenota(this.newPrenotazione).subscribe(risp => { this.arrPrenotazione = risp; })

    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(""))
  }
  getLista(){this.repositoryCamera.getLista()
              .subscribe(risp=>{
                this.arrCamera=risp;  
                console.log("*** "+this.arrCamera.length+ " "+this.arrCamera)
  })}
}
