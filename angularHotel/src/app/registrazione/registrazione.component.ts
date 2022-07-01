import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { RepositoryCliente } from 'src/model/RepositoryCliente';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(
    public repositoryCliente:RepositoryCliente
  ) { }
  newCliente:Cliente= new Cliente(0, "","", "", "", new Date())
  arrCliente:Cliente[] =[]
  ngOnInit(): void {
  }
  registra(){
    this.repositoryCliente.registra(this.newCliente).subscribe(risp=>{this.arrCliente=risp;})
    console.log("*** "+this.newCliente+ this.newCliente.id)
    this.newCliente= new Cliente(0,"","", "", "", new Date())
  }

}
