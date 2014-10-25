package com.roxolanus.gle.dao;

import com.roxolanus.gle.domain.EntityItem;
import java.io.Serializable;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


public class GenericDaoImpl<T, ID extends Serializable> implements GenericDao<T, ID> {

    final protected Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @PersistenceContext(unitName = "glePU")
    protected EntityManager em;
    
    private Class<T> type;
    
    public GenericDaoImpl(Class<T> type1){
        this.type = type1;
    }
    
    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public T find(ID id) {
        return (T) em.find(type, id);
    }
    
    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    public void persist(T o){
        em.persist(o);
        // insert to the DB now so that the ID is populated
        // If not flushed, subsequent actions that require a ID
        // may fail (depends on when transaction is committed)
        
        em.flush(); // was added for testing of ID inserted in Ch 5

        if (o instanceof EntityItem) {
            EntityItem<ID> item = (EntityItem<ID>) o;
            ID id = item.getId();
            logger.info("The " + o.getClass().getName() + " record with ID=" + id + " has been inserted");
        }
    }
    
    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    public T merge(T o){
        o = em.merge(o);
        return o;
    }
    
    @Override
    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    public void remove(T o){
        o = merge(o);
        em.remove(o);
        
        if (o instanceof EntityItem) {
            EntityItem<ID> item = (EntityItem<ID>) o;
            ID id = item.getId();
            logger.warn("The " + o.getClass().getName() + " record with ID=" + id + " has been deleted");
        }
    }
    
}
