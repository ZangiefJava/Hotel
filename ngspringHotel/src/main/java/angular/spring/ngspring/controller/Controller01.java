package angular.spring.ngspring.controller;

import angular.spring.ngspring.model.PrenotazioneCamera;
import angular.spring.ngspring.model.SrvPrenotazioneCamera;
import java.util.Collections;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class Controller01
{

    @Autowired
    SrvPrenotazioneCamera srvPrenotazioneCamera;

    @RequestMapping(value =
    {
        "/nuovaPrenotazioneCamera"
    })
    @ResponseBody
    public List<PrenotazioneCamera> nuovaPrenotazione(
            @RequestBody PrenotazioneCamera prenotazioneCamera)
    {
        srvPrenotazioneCamera.nuovaPrenotazioneCamera(prenotazioneCamera);
        return srvPrenotazioneCamera.listaPrenotazioneCamera();
    }
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
