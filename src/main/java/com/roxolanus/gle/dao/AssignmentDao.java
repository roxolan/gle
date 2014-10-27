
package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Assignment;
import java.util.List;

public interface AssignmentDao extends GenericDao<Assignment, Integer>{

        public List<Assignment> findAll();
        
}
