package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.AssignmentSubmissionDao;
import java.util.List;
import com.roxolanus.gle.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.roxolanus.gle.vo.Result;
import com.roxolanus.gle.vo.ResultFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
@Service("userService")
public class UserServiceImpl extends AbstractService implements UserService {

    @Autowired
    protected AssignmentSubmissionDao assignmentSubmissionDao;
    
    public UserServiceImpl() {
        super();
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<User> find(String username, String actionUsername) {

        if(isValidUser(actionUsername)) {

            User user = userDao.findByUsername(username);
            return ResultFactory.getSuccessResult(user);

        } else {
            return ResultFactory.getFailResult(USER_INVALID);
        }
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<User> store(
        String username,
        String firstName,
        String lastName,
        String email,
        String password,
        Character professorRole,
        Character managerRole,
        Character adminRole,
        String actionUsername) {

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        if (username == null || username.trim().isEmpty() || email == null || email.trim().isEmpty() ) {

            return ResultFactory.getFailResult("Unable to store a user without a valid non empty username/email");

        }

        // password could be String of empty text: allowed but not good!
        if(password == null || password.length() == 0){

            return ResultFactory.getFailResult("Unable to store a user without a valid non empty password");

        }
        
        if(!professorRole.equals('Y') && !professorRole.equals('N')){

            return ResultFactory.getFailResult("Unable to store the user: professorRole must be Y or N");

        }
                
        if(!managerRole.equals('Y') && !managerRole.equals('N')){

            return ResultFactory.getFailResult("Unable to store the user: managerRole must be Y or N");

        }

        if(!adminRole.equals('Y') && !adminRole.equals('N')){

            return ResultFactory.getFailResult("Unable to store the user: adminRole must be Y or N");

        }

        // we will store username/email values in lowercase
        username = username.trim();
        email = email.trim();

        // test if the user is already in the system
        User user = userDao.findByUsername(username);

        // see if the user can be found by email
        User testByEmailUser = userDao.findByEmail(email);
        boolean doInsert = false;

        if(user == null){

            // user with this username is not yet in system
            if(testByEmailUser == null){
                // there is no user with this email address in the system
                user = new User();
                user.setUsername(username);
                user.setEmail(email);
                doInsert = true;

            } else {

                return ResultFactory.getFailResult("Unable to add new user: the email address is already in use");
            }
            
        } else {

            // the user has been found: need to do a few email tests
            if(testByEmailUser == null){

                // the email can be set as no other users have it assigned
                user.setEmail(email);

            } else if(! user.equals(testByEmailUser)){
                
                // the user being modified is different to the user that has this email address
                return ResultFactory.getFailResult("The email address is already in use by username="
                        + testByEmailUser.getUsername()
                        + "and cannot be assigned to " + username);
            }
        }

        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(password);
        user.setProfessorRole(professorRole);
        user.setManagerRole(managerRole);
        user.setAdminRole(adminRole);

        if(doInsert) {

            userDao.persist(user);

        } else {

            user = userDao.merge(user);

        }

        return ResultFactory.getSuccessResult(user);

    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Result<User> remove(String username, String actionUsername){

        User actionUser = userDao.find(actionUsername);
        
        if (!actionUser.isAdmin()) {

            return ResultFactory.getFailResult(USER_NOT_ADMIN);

        }

        if(username == null){

            return ResultFactory.getFailResult("Unable to remove null User");

        } 

        User user = userDao.findByUsername(username);

        List<AssignmentSubmission> userSubmissions = assignmentSubmissionDao.findUserSubmissions(user);

        if(user == null) {

            return ResultFactory.getFailResult("Unable to load User for removal with username=" + username);

        } else if(userSubmissions.size() > 0) {

            // tasks have logs assigned: not allowed to delete
            return ResultFactory.getFailResult("Unable to remove User with username=" + username + " as valid assignment submissions are pending");

        } else {

            userDao.remove(user);
            String msg = "User " + username + " was deleted by " + actionUsername;
            logger.info(msg);
            return ResultFactory.getSuccessResultMsg(msg);

        }

    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<List<User>> findAll(String actionUsername){

        if(isValidUser(actionUsername)) {

            return ResultFactory.getSuccessResult(userDao.findAll());

        } else {
            return ResultFactory.getFailResult(USER_INVALID);
        }

    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Result<User> findByUsernamePassword(String username, String password){

        User user = userDao.findByUsernamePassword(username, password);

        if(user == null){

            return ResultFactory.getFailResult("Unable to verify user/password combination!");

        } else {

            return ResultFactory.getSuccessResult(user);
        }

    }
}
