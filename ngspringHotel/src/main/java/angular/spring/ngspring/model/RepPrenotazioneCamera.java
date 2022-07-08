package angular.spring.ngspring.model;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepPrenotazioneCamera extends JpaRepository<PrenotazioneCamera, Long>
{
       public List<PrenotazioneCamera> findByCliente(Cliente cliente);
}
