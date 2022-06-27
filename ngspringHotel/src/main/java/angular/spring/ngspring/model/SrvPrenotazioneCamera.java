package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service
public interface SrvPrenotazioneCamera
{

    public void nuovaPrenotazioneCamera(PrenotazioneCamera prenotazioneCamera);

    public List<PrenotazioneCamera> listaPrenotazioneCamera();
}
