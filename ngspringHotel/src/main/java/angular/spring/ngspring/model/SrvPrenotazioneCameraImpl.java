/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author User
 */

public class SrvPrenotazioneCameraImpl implements SrvPrenotazioneCamera
{

    @Autowired
    RepPrenotazioneCamera repPrenotazioneCamera;
    @Override
    public void nuovaPrenotazione()
    {
        repPrenotazioneCamera.save(prenotazioneCamera);
    }
    
}
