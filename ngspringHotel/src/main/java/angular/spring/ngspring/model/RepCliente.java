package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepCliente extends JpaRepository<Cliente, Long>
{
    public List<Cliente> findByUserLikeAndPasswordLike(String user, String password);
}
