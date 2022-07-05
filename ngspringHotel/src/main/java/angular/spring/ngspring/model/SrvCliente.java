package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SrvCliente
{

    public void registra(Cliente cliente);
    public List<Cliente> lista();
    public Cliente findById(Cliente cliente);
    //public List<Cliente> login(Cliente cliente);
}
