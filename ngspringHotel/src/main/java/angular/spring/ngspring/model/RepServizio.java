package angular.spring.ngspring.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepServizio extends JpaRepository<Servizio, Integer>{

}
