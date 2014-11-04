package com.roxolanus.gle.web;

import com.roxolanus.gle.domain.*;
import com.roxolanus.gle.service.AssignmentService;
import com.roxolanus.gle.vo.Result;
import static com.roxolanus.gle.web.SecurityHelper.getSessionUser;

import java.util.List;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/assignment")
public class AssignmentHandler extends AbstractHandler {

    @Autowired
    protected AssignmentService assignmentService;
    
    @RequestMapping(value = "/find", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String find(
            @RequestParam(value = "idAssignment", required = true) Integer idAssignment,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        Result<Assignment> ar = assignmentService.find(idAssignment, sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/store", method = RequestMethod.POST, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String store(
            @RequestParam(value = "data", required = true) String jsonData,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        JsonObject jsonObj = parseJsonObject(jsonData);
        
        Result<Assignment> ar = assignmentService.store(
                getIntegerValue(jsonObj.get("idAssignment")),
                getIntegerValue(jsonObj.get("idCourse")),
                jsonObj.getString("assignmentTitle"),
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String remove(
            @RequestParam(value = "data", required = true) String jsonData,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        JsonObject jsonObj = parseJsonObject(jsonData);

        Result<Assignment> ar = assignmentService.remove(
                getIntegerValue(jsonObj.get("idAssignment")), 
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessMsg(ar.getMsg());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }
   
    @RequestMapping(value = "/findAll", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String findAll(HttpServletRequest request) {

        User sessionUser = getSessionUser(request);

        Result<List<Assignment>> ar = assignmentService.findAll(sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }
}
