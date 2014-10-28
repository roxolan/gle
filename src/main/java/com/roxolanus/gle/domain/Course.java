package com.roxolanus.gle.domain;

import java.util.List;
import java.util.Objects;
import javax.json.JsonObjectBuilder;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "gle_course")
@NamedQueries({
    @NamedQuery(name = "Course.findAll", query = "SELECT c FROM Course c ORDER BY c.courseTitle"),
    @NamedQuery(name = "Course.findByIdCourse", query = "SELECT c FROM Course c WHERE c.idCourse = :idCourse"),
    @NamedQuery(name = "Course.findByCourseTitle", query = "SELECT c FROM Course c WHERE c.courseTitle = :courseTitle")})
public class Course extends AbstractEntity implements EntityItem<Integer> {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_course")
    private Integer idCourse;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "course_title")
    private String courseTitle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "course")
    private List<Assignment> assignments;
    @JoinColumn(name = "id_lgroup", referencedColumnName = "id_lgroup")
    @ManyToOne(optional = false)
    private Lgroup lgroup;

    public Course() {
    }

    public Course(Integer idCourse) {
        this.idCourse = idCourse;
    }

    public Course(Integer idCourse, String courseTitle) {
        this.idCourse = idCourse;
        this.courseTitle = courseTitle;
    }

    public Integer getIdCourse() {
        return idCourse;
    }

    public void setIdCourse(Integer idCourse) {
        this.idCourse = idCourse;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public List<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }

    public Lgroup getLgroup() {
        return lgroup;
    }

    public void setLgroup(Lgroup lgroup) {
        this.lgroup = lgroup;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idCourse != null ? idCourse.hashCode() : 0);
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
        final Course other = (Course) obj;
        return Objects.equals(this.idCourse, other.idCourse);
    }

    @Override
    public String toString() {
        return "com.roxolanus.gle.domain.Course[ idCourse=" + idCourse + " ]";
    }
    
    @Override
    public Integer getId(){
        return idCourse;
    }
 
    @Override
    public void addJson(JsonObjectBuilder builder) {
        
        builder.add("idCourse", idCourse)
           .add("courseTitle", courseTitle);
                
        if(lgroup != null){
           lgroup.addJson(builder);
        }
    }
}
