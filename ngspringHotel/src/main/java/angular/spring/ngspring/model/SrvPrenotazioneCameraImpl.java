package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvPrenotazioneCameraImpl implements SrvPrenotazioneCamera
{

    @Autowired
    RepPrenotazioneCamera repPrenotazioneCamera;

    @Override
    public void nuovaPrenotazioneCamera(PrenotazioneCamera prenotazioneCamera)
    {
        repPrenotazioneCamera.save(prenotazioneCamera);
    }

    @Override
    public List<PrenotazioneCamera> listaPrenotazioneCamera()
    {
        return repPrenotazioneCamera.findAll();
    }

}
