package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Assignment;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Repository("assignmentDao")
@Transactional
public class AssignmentDaoImpl extends GenericDaoImpl<Assignment, Integer> implements AssignmentDao {
    
    public AssignmentDaoImpl() {
        super(Assignment.class);
    }
    
    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Assignment> findAll() {
        return em.createNamedQuery("Assignment.findAll").getResultList();
    }

}