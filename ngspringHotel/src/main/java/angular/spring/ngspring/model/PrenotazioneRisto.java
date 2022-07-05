/*
package angular.spring.ngspring.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="PrenotazioneRisto")
public class PrenotazioneRisto
{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(name="data")
    private LocalDate data;
    @Column(name="ora")
    private LocalTime ora;
    @Column(name="posti")
    private Integer posti;
    @ManyToOne(fetch=FetchType.LAZY) 
    @JoinColumn(name="user")
    private Cliente cliente; 

    @Override
    public int hashCode()
    {
        int hash = 7;
        hash = 29 * hash + Objects.hashCode(this.id);
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
        final PrenotazioneRisto other = (PrenotazioneRisto) obj;
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

    public LocalDate getData()
    {
        return data;
    }

    public void setData(LocalDate data)
    {
        this.data = data;
    }

    public LocalTime getOra()
    {
        return ora;
    }

    public void setOra(LocalTime ora)
    {
        this.ora = ora;
    }

    public Integer getPosti()
    {
        return posti;
    }

    public void setPosti(Integer posti)
    {
        this.posti = posti;
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
        return "PrenotazioneRisto{" + "id=" + id + ", data=" + data + ", ora=" + ora + ", posti=" + posti + ", cliente=" + cliente + '}';
    }
    
    
    
}
*/
