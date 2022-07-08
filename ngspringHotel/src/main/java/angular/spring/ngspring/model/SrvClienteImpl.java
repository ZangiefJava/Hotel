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

    @Override
    public List<Cliente> lista()
    {
        return repCliente.findAll();
    }
    @Override
    public Cliente findById(Cliente cliente) {
        Cliente ret = repCliente.findById(cliente.getUser()).orElse(null);
        System.out.println("ClienteSrv " + ret);        
        return ret;    
    }
    /*
    @Override
    public List<Cliente> login(Cliente cliente)
    {
        String user= cliente.getUser();
        String password= cliente.getPassword();
        return repCliente.findByUserLikeAndPasswordLike(user, password);
    }
    */
}
