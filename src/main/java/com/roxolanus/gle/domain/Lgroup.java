/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.roxolanus.gle.domain;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author 1
 */
@Entity
@Table(name = "gle_lgroup")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Lgroup.findAll", query = "SELECT l FROM Lgroup l"),
    @NamedQuery(name = "Lgroup.findByIdLgroup", query = "SELECT l FROM Lgroup l WHERE l.idLgroup = :idLgroup"),
    @NamedQuery(name = "Lgroup.findByLgroupTitle", query = "SELECT l FROM Lgroup l WHERE l.lgroupTitle = :lgroupTitle")})
public class Lgroup implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_lgroup")
    private Integer idLgroup;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "lgroup_title")
    private String lgroupTitle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "lgroup")
    private List<Course> courses;

    public Lgroup() {
    }

    public Lgroup(Integer idLgroup) {
        this.idLgroup = idLgroup;
    }

    public Lgroup(Integer idLgroup, String lgroupTitle) {
        this.idLgroup = idLgroup;
        this.lgroupTitle = lgroupTitle;
    }

    public Integer getIdLgroup() {
        return idLgroup;
    }

    public void setIdLgroup(Integer idLgroup) {
        this.idLgroup = idLgroup;
    }

    public String getLgroupTitle() {
        return lgroupTitle;
    }

    public void setLgroupTitle(String lgroupTitle) {
        this.lgroupTitle = lgroupTitle;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    } 

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idLgroup != null ? idLgroup.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lgroup)) {
            return false;
        }
        Lgroup other = (Lgroup) object;
        if ((this.idLgroup == null && other.idLgroup != null) || (this.idLgroup != null && !this.idLgroup.equals(other.idLgroup))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.Lgroup[ idLgroup=" + idLgroup + " ]";
    }
    
}
