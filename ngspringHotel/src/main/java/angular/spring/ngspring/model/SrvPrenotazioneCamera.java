package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SrvPrenotazioneCamera
{

    public PrenotazioneCamera nuovaPrenotazioneCamera(PrenotazioneCamera prenotazioneCamera);

    public List<PrenotazioneCamera> listaPrenotazioneCamera();
    public List<PrenotazioneCamera> findByCliente(Cliente cliente);
}
