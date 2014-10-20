/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.roxolanus.gle.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

/**
 *
 * @author 1
 */
@Entity
@Table(name = "gle_assignment_submission")
@NamedQueries({
    @NamedQuery(name = "AssignmentSubmission.findAll", query = "SELECT a FROM AssignmentSubmission a"),
    @NamedQuery(name = "AssignmentSubmission.findByIdAssignmentSubmission", query = "SELECT a FROM AssignmentSubmission a WHERE a.idAssignmentSubmission = :idAssignmentSubmission"),
    @NamedQuery(name = "AssignmentSubmission.findBySubmissionDate", query = "SELECT a FROM AssignmentSubmission a WHERE a.submissionDate = :submissionDate")})
public class AssignmentSubmission implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_assignment_submission")
    private Integer idAssignmentSubmission;
    @Basic(optional = false)
    @NotNull
    @Column(name = "submission_date")
    @Temporal(TemporalType.DATE)
    private Date submissionDate;
    @JoinColumn(name = "id_assignment", referencedColumnName = "id_assignment")
    @ManyToOne(optional = false)
    private Assignment idAssignment;
    @JoinColumn(name = "username", referencedColumnName = "username")
    @ManyToOne(optional = false)
    private User username;

    public AssignmentSubmission() {
    }

    public AssignmentSubmission(Integer idAssignmentSubmission) {
        this.idAssignmentSubmission = idAssignmentSubmission;
    }

    public AssignmentSubmission(Integer idAssignmentSubmission, Date submissionDate) {
        this.idAssignmentSubmission = idAssignmentSubmission;
        this.submissionDate = submissionDate;
    }

    public Integer getIdAssignmentSubmission() {
        return idAssignmentSubmission;
    }

    public void setIdAssignmentSubmission(Integer idAssignmentSubmission) {
        this.idAssignmentSubmission = idAssignmentSubmission;
    }

    public Date getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
        this.submissionDate = submissionDate;
    }

    public Assignment getIdAssignment() {
        return idAssignment;
    }

    public void setIdAssignment(Assignment idAssignment) {
        this.idAssignment = idAssignment;
    }

    public User getUsername() {
        return username;
    }

    public void setUsername(User username) {
        this.username = username;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAssignmentSubmission != null ? idAssignmentSubmission.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AssignmentSubmission)) {
            return false;
        }
        AssignmentSubmission other = (AssignmentSubmission) object;
        if ((this.idAssignmentSubmission == null && other.idAssignmentSubmission != null) || (this.idAssignmentSubmission != null && !this.idAssignmentSubmission.equals(other.idAssignmentSubmission))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.AssignmentSubmission[ idAssignmentSubmission=" + idAssignmentSubmission + " ]";
    }
    
}
