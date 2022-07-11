/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service
public interface SrvOspite
{
     public void registraOspite(Ospite ospite);
    public List<Ospite> lista();
    public Ospite findById(Ospite ospite);
}
