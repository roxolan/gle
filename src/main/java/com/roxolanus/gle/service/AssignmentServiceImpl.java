package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.CourseDao;
import com.roxolanus.gle.dao.AssignmentDao;
import com.roxolanus.gle.dao.AssignmentSubmissionDao;
import java.util.List;
import com.roxolanus.gle.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.roxolanus.gle.vo.Result;
import com.roxolanus.gle.vo.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
@Service("assignmentService")
public class AssignmentServiceImpl extends AbstractService implements AssignmentService {

    @Autowired
    protected AssignmentDao assignmentDao;
    @Autowired
    protected AssignmentSubmissionDao assignmentSubmissionDao;     
    @Autowired
    protected CourseDao courseDao;    
    
    public AssignmentServiceImpl() {
        super();
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<Assignment> find(Integer idAssignment, String actionUsername) {

        if(isValidUser(actionUsername)) {
            return ResultFactory.getSuccessResult(assignmentDao.find(idAssignment));
        } else {
            return ResultFactory.getFailResult(USER_INVALID);
        }

    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<Assignment> store(
        Integer idAssignment,
        Integer idCourse,
        String assignmentTitle,
        String actionUsername) {

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);
        }

        Course course = courseDao.find(idCourse);
        
        if(course == null){
            return ResultFactory.getFailResult("Unable to store assignment without a valid course [idCourse=" + idCourse + "]");
        }

        Assignment assignment;

        if (idAssignment == null) {

            assignment = new Assignment();
            assignment.setCourse(course);
            course.getAssignments().add(assignment);

        } else {

            assignment = assignmentDao.find(idAssignment);

            if(assignment == null) {
                
                return ResultFactory.getFailResult("Unable to find assignment instance with idAssignment=" + idAssignment);
                
            } else {

                if(! assignment.getCourse().equals(course)){

                    Course currentCourse = assignment.getCourse();
                    // reassign to new course
                    assignment.setCourse(course);
                    course.getAssignments().add(assignment);
                    // remove from previous course
                    currentCourse.getAssignments().remove(assignment);
                }
            }
        }

        assignment.setAssignmentTitle(assignmentTitle);

        if(assignment.getId() == null) {
            assignmentDao.persist(assignment);
        } else {
            assignment = assignmentDao.merge(assignment);
        }

        return ResultFactory.getSuccessResult(assignment);
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<Assignment> remove(Integer idAssignment, String actionUsername){

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);
        }

        if(idAssignment == null){

            return ResultFactory.getFailResult("Unable to remove Assignment [null idAssignment]");

        } else {

            Assignment assignment = assignmentDao.find(idAssignment);
            List<AssignmentSubmission> assignmentSubmissions = assignmentSubmissionDao.findUserAssignmentSubmissions(actionUser, assignment);

            if(assignment == null) {

                return ResultFactory.getFailResult("Unable to load Assignment for removal with idTask=" + idAssignment);

            } else if(!assignmentSubmissions.isEmpty()) {

                return ResultFactory.getFailResult("Unable to remove Assignment with idAssignment=" + idAssignment + " as valid assignment submissions are related to it");

            } else {

                Course course = assignment.getCourse();

                assignmentDao.remove(assignment);

                course.getAssignments().remove(assignment);

                String msg = "Assignment " + assignment.getAssignmentTitle() + " was deleted by " + actionUsername;
                logger.info(msg);
                return ResultFactory.getSuccessResultMsg(msg);
            }
        }
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<List<Assignment>> findAll(String actionUsername){

        if(isValidUser(actionUsername)){
            return ResultFactory.getSuccessResult(assignmentDao.findAll());
        } else {
            return ResultFactory.getFailResult(USER_INVALID);
        }
    }
}
