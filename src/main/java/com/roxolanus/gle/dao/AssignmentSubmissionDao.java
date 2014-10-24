package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.AssignmentSubmission;
import com.roxolanus.gle.domain.Assignment;
import com.roxolanus.gle.domain.User;
import java.util.Date;
import java.util.List;

public interface AssignmentSubmissionDao extends GenericDao<AssignmentSubmission, Integer>{

        public List<AssignmentSubmission> findByUser(User user, Date submissionDate);
        
        public List<Date> findSubmissionDates(User user, Assignment assignment);

}

