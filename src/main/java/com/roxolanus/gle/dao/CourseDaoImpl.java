package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Course;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Repository("courseDao")
@Transactional
public class CourseDaoImpl extends GenericDaoImpl<Course, Integer> implements CourseDao {
    
    public CourseDaoImpl() {
        super(Course.class);
    }
    
    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Course> findAll() {
        return em.createNamedQuery("Course.findAll").getResultList();
    }
}


