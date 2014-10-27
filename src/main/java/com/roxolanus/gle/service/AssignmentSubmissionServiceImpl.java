package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.AssignmentDao;
import com.roxolanus.gle.dao.AssignmentSubmissionDao;
import java.util.List;
import java.util.ArrayList;
import com.roxolanus.gle.domain.*;
import java.util.Date;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.roxolanus.gle.vo.Result;
import com.roxolanus.gle.vo.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
@Service("assignmentSubmissionService")
public class AssignmentSubmissionServiceImpl extends AbstractService implements AssignmentSubmissionService {

    @Autowired
    protected AssignmentSubmissionDao assignmentSubmissionDao;    
    @Autowired
    protected AssignmentDao assignmentDao;   
    
    public AssignmentSubmissionServiceImpl() {
        super();
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<AssignmentSubmission> find(Integer idAssignmentSubmission, String actionUsername) {

        User actionUser = userDao.find(actionUsername);

        if(actionUser == null) {
            return ResultFactory.getFailResult(USER_INVALID);
        }

        AssignmentSubmission assignmentSubmission = assignmentSubmissionDao.find(idAssignmentSubmission);

        if(assignmentSubmission == null){
            return ResultFactory.getFailResult("Assignment submission not found with idAssignmentSubmission=" + idAssignmentSubmission);
        } else if( actionUser.isAdmin() || assignmentSubmission.getUser().equals(actionUser)){
            return ResultFactory.getSuccessResult(assignmentSubmission);
        } else {
            return ResultFactory.getFailResult("User does not have permission to view this assignment submission");
        }
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<AssignmentSubmission> store(
        Integer idAssignmentSubmission,
        Integer idAssignment,
        String username,
        Date submissionDate,
        String actionUsername) {

        User actionUser = userDao.find(actionUsername);
        User assignmentUser = userDao.find(username);

        if(actionUser == null || assignmentUser == null) {
            return ResultFactory.getFailResult(USER_INVALID);
        }

        Assignment assignment = assignmentDao.find(idAssignment);

        if(assignment == null) {
            return ResultFactory.getFailResult("Unable to store assignment submission with null assignment");
        }

        if( !actionUser.isAdmin() && ! assignmentUser.equals(actionUser) ){
            return ResultFactory.getFailResult("User performing save must be an admin user or saving their own submission");
        }

        AssignmentSubmission assignmentSubmission;

        if (idAssignmentSubmission == null) {
            assignmentSubmission = new AssignmentSubmission();
        } else {
            assignmentSubmission = assignmentSubmissionDao.find(idAssignmentSubmission);
            if(assignmentSubmission == null) {
                return ResultFactory.getFailResult("Unable to find assignment submission instance with ID=" + idAssignmentSubmission);
            }
        }

        assignmentSubmission.setSubmissionDate(submissionDate);
        assignmentSubmission.setAssignment(assignment);
        assignmentSubmission.setUser(assignmentUser);

        if(assignmentSubmission.getId() == null) {
            assignmentSubmissionDao.persist(assignmentSubmission);
        } else {
            assignmentSubmission = assignmentSubmissionDao.merge(assignmentSubmission);
        }

        return ResultFactory.getSuccessResult(assignmentSubmission);

    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<AssignmentSubmission> remove(Integer idAssignmentSubmission, String actionUsername){

        User actionUser = userDao.find(actionUsername);

        if(actionUser == null) {
            return ResultFactory.getFailResult(USER_INVALID);
        }

        if(idAssignmentSubmission == null){
            return ResultFactory.getFailResult("Unable to remove Assignment Submission [null idAssignmentSubmission]");
        } 

        AssignmentSubmission assignmentSubmission = assignmentSubmissionDao.find(idAssignmentSubmission);

        if(assignmentSubmission == null) {
            return ResultFactory.getFailResult("Unable to load Assignment Submission for removal with idAssignmentSubmission=" + idAssignmentSubmission);
        } 

        // only the user that owns the assignment submission may remove it
        // OR an admin user
        if(actionUser.isAdmin() || assignmentSubmission.getUser().equals(actionUser)){
            assignmentSubmissionDao.remove(assignmentSubmission);
            return ResultFactory.getSuccessResultMsg("assignmentSubmission removed successfully");
        } else {
            return ResultFactory.getFailResult("Only an admin user or assignment submission owner can delete an assignment submission");
        }
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<List<AssignmentSubmission>> findAssignmentSubmissionsByUser(String username, String actionUsername){

        User assignmentUser = userDao.findByUsername(username);
        User actionUser = userDao.findByUsername(actionUsername);

        if(assignmentUser == null || actionUser == null) {
            return ResultFactory.getFailResult(USER_INVALID);
        }
        
        if( !actionUser.isAdmin() && ! assignmentUser.equals(actionUser) ){
            return ResultFactory.getFailResult("User performing search must be an admin user or searching their own submissions");
        }
        
        if(actionUser.isAdmin() || assignmentUser.equals(actionUser)){
            return ResultFactory.getSuccessResult(assignmentSubmissionDao.findUserSubmissions(assignmentUser));
        } else {
            return ResultFactory.getFailResult("Unable to find assignment submissions. User does not have permission with username=" + username);
        }
    }
}
