package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Assignment;
import com.roxolanus.gle.domain.AssignmentSubmission;
import com.roxolanus.gle.domain.User;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Repository("assignmentSubmissionDao")
@Transactional
public class AssignmentSubmissionDaoImpl extends GenericDaoImpl<AssignmentSubmission, Integer> implements AssignmentSubmissionDao {
    
    public AssignmentSubmissionDaoImpl() {
        super(AssignmentSubmission.class);
    }
    
    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<AssignmentSubmission> findAll() {
        return em.createNamedQuery("AssignmentSubmission.findAll").getResultList();
    }
    
    @Override
    public List<AssignmentSubmission> findUserSubmissions(User user) {
        return em.createNamedQuery("AssignmentSubmission.findSubmissionsByUser")
                .setParameter("user", user)
                .getResultList();
    }
    
    @Override
    public List<AssignmentSubmission> findUserAssignmentSubmissions(User user, Assignment assignment) {
        return em.createNamedQuery("AssignmentSubmission.findSubmissionsByUserAssignment")
                .setParameter("user", user)
                .setParameter("assignment", assignment)
                .getResultList();
    }
}