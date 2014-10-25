/**
 * Base class for DAO layer testing.  Assumes the database is loaded
 * with valid data.
 */
package com.roxolanus.gle.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

@ContextConfiguration("/testingContext.xml")
public abstract class AbstractDaoForTesting extends AbstractTransactionalJUnit4SpringContextTests {

    protected final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired(required = true)
    protected LgroupDao lgroupDao;
    @Autowired(required = true)
    protected CourseDao courseDao;
    @Autowired(required = true)
    protected AssignmentDao assignmentDao;
    @Autowired(required = true)
    protected UserDao userDao;
    @Autowired(required = true)
    protected AssignmentSubmissionDao assignmentSubmissionDao;

}