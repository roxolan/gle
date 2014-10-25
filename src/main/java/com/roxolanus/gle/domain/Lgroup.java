package com.roxolanus.gle.domain;

import java.util.List;
import java.util.Objects;
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



@Entity
@Table(name = "gle_lgroup")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Lgroup.findAll", query = "SELECT l FROM Lgroup l ORDER BY l.lgroupTitle ASC"),
    @NamedQuery(name = "Lgroup.findByIdLgroup", query = "SELECT l FROM Lgroup l WHERE l.idLgroup = :idLgroup"),
    @NamedQuery(name = "Lgroup.findByLgroupTitle", query = "SELECT l FROM Lgroup l WHERE l.lgroupTitle = :lgroupTitle")})
public class Lgroup extends AbstractEntity implements EntityItem<Integer> {
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
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Lgroup other = (Lgroup) obj;
        return Objects.equals(this.idLgroup, other.idLgroup);
    }
    
    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.Lgroup[ idLgroup=" + idLgroup + " ]";
    }
    
    @Override
    public Integer getId(){
        return idLgroup;
    }
}
