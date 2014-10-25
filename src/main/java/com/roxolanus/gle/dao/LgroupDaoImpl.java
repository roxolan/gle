package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Lgroup;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Repository("lgroupDao")
@Transactional
public class LgroupDaoImpl extends GenericDaoImpl<Lgroup, Integer> implements LgroupDao {
    
    public LgroupDaoImpl() {
        super(Lgroup.class);
    }
    
    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Lgroup> findAll() {
        return em.createNamedQuery("Lgroup.findAll").getResultList();
    }
}


