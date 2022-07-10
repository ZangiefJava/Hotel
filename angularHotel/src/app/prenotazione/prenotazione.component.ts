import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/model/Camera';
import { Cliente } from 'src/model/Cliente';
import { PrenotazioneCamera } from 'src/model/PrenotazioneCamera';
import { RepositoryCamera } from 'src/model/RepositoryCamera';
import { RepositoryPrenotazione } from 'src/model/RepositoryPrenotazione';
import { RepositoryTipologiaCamera } from 'src/model/RepositoryTipologiaCamera';
import { TipologiaCamera } from 'src/model/TipologiaCamera';
import { DatiPrenotazioneCameraService } from '../Servizi/dati-prenotazione-camera-service';
import { DatiUtenteService } from '../Servizi/dati-utente.service';
import { Servizio } from 'src/model/Servizio';
import { RepositoryServizio } from 'src/model/RepositoryServizio';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  arrCameraVuoto: Camera[]=[] //non rimuovere!
  arrTipologiaCamera: TipologiaCamera[] = []
  arrPrenotazione: PrenotazioneCamera[] = []
  arrServizio:Servizio[]=[] 
  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  prenotazione:PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  arrCamera:Camera[]=[]  
  tipologiaCamera:TipologiaCamera = new TipologiaCamera(0, "", 0, this.arrCameraVuoto) 
  dataInizio!:Date
  dataFine!:Date 
  servizio!:Servizio
  arrServizio2:Servizio[]=[]
  arrServizio3:Servizio[] = []
  
  
  
  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione,
    public repositoryTipologiaCamera:RepositoryTipologiaCamera,
    public repositoryCamera:RepositoryCamera,    
    public datiUtenteService:DatiUtenteService,
    public datiPrenotazioneCameraService:DatiPrenotazioneCameraService,
    public repositoryServizio:RepositoryServizio
  ) {}

  ngOnInit()
  {
    this.getLista(),
    this.getListaServizio()
       
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
     //let prezzoFinale:number = this.servizio.costo! + this.tipologiaCamera.costoC! 
     
     let newPrenotazione1 = new PrenotazioneCamera(0, this.dataInizio, this.dataFine, this.tipologiaCamera.costoC /*prezzoFinale*/, new Camera(id, new TipologiaCamera(1, "", 0), ""), new Cliente(this.datiUtenteService.cliente.user), this.arrServizio2)     
     this.repositoryPrenotazione.prenota(newPrenotazione1).subscribe(risp => { this.prenotazione = risp; console.log("*** ultimo id "+this.prenotazione.id); })
     console.log("*** "+this.dataInizio+ " "+this.dataFine + " " + this.datiUtenteService.cliente.user + " prenotazione: " + this.prenotazione)
    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(""), this.arrServizio3)   
   
  }
  getListaServizio(){
    this.repositoryServizio.getListaServizio()
              .subscribe(risp=>{
                this.arrServizio=risp;  
                console.log("*** LISTA SERVIZIO "+this.arrServizio.length+ " "+this.arrServizio+ " "+ this.datiPrenotazioneCameraService.prenotazioneCamera.id)
  })}
  selezionaSrv (servizio:Servizio){
    this.arrServizio2.push(servizio);
    // console.log("*** COSTO SERVIZIO "+ this.servizio.costo)
    return this.servizio
  }
  
}
