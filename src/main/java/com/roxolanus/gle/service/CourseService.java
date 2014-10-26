package com.roxolanus.gle.service;

import java.util.List;
import com.roxolanus.gle.domain.Course;
import com.roxolanus.gle.vo.Result;

public interface CourseService {

    public Result<Course> store(
        Integer idCourse,
        Integer idLgroup,
        String courseTitle,
        String actionUsername);

    public Result<Course> remove(Integer idCourse, String actionUsername);
    public Result<Course> find(Integer idCourse, String actionUsername);
    public Result<List<Course>> findAll(String actionUsername);

}