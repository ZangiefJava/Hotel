package angular.spring.ngspring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name= "Ospite")
public class Ospite implements Serializable
{
    //PROPERTIES.
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    
    @Column(name = "codiceFiscale")
    private String codiceFiscale;
    @Column(name = "nome")
    private String nome;
    @Column(name = "cognome")
    private String cognome;
    @ManyToMany(mappedBy = "arrOspite")
    private Set<PrenotazioneCamera> arrPrenotazioneCamera = new HashSet<PrenotazioneCamera>();


    //GET & SET.

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    
    
    public String getCodiceFiscale()
    {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale)
    {
        this.codiceFiscale = codiceFiscale;
    }

    public String getNome()
    {
        return nome;
    }

    public void setNome(String nome)
    {
        this.nome = nome;
    }

    public String getCognome()
    {
        return cognome;
    }

    public void setCognome(String cognome)
    {
        this.cognome = cognome;
    }

    /*
    public Set<PrenotazioneCamera> getArrPrenotazioneCamera()
    {
        return arrPrenotazioneCamera;
    }
    */
    public void setArrPrenotazioneCamera(Set<PrenotazioneCamera> arrPrenotazioneCamera)
    {
        this.arrPrenotazioneCamera = arrPrenotazioneCamera;
    }

    

    
    //EQUALS & HASCODE.
    @Override
    public int hashCode()
    {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.codiceFiscale);
        return hash;
    }

    @Override
    public boolean equals(Object obj)
    {
        if (this == obj)
        {
            return true;
        }
        if (obj == null)
        {
            return false;
        }
        if (getClass() != obj.getClass())
        {
            return false;
        }
        final Ospite other = (Ospite) obj;
        return Objects.equals(this.codiceFiscale, other.codiceFiscale);
    }

    @Override
    public String toString()
    {
        return "Ospite{" + "id=" + id + ", codiceFiscale=" + codiceFiscale + ", nome=" + nome + ", cognome=" + cognome + '}';
    }

}
