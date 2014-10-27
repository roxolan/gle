package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.LgroupDao;
import com.roxolanus.gle.dao.CourseDao;
import java.util.List;
import com.roxolanus.gle.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.roxolanus.gle.vo.Result;
import com.roxolanus.gle.vo.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
@Service("courseService")
public class CourseServiceImpl extends AbstractService implements CourseService {

    @Autowired
    protected LgroupDao lgroupDao;    
    @Autowired
    protected CourseDao courseDao;

    public CourseServiceImpl() {
        super();
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<Course> find(Integer idCourse, String actionUsername) {

        if(isValidUser(actionUsername)) {

            Course course = courseDao.find(idCourse);
            return ResultFactory.getSuccessResult(course);

        } else {
            return ResultFactory.getFailResult(USER_INVALID);
        }
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<Course> store(
        Integer idCourse,
        Integer idLgroup,
        String courseTitle,
        String actionUsername) {

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        Course course;
        Lgroup lgroup = lgroupDao.find(idLgroup);

        if (idCourse == null) {

            // we are adding a NEW course
            course = new Course();

            if(lgroup == null){

                return ResultFactory.getFailResult("Unable to add new course without a valid learning group [idLgroup=" + idLgroup + "]");

            } else {
                course.setLgroup(lgroup);
                lgroup.getCourses().add(course);
            }

        } else {

            // the course must be valid if idCourse is supplied
            course = courseDao.find(idCourse);

            if(course == null) {

                return ResultFactory.getFailResult("Unable to find course instance with ID=" + idCourse);

            } else {

                if(lgroup != null){
                    // we may be changing the lgroup assigned to the course
                    if( ! course.getLgroup().equals(lgroup)){

                        Lgroup currentLgroup = course.getLgroup();
                        // reassign to new company
                        course.setLgroup(lgroup);
                        lgroup.getCourses().add(course);
                        // remove from previous company
                        currentLgroup.getCourses().remove(course);
                    }
                }
            }
        }

        course.setCourseTitle(courseTitle);

        if(course.getIdCourse() == null) {

            courseDao.persist(course);

        } else {

            course = courseDao.merge(course);

        }

        return ResultFactory.getSuccessResult(course);

    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<Course> remove(Integer idCourse, String actionUsername){

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        if(idCourse == null){

            return ResultFactory.getFailResult("Unable to remove Course with a null idCourse");

        } 

        Course course = courseDao.find(idCourse);

        if(course == null) {

            return ResultFactory.getFailResult("Unable to load Course for removal with idCourse=" + idCourse);

        } else if (course.getAssignments() != null && ! course.getAssignments().isEmpty() ) {

            // tasks are assigned: not allowed to delete
            return ResultFactory.getFailResult("Unable to remove Course with idCourse=" + idCourse + " as valid assignments are assigned");

        } else {

            // find the learning group that owns the course
            Lgroup lgroup = course.getLgroup();

            // removed the course
            courseDao.remove(course);

            // ensure the course is removed from the learning group
            lgroup.getCourses().remove(course);

            String msg = "Course " + course.getCourseTitle() + " was deleted by " + actionUsername;
            logger.info(msg);
            return ResultFactory.getSuccessResultMsg(msg);

        }

    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<List<Course>> findAll(String actionUsername){

        if(isValidUser(actionUsername)){

            return ResultFactory.getSuccessResult(courseDao.findAll());

        } else {

            return ResultFactory.getFailResult(USER_INVALID);

        }

    }
}
