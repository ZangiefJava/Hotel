package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvTipologiaCameraImpl implements SrvTipologiaCamera
{

    @Autowired
    RepTipologiaCamera repTipologiaCamera;

    @Override
    public List<TipologiaCamera> listaTipologiaCamera()
    {
        return repTipologiaCamera.findAll();
    }

}
