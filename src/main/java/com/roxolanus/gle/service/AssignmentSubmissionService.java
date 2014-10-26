package com.roxolanus.gle.service;

import java.util.List;
import com.roxolanus.gle.domain.AssignmentSubmission;
import com.roxolanus.gle.vo.Result;
import java.util.Date;

public interface AssignmentSubmissionService {

    public Result<AssignmentSubmission> store(
        Integer idAssignmentSubmission,
        Integer idAssignment,
        String username,
        Date submissionDate,
        String actionUsername);

    public Result<AssignmentSubmission> remove(Integer idAssignmentSubmission, String actionUsername);
    public Result<AssignmentSubmission> find(Integer idAssignmentSubmission, String actionUsername);
    public Result<List<AssignmentSubmission>> findByUser(String username, String actionUsername);

}