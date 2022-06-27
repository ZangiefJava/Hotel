package angular.spring.ngspring.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TipologiaCamera")
public class TipologiaCamera
{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "costoC")
    private Integer costoC;
    @OneToMany(mappedBy = "tipologiaCamera",
            fetch = FetchType.LAZY)
    private List<Camera> arrCamera = new ArrayList<>();

    @Override
    public int hashCode()
    {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.id);
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
        final TipologiaCamera other = (TipologiaCamera) obj;
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

    public String getNome()
    {
        return nome;
    }

    public void setNome(String nome)
    {
        this.nome = nome;
    }

    public Integer getCostoC()
    {
        return costoC;
    }

    public void setCostoC(Integer costoC)
    {
        this.costoC = costoC;
    }

    public List<Camera> getArrCamera()
    {
        return arrCamera;
    }

    public void setArrCamera(List<Camera> arrCamera)
    {
        this.arrCamera = arrCamera;
    }

    @Override
    public String toString()
    {
        return "TipologiaCamera{" + "id=" + id + ", nome=" + nome + ", costoC=" + costoC + ", arrCamera=" + arrCamera + '}';
    }

}
