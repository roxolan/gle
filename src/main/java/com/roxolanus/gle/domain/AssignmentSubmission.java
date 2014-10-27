package com.roxolanus.gle.domain;

import java.util.Date;
import java.util.Objects;
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


@Entity
@Table(name = "gle_assignment_submission")
@NamedQueries({
    @NamedQuery(name = "AssignmentSubmission.findAll", query = "SELECT a FROM AssignmentSubmission a"),
    @NamedQuery(name = "AssignmentSubmission.findSubmissionsByUser", query = "SELECT a FROM AssignmentSubmission a WHERE a.user = :user"),
    @NamedQuery(name = "AssignmentSubmission.findSubmissionsByUserAssignment", query = "SELECT a FROM AssignmentSubmission a WHERE a.user = :user AND a.assignment = :assignment")})
public class AssignmentSubmission extends AbstractEntity implements EntityItem<Integer> {
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
    private Assignment assignment;
    @JoinColumn(name = "username", referencedColumnName = "username")
    @ManyToOne(optional = false)
    private User user;

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

    public Assignment getAssignment() {
        return assignment;
    }

    public void setAssignment(Assignment assignment) {
        this.assignment = assignment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAssignmentSubmission != null ? idAssignmentSubmission.hashCode() : 0);
        return hash;
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.AssignmentSubmission[ idAssignmentSubmission=" + idAssignmentSubmission + " ]";
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final AssignmentSubmission other = (AssignmentSubmission) obj;
        return Objects.equals(this.idAssignmentSubmission, other.idAssignmentSubmission);
    }
    
    @Override
    public Integer getId(){
        return idAssignmentSubmission;
    }
}
