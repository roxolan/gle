/**
 * Test class for LgroupDaoTests object.  Assumes the database is loaded
 * with valid data.
 */
package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.Lgroup;
import java.util.List;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class LgroupDaoTest extends AbstractDaoForTesting {

    public LgroupDaoTest(){}

    /**
     * Test case for the find(id) method of the LgroupDao implementation of GenericDao
     * @throws Exception
     */
    @Test
    public void testFind() throws Exception {

        logger.debug("\nSTARTED testFind()\n");
        List<Lgroup> allItems = lgroupDao.findAll();

        assertTrue(allItems.size() > 0);

        // get the first item in the list
        Lgroup lg1 = allItems.get(0);

        int id = lg1.getId();

        Lgroup lg2 = lgroupDao.find(id);

        assertTrue(lg1.equals(lg2));
        logger.debug("\nFINISHED testFind()\n");
    }

    /**
     * Test case for the findAll() method of the LgroupDao implementation
     * @throws Exception
     */
    @Test
    public void testFindAll() throws Exception {

        logger.debug("\nSTARTED testFindAll()\n");
        int rowCount = countRowsInTable("gle_lgroup");

        if(rowCount > 0){

            List<Lgroup> allItems = lgroupDao.findAll();
            assertTrue("Lgroup.findAll list not equal to row count of table gle_group", rowCount == allItems.size());

        } else {
            throw new IllegalStateException("INVALID TESTING SCENARIO: Lgroup table is empty");
        }
        logger.debug("\nFINISHED testFindAll()\n");
    }

    /**
     * Test case for the persist(Lgroup) method of the LgroupDao implementation of GenericDao
     * @throws Exception
     */
    @Test
    //@Rollback(false)
    public void testPersist() throws Exception {

        logger.debug("\nSTARTED testPersist()\n");
        Lgroup lg = new Lgroup();
        final String NEW_TITLE = "Persist Test Learning Group Title";
        lg.setLgroupTitle(NEW_TITLE);

        lgroupDao.persist(lg);

        //assertTrue(c.getId() != null); // only if flush() is called in GenericDaoImpl
        assertTrue(lg.getLgroupTitle().equals(NEW_TITLE));

        logger.debug("\nFINISHED testPersist()\n");
    }

    /**
     * Test case for the merge(Lgroup) method of the LgroupDao implementation of GenericDao
     * @throws Exception
     */
    @Test
    public void testMerge() throws Exception {

        logger.debug("\nSTARTED testMerge()\n");
        final String NEW_TITLE = "Merge Test Learning Group New Title";

        Lgroup lg = lgroupDao.findAll().get(0);
        lg.setLgroupTitle(NEW_TITLE);

        lg = lgroupDao.merge(lg);

        assertTrue(lg.getLgroupTitle().equals(NEW_TITLE));

        logger.debug("\nFINISHED testMerge()\n");

    }

    /**
     * Test case for the remove(Lgroup) method of the LgroupDao implementation of GenericDao
     * @throws Exception
     */
    @Test
    public void testRemove() throws Exception {

        logger.debug("\nSTARTED testRemove()\n");
        Lgroup lg = lgroupDao.findAll().get(0);

        lgroupDao.remove(lg);

        List<Lgroup> allItems = lgroupDao.findAll();
      
        assertTrue("Deleted lgroup may not be in findAll List", !allItems.contains(lg) );

        logger.debug("\nFINISHED testRemove()\n");
    }
}