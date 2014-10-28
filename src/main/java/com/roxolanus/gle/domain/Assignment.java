package com.roxolanus.gle.domain;

import java.util.Objects;
import javax.json.JsonObjectBuilder;
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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "gle_assignment")
@NamedQueries({
    @NamedQuery(name = "Assignment.findAll", query = "SELECT a FROM Assignment a ORDER BY a.assignmentTitle"),
    @NamedQuery(name = "Assignment.findByIdAssignment", query = "SELECT a FROM Assignment a WHERE a.idAssignment = :idAssignment"),
    @NamedQuery(name = "Assignment.findByAssignmentTitle", query = "SELECT a FROM Assignment a WHERE a.assignmentTitle = :assignmentTitle")})
public class Assignment extends AbstractEntity implements EntityItem<Integer> {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_assignment")
    private Integer idAssignment;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "assignment_title")
    private String assignmentTitle;
    @JoinColumn(name = "id_course", referencedColumnName = "id_course")
    @ManyToOne(optional = false)
    private Course course;

    public Assignment() {
    }

    public Assignment(Integer idAssignment) {
        this.idAssignment = idAssignment;
    }

    public Assignment(Integer idAssignment, String assignmentTitle) {
        this.idAssignment = idAssignment;
        this.assignmentTitle = assignmentTitle;
    }

    public Integer getIdAssignment() {
        return idAssignment;
    }

    public void setIdAssignment(Integer idAssignment) {
        this.idAssignment = idAssignment;
    }

    public String getAssignmentTitle() {
        return assignmentTitle;
    }

    public void setAssignmentTitle(String assignmentTitle) {
        this.assignmentTitle = assignmentTitle;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAssignment != null ? idAssignment.hashCode() : 0);
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
        final Assignment other = (Assignment) obj;
        return Objects.equals(this.idAssignment, other.idAssignment);
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.Assignment[ idAssignment=" + idAssignment + " ]";
    }
    
    @Override
    public Integer getId(){
        return idAssignment;
    }
    
    @Override
    public void addJson(JsonObjectBuilder builder) {
        
        builder .add("idAssignment", idAssignment)
           .add("assignmentTitle", assignmentTitle);
         
        if(course != null){
           course.addJson(builder);
           
           Lgroup lgroup = course.getLgroup();
           lgroup.addJson(builder);
        }        
    }
}
