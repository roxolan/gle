package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.AssignmentSubmission;
import com.roxolanus.gle.domain.Assignment;
import com.roxolanus.gle.domain.User;
import java.util.List;

public interface AssignmentSubmissionDao extends GenericDao<AssignmentSubmission, Integer>{

    public List<AssignmentSubmission> findAll();
        
    public List<AssignmentSubmission> findUserSubmissions (User user);
        
    public List<AssignmentSubmission> findUserAssignmentSubmissions (User user, Assignment assignment);

}

