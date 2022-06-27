package angular.spring.ngspring.model;

import java.io.Serializable;
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
@Table(name = "Camera")
public class Camera implements Serializable
{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "descrizione")
    private String descrizione;
    @ManyToOne
    @JoinColumn(name = "idTipologia", nullable = false)
    private TipologiaCamera tipologiaCamera;

    @Override
    public int hashCode()
    {
        int hash = 5;
        hash = 73 * hash + Objects.hashCode(this.id);
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
        final Camera other = (Camera) obj;
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

    public String getDescrizione()
    {
        return descrizione;
    }

    public void setDescrizione(String descrizione)
    {
        this.descrizione = descrizione;
    }

    public TipologiaCamera getTipologiaCamera()
    {
        return tipologiaCamera;
    }

    public void setTipologiaCamera(TipologiaCamera tipologiaCamera)
    {
        this.tipologiaCamera = tipologiaCamera;
    }

    @Override
    public String toString()
    {
        return "Camera{" + "id=" + id + ", descrizione=" + descrizione + ", tipologiaCamera=" + tipologiaCamera + '}';
    }

}
