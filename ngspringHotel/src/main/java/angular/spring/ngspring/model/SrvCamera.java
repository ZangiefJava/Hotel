package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SrvCamera
{

    public List<Camera> listaCamera();
    public List<Camera> findByIdTipologia(Long id);
}
