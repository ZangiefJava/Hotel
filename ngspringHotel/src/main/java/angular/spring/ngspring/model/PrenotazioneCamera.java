package angular.spring.ngspring.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="PrenotazioneCamera")
public class PrenotazioneCamera
{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;    
    @Column(name="dataInizio")
    private LocalDate dataInizio;
    @Column(name="dataFine")
    private LocalDate dataFine;
    @Column(name="prezzo")
    private Integer prezzo;
    @ManyToOne
    @JoinColumn(name="idCamera")
    private Camera camera;    
    @ManyToOne
    @JoinColumn(name="user")    
    private Cliente cliente;
    @ManyToMany
    @JoinTable(name = "prenotazioneCamera_servizio", 
            joinColumns = { @JoinColumn(name = "fk_prenotazioneCamera") }, 
            inverseJoinColumns = { @JoinColumn(name = "fk_servizio") })
    private Set<Servizio> arrServizio = new HashSet<Servizio>();
    @ManyToMany
    @JoinTable(name = "prenotazioneCamera_ospite", 
            joinColumns = { @JoinColumn(name = "fk_prenotazioneCamera") }, 
            inverseJoinColumns = { @JoinColumn(name = "fk_ospite") })
    private Set<Ospite> arrOspite = new HashSet<Ospite>();
    
    
    @Override
    public int hashCode()
    {
        int hash = 5;
        hash = 53 * hash + Objects.hashCode(this.id);
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
        final PrenotazioneCamera other = (PrenotazioneCamera) obj;
        return Objects.equals(this.id, other.id);
    }

    
    
    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public LocalDate getDataInizio()
    {
        return dataInizio;
    }

    public void setDataInizio(LocalDate dataInizio)
    {
        this.dataInizio = dataInizio;
    }

    public LocalDate getDataFine()
    {
        return dataFine;
    }

    public void setDataFine(LocalDate dataFine)
    {
        this.dataFine = dataFine;
    }

    

    public Integer getPrezzo()
    {
        return prezzo;
    }

    public void setPrezzo(Integer prezzo)
    {
        this.prezzo = prezzo;
    }
    
    public Camera getCamera()
    {
        return camera;
    }
    
    public void setCamera(Camera camera)
    {
         this.camera = camera;
    }

    

    public Cliente getCliente()
    {
        return cliente;
    }

    public void setCliente(Cliente cliente)
    {
        this.cliente = cliente;
    }  
    
    public Set<Servizio> getArrServizio()
    {
        return arrServizio;
    }

    public void setArrServizio(Set<Servizio> arrServizio)
    {
        this.arrServizio = arrServizio;
    }

    
    public Set<Ospite> getArrOspite()
    {
        return arrOspite;
    }
    
    public void setArrOspite(Set<Ospite> arrOspite)
    {
        this.arrOspite = arrOspite;
    }

    

    @Override
    public String toString()
    {
        return "PrenotazioneCamera{" + "id=" + id + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine + ", prezzo=" + prezzo + '}';
    }

    
   

    

    
    
    

    

    
    
    
}
