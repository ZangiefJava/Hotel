import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
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
  

  //newPrenotazione:PrenotazioneCamera= new PrenotazioneCamera???
}
