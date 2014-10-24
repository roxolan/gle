package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.User;
import java.util.List;

public interface UserDao extends GenericDao<User, String>{
    
    public List<User> findAll();
    
    public User findByUsernamePassword(String username, String password);
    
    public User findByUsername(String username);
    
    public User findByEmail(String email);
    
}
