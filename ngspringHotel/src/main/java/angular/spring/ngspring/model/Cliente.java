
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
   
    
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    @Column(name = "user")
    private String user;
    @Column(name = "nome")
    private String nome;
    @Column(name = "cognome")
    private String cognome;     
    @Column(name = "password")
    private String password;
    @Column(name = "dataNascita")
    private LocalDate dataNascita;
    
    

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
    
    @Override
    public int hashCode()
    {
        int hash = 7;
        hash = 19 * hash + Objects.hashCode(this.user);
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
        return Objects.equals(this.user, other.user);
    }

    @Override
    public String toString()
    {
        return "Cliente{" + "id=" + id + ", user=" + user + ", nome=" + nome + ", cognome=" + cognome + ", password=" + password + ", dataNascita=" + dataNascita + '}';
    }
    
    
}
       
            


    

