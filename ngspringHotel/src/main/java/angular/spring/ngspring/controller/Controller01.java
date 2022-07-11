package angular.spring.ngspring.controller;

import angular.spring.ngspring.model.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class Controller01
{

    @Autowired
    SrvPrenotazioneCamera srvPrenotazioneCamera;
    @Autowired
    SrvTipologiaCamera srvTipologiaCamera;
    @Autowired
    SrvCamera srvCamera;
    @Autowired
    SrvCliente srvCliente;
    @Autowired
    SrvServizio srvServizio;
    @Autowired
    SrvOspite srvOspite;
   
    
    @RequestMapping(value ={"/nuovaPrenotazioneCamera"})
    @ResponseBody
    public PrenotazioneCamera nuovaPrenotazioneCamera(
            @RequestBody PrenotazioneCamera prenotazioneCamera)
    {
        PrenotazioneCamera prenotazione;
        prenotazione = srvPrenotazioneCamera.nuovaPrenotazioneCamera(prenotazioneCamera);
        System.out.println("Controller prenotazione" + prenotazione.getId());
        return prenotazione;
        
        
    }

    @RequestMapping(value ={"/listaTipologiaCamera"})
    @ResponseBody
    public List<TipologiaCamera> listaTipologiaCamera()
    {
        System.out.println("ListaTipologiaCamera OK");
        List<TipologiaCamera> lista = srvTipologiaCamera.listaTipologiaCamera();
        for (TipologiaCamera c : lista)
        {
            System.out.println("> " + c);
        }
        return lista;
    }

    @RequestMapping(value ={"/listaCamera"})
    @ResponseBody
    public List<Camera> listaCamera(@RequestBody Long id)
    {
        System.out.println("ListaCamera OK");
        List<Camera> lista = srvCamera.findByIdTipologia(id);
        for (Camera c : lista)
        {
            System.out.println("> " + c);
        }
        return lista;
    }

    @RequestMapping(value ={"/registra"})
    @ResponseBody
    public List<Cliente> registra(@RequestBody Cliente cliente)
    {
        System.out.println("ecco");
        srvCliente.registra(cliente);
        return srvCliente.lista();
    }
    @RequestMapping(value ={"/registraOspite"})
    @ResponseBody
    public List<Ospite> registraOspite(@RequestBody Ospite ospite)
    {
        System.out.println("ecco registra Ospite");
        srvOspite.registraOspite(ospite);
        return srvOspite.lista();
    }
    @RequestMapping(value ={"/listaCliente"})
    @ResponseBody
     public List<Cliente> listaCliente()
     {      
         return srvCliente.lista();
     }
     
    @RequestMapping(value = {"/findById"})
    @ResponseBody    
    public Cliente findById(
        @RequestBody Cliente cliente){
        System.out.println("Cliente Controller " + cliente);        
        return srvCliente.findById(cliente);
    }
    
    @RequestMapping(value ={"/listaServizio"})
    @ResponseBody
     public List<Servizio> listaServizio()
     {      
         return srvServizio.lista();
     }
     
    @RequestMapping(value ={"/listaPrenotazione"})
    @ResponseBody
    public List<PrenotazioneCamera> listaPrenotazione(@RequestBody Cliente cliente)
    {
        System.out.println("Controller ListaPrenotazione OK");
        return srvPrenotazioneCamera.findByCliente(cliente);
    }
    
    /*
    @RequestMapping("/login")
    @ResponseBody
    public List<Cliente> login(@RequestBody Cliente cliente)            
    {     
        
        srvCliente.login(cliente);
        return srvCliente.lista();
    }
    */
  
    
    /*
    @RequestMapping(value = {"/findById"})
    @ResponseBody    
    public Auto findById(
        @RequestBody Long id){
        return srvAuto.findById(id);
    } 
    
    @RequestMapping(value = {"/listaAuto"})
    @ResponseBody    
    public List<Auto> listaAuto(){
        List<Auto> lista = srvAuto.listaAuto();
        for(Auto a:lista)
        System.out.println("> "+a);
        return lista;
    } 
    @RequestMapping(value = {"/del"})
    @ResponseBody
    public List<Auto> del(
            @RequestBody Auto auto){
            srvAuto.del(auto);
        return srvAuto.listaAuto();
    }           
     */

}
