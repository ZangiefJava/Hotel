import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { RepositoryCliente } from 'src/model/RepositoryCliente';
import { DatiUtenteService } from '../Servizi/dati-utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(
    public repositoryCliente:RepositoryCliente,
    public datiUtenteService:DatiUtenteService
  ) { }
  newCliente:Cliente= new Cliente("","", "", "")
  arrCliente:Cliente[] =[]
  ngOnInit(): void {
  }
  registra(){
    this.repositoryCliente.registra(this.newCliente).subscribe(risp=>{this.arrCliente=risp;})
    console.log("*** "+this.newCliente+ this.newCliente.user)
    this.newCliente= new Cliente("","", "", "")
  }

}
