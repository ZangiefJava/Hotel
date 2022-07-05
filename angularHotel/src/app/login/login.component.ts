import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Cliente';
import { DatiUtenteService } from '../Servizi/dati-utente.service';
import { LoginUtenteService } from '../Servizi/login-utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cliente:Cliente=new Cliente("","","","")
  msg:string=""
  constructor(
    public datiUtenteService:DatiUtenteService,
    public loginUtenteService:LoginUtenteService
  ) { }

  ngOnInit(): void {
    this.login()
    
  }

  login(){
    let res = new Cliente("","","","")
    this.datiUtenteService.cliente=new Cliente("","","","")
    this.loginUtenteService.verificaEsistenza(this.cliente)
      .subscribe(risp=>{
          res=risp;
          if (res != undefined){
            if(res.password== this.cliente.password){
              this.msg="DATI OK"
              this.datiUtenteService.cliente = res;
            }else{
              this.msg="DATI KO"
            }               
          }            
    })        
  }
  
    
}
