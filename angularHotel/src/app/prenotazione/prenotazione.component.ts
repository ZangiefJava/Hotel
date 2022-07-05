import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryCamera } from 'src/model/RepositoryCamera';

import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';
import { RepositoryTipologiaCamera } from 'src/model/RepositoryTipologiaCamera';
import { Servizio } from 'src/model/Servizio';

import { TipologiaCamera } from 'src/model/TipologiaCamera';
import { DatiUtenteService } from '../Servizi/dati-utente.service';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  arrCameraVuoto: Camera[]=[]
  arrTipologiaCamera: TipologiaCamera[] = []
  arrPrenotazione: PrenotazioneCamera[] = []
  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  arrCamera:Camera[]=[]   
  tipologiaCamera:TipologiaCamera = new TipologiaCamera(0, "", 0, this.arrCameraVuoto) 
  dataInizio!:Date
  dataFine!:Date
  arrServizio: Servizio[] = []
  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione,
    public repositoryTipologiaCamera:RepositoryTipologiaCamera,
    public repositoryCamera:RepositoryCamera,
    public datiUtenteService:DatiUtenteService


  ) {}

  ngOnInit()
  {
    this.getLista()    
  } 
  
  getLista(){
    this.repositoryTipologiaCamera.getLista()
              .subscribe(risp=>{
                this.arrTipologiaCamera=risp;  
                console.log("*** "+this.arrTipologiaCamera.length+ " "+this.arrTipologiaCamera)
  })}
  /*
  getListaServizio(){
    this.repositoryServizio.getListaServizio()
              .subscribe(risp=>{
                this.arrServizio=risp;  
                console.log("*** "+this.arrServizio.length+ " "+this.arrServizio)
  })}
  */
  getListaCamera(tipologiaCamera:TipologiaCamera) {
      this.tipologiaCamera= tipologiaCamera
    }
      
  

  cameraXTipologia(id:number){
     let newPrenotazione1 = new PrenotazioneCamera(0, this.dataInizio, this.dataFine, this.tipologiaCamera.costoC, new Camera(id, new TipologiaCamera(1, "", 0), ""), new Cliente(this.datiUtenteService.cliente.user))
     this.repositoryPrenotazione.prenota(newPrenotazione1).subscribe(risp => { this.arrPrenotazione = risp; })
     console.log("*** "+this.dataInizio+ " "+this.dataFine)
    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(this.datiUtenteService.cliente.user))
    
  }
}
