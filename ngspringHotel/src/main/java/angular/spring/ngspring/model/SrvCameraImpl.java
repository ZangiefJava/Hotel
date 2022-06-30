package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    @Override
    public List<Camera> findByIdTipologia(Long id)
    {
        
        return repCamera.findByTipologiaCamera(id);//.get();
    }

    
    
    
    

}
