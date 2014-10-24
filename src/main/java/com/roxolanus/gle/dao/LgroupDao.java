package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Lgroup;
import java.util.List;

public interface LgroupDao extends GenericDao<Lgroup, Integer>{

        public List<Lgroup> findAll();

}
