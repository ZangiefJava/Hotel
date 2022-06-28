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
public class SrvCameraImpl implements SrvCamera
{
    @Autowired
    RepCamera repCamera;

    @Override
    public List<Camera> listaCamera()
    {
        return repCamera.findAll();
    }
    
}
