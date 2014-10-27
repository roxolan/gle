package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.UserDao;
import com.roxolanus.gle.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractService {

    final protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    protected UserDao userDao;

    protected final String USER_INVALID = "Not a valid user";
    protected final String USER_NOT_ADMIN = "Not an admin user";

    protected boolean isValidUser(String username){

        User user = userDao.findByUsername(username);
        return user != null;
    }

}
