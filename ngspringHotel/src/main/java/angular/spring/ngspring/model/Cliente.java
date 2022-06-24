package angular.spring.ngspring.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
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
@Table(name = "Cliente")
public class Cliente implements Serializable
{

    //PROPERTIES
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "cognome")
    private String cognome;
    @Column(name = "codiceFiscale")
    private String codiceFiscale;
    @Column(name = "mail")
    private String mail;
    @Column(name = "user")
    private String user;
    @Column(name = "password")
    private String password;
    @Column(name = "dataNascita")
    private LocalDate dataNascita;

    /*
    @OneToMany(mappedBy = "cliente",
            fetch = FetchType.LAZY)
    private List<PrenotazioneRisto> arrPrenRisto = new ArrayList<>();
    @OneToMany(mappedBy = "cliente",
            fetch = FetchType.LAZY)
    private List<PrenotazioneCamera> arrPrenCamera = new ArrayList<>();
     */
    //GET & SET
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

    public String getCognome()
    {
        return cognome;
    }

    public void setCognome(String cognome)
    {
        this.cognome = cognome;
    }

    public String getCodiceFiscale()
    {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale)
    {
        this.codiceFiscale = codiceFiscale;
    }

    public String getMail()
    {
        return mail;
    }

    public void setMail(String mail)
    {
        this.mail = mail;
    }

    public String getUser()
    {
        return user;
    }

    public void setUser(String user)
    {
        this.user = user;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public LocalDate getDataNascita()
    {
        return dataNascita;
    }

    public void setDataNascita(LocalDate dataNascita)
    {
        this.dataNascita = dataNascita;
    }

    /*
    public List<PrenotazioneCamera> getArrPrenCamera()
    {
        return arrPrenCamera;
    }
    
    public void setArrPrenCamera(List<PrenotazioneCamera> arrPrenCamera)
    {
        this.arrPrenCamera = arrPrenCamera;
    }

    public List<PrenotazioneRisto> getArrPrenRisto()
    {
        return arrPrenRisto;
    }

    public void setArrPrenRisto(List<PrenotazioneRisto> arrPrenRisto)
    {
        this.arrPrenRisto = arrPrenRisto;
    }
     */
    //EQUALS & HASHCODE
    @Override
    public int hashCode()
    {
        int hash = 3;
        hash = 89 * hash + Objects.hashCode(this.id);
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
        final Cliente other = (Cliente) obj;
        return Objects.equals(this.id, other.id);
    }
    /*
    //TOSTRING
    @Override
    public String toString()
    {
        return "Cliente{" + "nome=" + nome + ", cognome=" + cognome + ", codiceFiscale=" + codiceFiscale + ", mail=" + mail + ", user=" + user + ", dataNascita=" + dataNascita + ", arrPrenCamera=" + arrPrenCamera + ", arrPrenRisto=" + arrPrenRisto + '}';
    }
     */
}
