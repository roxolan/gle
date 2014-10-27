package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.LgroupDao;
import java.util.List;
import com.roxolanus.gle.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.roxolanus.gle.vo.Result;
import com.roxolanus.gle.vo.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
@Service("lgroupService")
public class LgroupServiceImpl extends AbstractService implements LgroupService {

    @Autowired
    protected LgroupDao lgroupDao;

    public LgroupServiceImpl() {
        super();
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<Lgroup> find(Integer idLgroup, String actionUsername) {

        if (isValidUser(actionUsername)) {

            Lgroup lgroup = lgroupDao.find(idLgroup);
            return ResultFactory.getSuccessResult(lgroup);

        } else {
            
            return ResultFactory.getFailResult(USER_INVALID);
        }
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<Lgroup> store(
            Integer idLgroup,
            String lgroupTitle,
            String actionUsername) {

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        Lgroup lgroup;

        if (idLgroup == null) {

            lgroup = new Lgroup();

        } else {

            lgroup = lgroupDao.find(idLgroup);

            if (lgroup == null) {

                return ResultFactory.getFailResult("Unable to find learning group instance with ID=" + idLgroup);

            }
        }

        lgroup.setLgroupTitle(lgroupTitle);

        if (lgroup.getId() == null) {

            lgroupDao.persist(lgroup);

        } else {

            lgroup = lgroupDao.merge(lgroup);

        }

        return ResultFactory.getSuccessResult(lgroup);

    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override    
    public Result<Lgroup> remove(Integer idLgroup, String actionUsername) {

        
        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        if (idLgroup == null) {

            return ResultFactory.getFailResult("Unable to remove Learning Group [null idLgroup]");

        } 

        Lgroup lgroup = lgroupDao.find(idLgroup);

        if (lgroup == null) {

            return ResultFactory.getFailResult("Unable to load Learning Group for removal with idLgroup=" + idLgroup);

        } else {

            if (lgroup.getCourses() == null || lgroup.getCourses().isEmpty()) {

                lgroupDao.remove(lgroup);

                String msg = "Learning group " + lgroup.getLgroupTitle() + " was deleted by " + actionUsername;
                logger.info(msg);
                return ResultFactory.getSuccessResultMsg(msg);

            } else {

                return ResultFactory.getFailResult("Learning Group has courses assigned and could not be deleted");
            }
        }

    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<List<Lgroup>> findAll(String actionUsername) {

        if (isValidUser(actionUsername)) {

            return ResultFactory.getSuccessResult(lgroupDao.findAll());

        } else {

            return ResultFactory.getFailResult(USER_INVALID);

        }
    }
}
