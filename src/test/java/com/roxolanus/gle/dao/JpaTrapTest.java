package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Lgroup;
import com.roxolanus.gle.domain.Course;
import com.roxolanus.gle.domain.User;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class JpaTrapTest extends AbstractDaoForTesting {

    @Test
    public void testManyToOne() throws Exception {

        logger.debug("\nSTARTED testManyToOne()\n");

        Lgroup lg = lgroupDao.findAll().get(0);
        Lgroup lg2 = lgroupDao.findAll().get(1);

        Course c = lg.getCourses().get(0);

        c.setLgroup(lg2);
        c = courseDao.merge(c);

        lg.getCourses().remove(c);
        lg2.getCourses().add(c);

        assertTrue("Original lgroup still has course in its collection!",
                !lg.getCourses().contains(c));
        assertTrue("Newly assigned lgroup does not have course in its collection",
                lg2.getCourses().contains(c));

        logger.debug("\nFINISHED testManyToOne()\n");

    }

    @Test
    public void testFindByUsernamePassword() throws Exception {

        logger.debug("\nSTARTED testFindByUsernamePassword()\n");

        // find by username/password combination
        User user = userDao.findByUsernamePassword("vkotusenko", "admin");

        assertTrue("Unable to find valid user with correct username/password combination", 
                user != null);

        user = userDao.findByUsernamePassword("vkotusenko", "ADMIN");

        assertTrue("User found with invalid password", 
                user == null); 
        
        logger.debug("\nFINISHED testFindByUsernamePassword()\n");
    }

}
