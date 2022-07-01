package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvClienteImpl implements SrvCliente
{

    @Autowired
    RepCliente repCliente;

    @Override
    public void registra(Cliente cliente)
    {
        repCliente.save(cliente);
    }

}
