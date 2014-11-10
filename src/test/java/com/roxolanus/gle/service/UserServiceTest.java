package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.AssignmentSubmissionDao;
import com.roxolanus.gle.dao.UserDao;
import com.roxolanus.gle.domain.AssignmentSubmission;
import com.roxolanus.gle.domain.User;
import com.roxolanus.gle.vo.Result;
import java.util.List;
import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceTest extends AbstractServiceForTesting {

    @Autowired
    protected UserService userService;
    @Autowired
    protected AssignmentSubmissionDao assignmentSubmissionDao;
    @Autowired
    protected UserDao userDao;
    private final String TEST_USERNAME = "vkotusenko";
    
    @Test
    public void testFind() throws Exception {
        
        logger.debug("\nSTARTED testFind()\n");
        Result<List<User>> allItems = userService.findAll(TEST_USERNAME);
        
        assertTrue(allItems.getData().size() > 0);

        // get the first item in the list
        User u1 = allItems.getData().get(0);

        String username = u1.getId();

        Result<User> u2= userService.find(username, TEST_USERNAME);

        assertTrue(u1.equals(u2.getData()));
        logger.debug("\nFINISHED testFind()\n");
    }

    @Test
    public void testAddNew() throws Exception {

        String ADMIN_USERNAME = "osavruk";

        logger.debug("\nSTARTED testAddNew()\n");

        Result<User> ar = userService.store("nusername", "David", "Francis", "df@tttracker.com", "admpwd", 'N', 'N', 'N', ADMIN_USERNAME);

        // should succeed
        logger.debug(ar.getMsg());
        assertTrue(ar.isSuccess());

        ar = userService.store(this.TEST_USERNAME, "David", "Francis", "df@tttracker.com", "admpwd", 'Y', 'Y', 'Y', ADMIN_USERNAME);

        logger.debug(ar.getMsg());
        assertTrue("Cannot assign email that is currently assigned to other user", !ar.isSuccess());

        ar = userService.store("user100", "David", "Francis", "user100@tttracker.com", "", 'Y', 'Y', 'Y', ADMIN_USERNAME);

        logger.debug(ar.getMsg());
        assertTrue("Cannot set empty password for user", !ar.isSuccess());

        ar = userService.store("user101", "David", "Francis", "  ", "validpwd", 'Y', 'Y', 'Y', ADMIN_USERNAME);

        logger.debug(ar.getMsg());
        assertTrue("Cannot set empty email for user", !ar.isSuccess());

        ar = userService.store(this.TEST_USERNAME, "David", "Francis", "diff@email.com", "validpwd", 'Y', 'Y', 'Y', ADMIN_USERNAME);

        logger.debug(ar.getMsg());
        assertTrue("Assigning new email to user is allowed", ar.isSuccess());

        logger.debug("\nFINISHED testAddNew()\n");
    }

    /**
     * Test case for the remove(User) method of the UserService
     * implementation
     *
     * @throws Exception
     */
    @Test
    public void testRemove() throws Exception {

        String ADMIN_USERNAME = "osavruk";
        
        logger.debug("\nSTARTED testRemove()\n");

        User user1 = userDao.find(TEST_USERNAME);

        List<AssignmentSubmission> submissions = assignmentSubmissionDao.findUserSubmissions(user1);
        Result<User> ar;

        if (submissions.isEmpty()) {

            ar = userService.remove(TEST_USERNAME, ADMIN_USERNAME);
            logger.debug(ar.getMsg());
            assertTrue("Delete of user should be allowed as no task logs assigned!", ar.isSuccess());

        } else {

            // this user has assignment submissions pending
            ar = userService.remove(TEST_USERNAME, ADMIN_USERNAME);
            logger.debug(ar.getMsg());
            assertTrue("Cascading delete of user to assignment submissions not allowed!", !ar.isSuccess());

        }
        logger.debug("\nFINISHED testRemove()\n");        
    }

    @Test
    public void testLogon() {

        Result<User> ar = userService.findByUsernamePassword("vkotusenko", "admin");

        assertTrue("Valid user could not be found for valid user/pwd", ar.getData() != null);
        assertTrue(ar.isSuccess());

        ar = userService.findByUsernamePassword("vkotusenko", "ADMIN");

        assertTrue("Invalid logic - valid user found with UPPERCASE password", ar.getData() == null);
        assertTrue(!ar.isSuccess());

        ar = userService.findByUsernamePassword("kotus@kmbs.ua", "admin");

        assertTrue("Valid user could not be found for valid email/pwd", ar.getData() != null);
        assertTrue(ar.isSuccess());

        ar = userService.findByUsernamePassword("vkotusenko", "invalidadmin");
        assertTrue("Invalid user verified with wrong password", ar.getData() == null);
        assertTrue(!ar.isSuccess());

        ar = userService.findByUsernamePassword("blah", "blah");
        assertTrue("Invalid user verified with wrong username and password", ar.getData() == null);
        assertTrue(!ar.isSuccess());
    }
}
