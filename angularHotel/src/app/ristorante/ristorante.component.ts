import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneRisto } from 'src/model/PrenotazioneRisto';

@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.css']
})
export class RistoranteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cliente!:Cliente
  //newPrenotazioneRisto:PrenotazioneRisto= new PrenotazioneRisto(0, new Date() , 0,  this.cliente)
}
