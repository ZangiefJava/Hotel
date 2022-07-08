import { Component, OnInit } from '@angular/core';
import { RepositoryServizio } from 'src/model/RepositoryServizio';
import { Servizio } from 'src/model/Servizio';
import { DatiPrenotazioneCameraService } from '../Servizi/dati-prenotazione-camera-service';
//import { DatiPrenotazioneCameraService } from '../Servizi/dati-prenotazione-camera-service';



@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor(
    public repositoryServizio:RepositoryServizio,
    public datiPrenotazioneCameraService:DatiPrenotazioneCameraService
  ) { }

  ngOnInit(): void {
    this.getListaServizio()
    
  }

  arrServizio:Servizio[]=[]   
  msg!:string

  getListaServizio(){
    this.repositoryServizio.getListaServizio()
              .subscribe(risp=>{
                this.arrServizio=risp;  
                console.log("*** "+this.arrServizio.length+ " "+this.arrServizio+ " "+ this.datiPrenotazioneCameraService.prenotazioneCamera.id)
  })}
  

  selezionaSrv(id:number){
    
  }
}
