import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { RepositoryCliente } from 'src/model/RepositoryCliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newCliente:Cliente = new Cliente()
  arrCliente:Cliente[] =[]
  constructor(public repositoryCliente:RepositoryCliente) { }

  ngOnInit() {
    this.getListaCliente()
  }
  getListaCliente(){
    this.repositoryCliente.getListaCliente().subscribe(risp=>{this.arrCliente=risp;})
  }

  login(){
    /*console.log("*** "+this.newCliente.user + " " + this.newCliente.password)
    if(this.arrCliente.some(checkUser)
    function checkUser (this.newCliente.user){
      return user
    }){     
      alert("Benvenuto" + " "+ this.newCliente.user)
    }
    else{      
      alert("User o Password errati")
    }
    */
    //this.repositoryCliente.login(this.newCliente).subscribe(risp=>{this.arrCliente=risp;})
    //console.log("*** "+ this.newCliente.user + "login() entrato")    
  }
}
