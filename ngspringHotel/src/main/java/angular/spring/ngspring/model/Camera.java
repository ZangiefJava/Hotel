/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
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
@Table(name="Camera")
public class Camera implements Serializable
{
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(name="descrizione")
    private String descrizione;
    @ManyToOne
    @JoinColumn(name="idTipologia", nullable=false)    
    private TipologiaCamera tipologiaCamera;

    
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

    /*
    public TipologiaCamera getTipologiaCamera()
    {
        return tipologiaCamera;
    }
    */
    public void setTipologiaCamera(TipologiaCamera tipologiaCamera)
    {
        this.tipologiaCamera = tipologiaCamera;
    }
    
    
        
    
    
}
