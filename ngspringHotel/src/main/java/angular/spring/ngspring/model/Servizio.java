package angular.spring.ngspring.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="Servizio")
public class Servizio implements Serializable{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(name="descrizione")
    private String descrizione;
    @Column(name="costo")
    private Integer costo;
    @ManyToMany(mappedBy = "arrServizio")
    private Set<PrenotazioneCamera> arrPrenotazioneCamera = new HashSet<PrenotazioneCamera>();
    
    
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + Objects.hashCode(this.id);
        return hash;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Servizio other = (Servizio) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public Integer getCosto() {
        return costo;
    }

    public void setCosto(Integer costo) {
        this.costo = costo;
    }

    public Set<PrenotazioneCamera> getArrPrenotazioneCamera()
    {
        return arrPrenotazioneCamera;
    }

    public void setArrPrenotazioneCamera(Set<PrenotazioneCamera> arrPrenotazioneCamera)
    {
        this.arrPrenotazioneCamera = arrPrenotazioneCamera;
    }

    @Override
    public String toString()
    {
        return "Servizio{" + "id=" + id + ", descrizione=" + descrizione + ", costo=" + costo + ", arrPrenotazioneCamera=" + arrPrenotazioneCamera + '}';
    }

    
    
}