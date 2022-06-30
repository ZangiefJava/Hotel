import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryCamera } from 'src/model/RepositoryCamera';

import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';
import { RepositoryTipologiaCamera } from 'src/model/RepositoryTipologiaCamera';

import { TipologiaCamera } from 'src/model/TipologiaCamera';


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
  arrCameraFiltrata = this.arrCamera.filter(camera => camera.tipologiaCamera == this.arrTipologiaCamera[0]);
  tipologiaCamera:TipologiaCamera = new TipologiaCamera(0, "", 0, this.arrCameraVuoto) 
  dataInizio!:Date
  dataFine!:Date
  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione,
    public repositoryTipologiaCamera:RepositoryTipologiaCamera,
    public repositoryCamera:RepositoryCamera

  ) {}

  ngOnInit()
  {
    this.getLista()    
  } 

  prenota() {
    this.repositoryPrenotazione.prenota(this.newPrenotazione).subscribe(risp => { this.arrPrenotazione = risp; })

    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(""))
  }
  getLista(){
    this.repositoryTipologiaCamera.getLista()
              .subscribe(risp=>{
                this.arrTipologiaCamera=risp;  
                console.log("*** "+this.arrTipologiaCamera.length+ " "+this.arrTipologiaCamera)
  })}
  
  getListaCamera(tipologiaCamera:TipologiaCamera) {
      this.tipologiaCamera= tipologiaCamera
    }
      
  

  cameraXTipologia(id:number){
     let newPrenotazione1 = new PrenotazioneCamera(0, this.dataInizio, this.dataFine, 500, new Camera(id, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
     this.repositoryPrenotazione.prenota(newPrenotazione1).subscribe(risp => { this.arrPrenotazione = risp; })
     console.log("*** "+this.dataInizio+ " "+this.dataFine)
    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(""))
    
  }
}
