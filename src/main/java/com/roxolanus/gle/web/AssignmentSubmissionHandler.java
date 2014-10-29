package com.roxolanus.gle.web;

import com.roxolanus.gle.domain.*;
import com.roxolanus.gle.service.AssignmentSubmissionService;
import com.roxolanus.gle.vo.Result;
import static com.roxolanus.gle.web.SecurityHelper.getSessionUser;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.List;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/assignmentSubmission")
public class AssignmentSubmissionHandler extends AbstractHandler {

    static final SimpleDateFormat DATE_FORMAT_yyyyMMdd = new SimpleDateFormat("yyyyMMdd");

    @Autowired
    protected AssignmentSubmissionService assignmentSubmissionService;
    
    @InitBinder
    public void initBinder(WebDataBinder binder) {

        binder.registerCustomEditor(Date.class, new CustomDateEditor(DATE_FORMAT_yyyyMMdd, true));

    }

    @RequestMapping(value="/find", method = RequestMethod.GET, produces = {"application/json"})
    @ResponseBody
    public String find(
            @RequestParam(value = "idAssignmentSubmission", required = true) Integer idAssignmentSubmission,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        Result<AssignmentSubmission> ar = assignmentSubmissionService.find(idAssignmentSubmission, sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/store", method = RequestMethod.POST, produces = {"application/json"})
    @ResponseBody
    public String store(
            @RequestParam(value = "data", required = true) String jsonData,
            HttpServletRequest request) throws ParseException {

        User sessionUser = getSessionUser(request);

        JsonObject jsonObj = parseJsonObject(jsonData);
        
        String dateVal = jsonObj.getString("submissionDate");
        
        Result<AssignmentSubmission> ar = assignmentSubmissionService.store(
                getIntegerValue(jsonObj.get("idAssignmentSubmission")),
                getIntegerValue(jsonObj.get("idAssignment")),
                jsonObj.getString("username"),
                DATE_FORMAT_yyyyMMdd.parse(dateVal),
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST, produces = {"application/json"})
    @ResponseBody
    public String remove(
            @RequestParam(value = "data", required = true) String jsonData,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        JsonObject jsonObj = parseJsonObject(jsonData);

        Result<AssignmentSubmission> ar = assignmentSubmissionService.remove(
                getIntegerValue(jsonObj.get("idAssignmentSubmission")), 
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessMsg(ar.getMsg());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/findByUser", method = RequestMethod.GET, produces = {"application/json"})
    @ResponseBody
    public String findByUser(
            @RequestParam(value = "username", required = true) String username,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        Result<List<AssignmentSubmission>> ar = assignmentSubmissionService.findAssignmentSubmissionsByUser(
                username,
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }
 }
