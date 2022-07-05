import { Component, OnInit } from '@angular/core';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(
    public datiUtenteService:DatiUtenteService
  ) { }

  ngOnInit(): void {
  }
  
  addCamera(){}
}
