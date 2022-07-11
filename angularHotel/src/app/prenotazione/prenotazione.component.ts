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
import { Ospite } from 'src/model/Ospite';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  arrCameraVuoto: Camera[] = [] //non rimuovere!
  arrTipologiaCamera: TipologiaCamera[] = []
  arrPrenotazione: PrenotazioneCamera[] = []
  arrServizio: Servizio[] = []
  newPrenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  prenotazione: PrenotazioneCamera = new PrenotazioneCamera(0, new Date(), new Date(), 500, new Camera(1, new TipologiaCamera(1, "", 0), ""), new Cliente(""))
  arrCamera: Camera[] = []
  tipologiaCamera: TipologiaCamera = new TipologiaCamera(0, "", 0, this.arrCameraVuoto)
  dataInizio!: Date
  dataFine!: Date
  servizio!: Servizio
  arrServizio2: Servizio[] = []
  arrServizio3: Servizio[] = []
  prezzoUltimo!: number
  newOspite: Ospite = new Ospite(0)
  arrOspite: Ospite[] = []

  constructor(
    public repositoryPrenotazione: RepositoryPrenotazione,
    public repositoryTipologiaCamera: RepositoryTipologiaCamera,
    public repositoryCamera: RepositoryCamera,
    public datiUtenteService: DatiUtenteService,
    public datiPrenotazioneCameraService: DatiPrenotazioneCameraService,
    public repositoryServizio: RepositoryServizio
  ) { }

  ngOnInit() {
    this.getLista(),
      this.getListaServizio()

  }

  getLista() {
    this.repositoryTipologiaCamera.getLista()
      .subscribe(risp => {
        this.arrTipologiaCamera = risp;
        console.log("*** " + this.arrTipologiaCamera.length + " " + this.arrTipologiaCamera)
      })
  }



  getListaCamera(tipologiaCamera: TipologiaCamera) {
    this.tipologiaCamera = tipologiaCamera
  }




  cameraXTipologia(id: number) {

    let prezzoUltimo2 = this.prezzoUltimo! + this.tipologiaCamera.costoC!
    console.log("*** PREZZO ULTIMO2 " + prezzoUltimo2)
    let newPrenotazione1 = new PrenotazioneCamera(0, this.dataInizio, this.dataFine, prezzoUltimo2, new Camera(id, new TipologiaCamera(1, "", 0), ""), new Cliente(this.datiUtenteService.cliente.user), this.arrServizio2)
    this.repositoryPrenotazione.prenota(newPrenotazione1).subscribe(risp => { this.prenotazione = risp; console.log("*** ultimo id " + this.prenotazione.id); })
    console.log("*** " + this.dataInizio + " " + this.dataFine + " " + this.datiUtenteService.cliente.user + " prenotazione: " + this.prenotazione)
    this.newPrenotazione = new PrenotazioneCamera(0, new Date(), new Date(), 100, new Camera(0, new TipologiaCamera(0, "", 0), ""), new Cliente(""), this.arrServizio3)

  }
  getListaServizio() {
    this.repositoryServizio.getListaServizio()
      .subscribe(risp => {
        this.arrServizio = risp;
        console.log("*** LISTA SERVIZIO " + this.arrServizio.length + " " + this.arrServizio + " " + this.datiPrenotazioneCameraService.prenotazioneCamera.id)
      })
  }


  onChange(servizio: Servizio, event: any): number {
    let prezzoFor: number = 0
    if (!event.target.checked) {
      this.arrServizio2.splice(this.arrServizio2.indexOf(servizio), 1)
      for (let i = 0; i < this.arrServizio2.length; i++) {
        prezzoFor = this.arrServizio2[i].costo! + prezzoFor
      }
      console.log("*** PREZZO FOR " + prezzoFor)
    }
    if (event.target.checked) {
      this.arrServizio2.push(servizio)
      for (let i = 0; i < this.arrServizio2.length; i++) {
        prezzoFor = this.arrServizio2[i].costo! + prezzoFor
      }
      console.log("*** PREZZO FOR " + prezzoFor)
    }
    return this.prezzoUltimo = prezzoFor
  }

  
  aggiungiOspite(){
    //this.repositoryOspite.registraOspite(this.newOspite).subscribe(risp=>{this.arrOspite=risp;})
    console.log("*** "+this.newOspite)
    this.newOspite= new Ospite(0, "", "", "")
  }
 
}
