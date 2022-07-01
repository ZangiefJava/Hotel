import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { RepositoryCliente } from 'src/model/RepositoryCliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!:string 
  password!:string
  arrCliente:Cliente[] =[]
  constructor(public repositoryCliente:RepositoryCliente) { }

  ngOnInit(): void {
  }
  

  login(){
    this.repositoryCliente.login(this.user, this.password).subscribe(risp=>{this.arrCliente=risp;})
    console.log("*** "+ "login() entrato")    
  }
}
