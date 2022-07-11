/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service
public class SrvOspiteImpl implements SrvOspite
{

    @Autowired
    RepOspite repOspite;
    @Override
    public void registraOspite(Ospite ospite)
    {
        repOspite.save(ospite);
    }
    @Override
    public List<Ospite> lista()
    {
        return repOspite.findAll();
    }

    @Override
    public Ospite findById(Ospite ospite)
    {
        //Cliente ret = repOspite.findById(cliente.getUser()).orElse(null);
        //System.out.println("ClienteSrv " + ret);        
        return ospite ; 
    }
    
}
