package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Course;
import java.util.List;

public interface CourseDao extends GenericDao<Course, Integer>{

        public List<Course> findAll();

}
