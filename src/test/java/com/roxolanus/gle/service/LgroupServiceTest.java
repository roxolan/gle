package com.roxolanus.gle.service;

import com.roxolanus.gle.dao.CourseDao;
import com.roxolanus.gle.domain.Lgroup;
import com.roxolanus.gle.domain.Course;
import com.roxolanus.gle.vo.Result;
import java.util.List;
import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class LgroupServiceTest extends AbstractServiceForTesting {

    protected final String TEST_USERNAME = "vkotusenko";
    @Autowired
    protected LgroupService lgroupService;    
    @Autowired
    protected CourseDao courseDao; 

    @Test
    public void testFind() throws Exception {
        
        logger.debug("\nSTARTED testFind()\n");
        Result<List<Lgroup>> allItems = lgroupService.findAll(TEST_USERNAME);
        
        assertTrue(allItems.getData().size() > 0);

        // get the first item in the list
        Lgroup lg1 = allItems.getData().get(0);

        int id = lg1.getId();

        Result<Lgroup> lg2= lgroupService.find(id, TEST_USERNAME);

        assertTrue(lg1.equals(lg2.getData()));
        logger.debug("\nFINISHED testFind()\n");
    }    
    
    /**
     * Test case for the findAll() method of the LgroupService implementation
     * @throws Exception 
     */
    @Test
    public void testFindAll() throws Exception {
        
        logger.debug("\nSTARTED testFindAll()\n");
        int rowCount = countRowsInTable("gle_lgroup");
        
        if(rowCount > 0){                       
            
            Result<List<Lgroup>> allItems = lgroupService.findAll(TEST_USERNAME);
            assertTrue("Lgroup.findAll list not equal to row count of table gle_group", rowCount == allItems.getData().size());
            
        } else {
            throw new IllegalStateException("INVALID TESTING SCENARIO: Lgroup table is empty");
        }
        logger.debug("\nFINISHED testFindAll()\n");
    }    

    /**
     * Test case adding a new company of the LgroupService implementation
     * @throws Exception 
     */    
    @Test
    public void testAddNew() throws Exception {
        
        logger.debug("\nSTARTED testAddNew()\n");
        //Lgroup lg = new Lgroup();
        final String NEW_TITLE = "New Test Learning Group title";
        //lg.setLgroupTitle(NEW_NAME);
        
        Result<Lgroup> lg2 = lgroupService.store(null, NEW_TITLE, TEST_USERNAME);
        
        assertTrue(lg2.getData().getId() != null);
        assertTrue(lg2.getData().getLgroupTitle().equals(NEW_TITLE));
        
        logger.debug("\nFINISHED testAddNew()\n");
    }
    
    /**
     * Test case for updating a company of the LgroupService implementation
     * @throws Exception 
     */    
    @Test
    public void testUpdate() throws Exception {
        
        logger.debug("\nSTARTED testUpdate()\n");
        final String NEW_TITLE = "Update Test Learning Group New title";
        
        Result<List<Lgroup>> ar1 = lgroupService.findAll(TEST_USERNAME);
        Lgroup lg = ar1.getData().get(0);
        //c.setCompanyName(NEW_NAME);
        
        lgroupService.store(lg.getIdLgroup(), NEW_TITLE, TEST_USERNAME);
        
        Result<Lgroup> ar2 = lgroupService.find(lg.getIdLgroup(), TEST_USERNAME);
        
        assertTrue(ar2.getData().getLgroupTitle().equals(NEW_TITLE));
        
        logger.debug("\nFINISHED testUpdate()\n");
        
    }    
    
    /**
     * Test case for the remove(Lgroup) method of the LgroupService implementation
     * @throws Exception 
     */    
    @Test
    public void testRemove() throws Exception {
        
        logger.debug("\nSTARTED testRemove()\n");
        Result<List<Lgroup>> ar1 = lgroupService.findAll(TEST_USERNAME);
        Lgroup lg = ar1.getData().get(0);
        
        Result<Lgroup> ar = lgroupService.remove(lg.getIdLgroup(), TEST_USERNAME);        
        Result<Lgroup> ar2 = lgroupService.find(lg.getIdLgroup(), TEST_USERNAME);
                
        // should fail as courses still assigned
        assertTrue(! ar.isSuccess());
        // finder still works
        assertTrue(ar2.getData() != null);

        logger.debug("\ntestRemove() - UNABLE TO DELETE TESTS PASSED\n");
        // remove all the courses
        lg = ar2.getData();
        
        for(Course c : lg.getCourses()){
            courseDao.remove(c);
            
        }
        lg.getCourses().clear();

        logger.debug("\ntestRemove() - removed all courses\n");
        
        ar = lgroupService.remove(lg.getIdLgroup(), TEST_USERNAME);
        // remove should have succeeded
        assertTrue(ar.isSuccess());
        
        ar2 = lgroupService.find(lg.getIdLgroup(), TEST_USERNAME);
        // should not have been found
        assertTrue(ar2.getData() == null);
        assertTrue(ar2.isSuccess());
        
        logger.debug("\nFINISHED testRemove()\n");
    }     
}