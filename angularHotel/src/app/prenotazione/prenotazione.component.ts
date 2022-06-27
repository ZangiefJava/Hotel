import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { TipologiaCamera } from 'src/model/TipologiaCamera';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  arrTipologia: string[] = ["SUPERIOR"]


  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, "", new TipologiaCamera(0, "", 0)), new Cliente(0))
}
