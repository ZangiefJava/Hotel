package angular.spring.ngspring.model;


import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
    @JoinColumn(name="idCamera",nullable=false)
    private Camera camera;
    @ManyToOne
    @JoinColumn(name="idTipologiaCamera")
    private TipologiaCamera tipologiaCamera;
    @ManyToOne
    @JoinColumn(name="idCliente")
    private Cliente cliente;

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

    public TipologiaCamera getTipologiaCamera()
    {
        return tipologiaCamera;
    }

    public void setTipologiaCamera(TipologiaCamera tipologiaCamera)
    {
        this.tipologiaCamera = tipologiaCamera;
    }

    public Cliente getCliente()
    {
        return cliente;
    }

    public void setCliente(Cliente cliente)
    {
        this.cliente = cliente;
    }

    @Override
    public String toString()
    {
        return "PrenotazioneCamera{" + "id=" + id + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine + ", prezzo=" + prezzo + ", camera=" + camera + ", tipologiaCamera=" + tipologiaCamera + ", cliente=" + cliente + '}';
    }

    
    
    
            
    
}

