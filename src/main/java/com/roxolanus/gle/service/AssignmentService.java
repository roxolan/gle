package com.roxolanus.gle.service;

import java.util.List;
import com.roxolanus.gle.domain.Assignment;
import com.roxolanus.gle.vo.Result;

public interface AssignmentService {

    public Result<Assignment> store(
        Integer idAssignment,
        Integer idCourse,
        String assignmentTitle,
        String actionUsername);

    public Result<Assignment> remove(Integer idAssignment, String actionUsername);
    public Result<Assignment> find(Integer idAssignment, String actionUsername);
    public Result<List<Assignment>> findAll(String actionUsername);

}