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

/**
 *
 * @author 1
 */
@Entity
@Table(name = "gle_group")
@NamedQueries({
    @NamedQuery(name = "Lgroup.findAll", query = "SELECT l FROM Lgroup l"),
    @NamedQuery(name = "Lgroup.findByIdGroup", query = "SELECT l FROM Lgroup l WHERE l.idGroup = :idGroup"),
    @NamedQuery(name = "Lgroup.findByGroupTitle", query = "SELECT l FROM Lgroup l WHERE l.groupTitle = :groupTitle")})
public class Lgroup implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_group")
    private Integer idGroup;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "group_title")
    private String groupTitle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idGroup")
    private List<Course> courseList;

    public Lgroup() {
    }

    public Lgroup(Integer idGroup) {
        this.idGroup = idGroup;
    }

    public Lgroup(Integer idGroup, String groupTitle) {
        this.idGroup = idGroup;
        this.groupTitle = groupTitle;
    }

    public Integer getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(Integer idGroup) {
        this.idGroup = idGroup;
    }

    public String getGroupTitle() {
        return groupTitle;
    }

    public void setGroupTitle(String groupTitle) {
        this.groupTitle = groupTitle;
    }

    public List<Course> getCourseList() {
        return courseList;
    }

    public void setCourseList(List<Course> courseList) {
        this.courseList = courseList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idGroup != null ? idGroup.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lgroup)) {
            return false;
        }
        Lgroup other = (Lgroup) object;
        if ((this.idGroup == null && other.idGroup != null) || (this.idGroup != null && !this.idGroup.equals(other.idGroup))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.Lgroup[ idGroup=" + idGroup + " ]";
    }
    
}
