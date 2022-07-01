package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SrvCliente
{

    public void registra(Cliente cliente);
    public List<Cliente> lista();
    public List<Cliente> login(String user, String password);
}
