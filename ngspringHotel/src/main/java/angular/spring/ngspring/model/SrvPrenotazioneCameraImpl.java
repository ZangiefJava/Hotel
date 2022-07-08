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
    public PrenotazioneCamera nuovaPrenotazioneCamera(PrenotazioneCamera prenotazioneCamera)
    {
        return repPrenotazioneCamera.save(prenotazioneCamera);
     
    }

    @Override
    public List<PrenotazioneCamera> listaPrenotazioneCamera()
    {
        return repPrenotazioneCamera.findAll();
    }
     @Override
    public List<PrenotazioneCamera> findByCliente(Cliente cliente)
    {
        
        return repPrenotazioneCamera.findByCliente(cliente);//.get();
    }

}
