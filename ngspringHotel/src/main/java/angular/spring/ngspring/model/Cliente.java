
package angular.spring.ngspring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="Cliente")
public class Cliente  implements Serializable{
    @Id
    @Column(name="user", length=50)
    private String user;  
    @Column
    private String password;
    @Column
    private String nome;
    @Column
    private String cognome;
    
    @OneToMany(mappedBy="cliente",
            fetch = FetchType.LAZY)
    @JsonIgnore
    private List<PrenotazioneCamera> arrPrenotazione = new ArrayList<>();
    /*
    @OneToMany(mappedBy="cliente",
            fetch = FetchType.LAZY)
    private List<PrenotazioneRisto> arrPrenotazioneRisto = new ArrayList<>();
    */
    
    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
     public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

   
    
    @Override
    public String toString()
    {
        return "Cliente{" + "user=" + user + ", password=" + password + ", nome=" + nome + ", cognome=" + cognome + ", arrPrenotazione=" + arrPrenotazione + '}';
    }

    public List<PrenotazioneCamera> getArrPrenotazione()
    {
        return arrPrenotazione;
    }

    public void setArrPrenotazione(List<PrenotazioneCamera> arrPrenotazione)
    {
        this.arrPrenotazione = arrPrenotazione;
    }

    
    
}