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

  
  arrTipologia:string[]=["SUPERIOR"]
  camera!:Camera
  cliente!:Cliente
  tipologiaCamera!:TipologiaCamera

  newPrenotazione:PrenotazioneCamera= new PrenotazioneCamera(+"", new Date(), new Date(), 100, this.camera, this.cliente, this.tipologiaCamera)
}
