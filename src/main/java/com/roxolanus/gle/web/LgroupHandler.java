package com.roxolanus.gle.web;

import com.roxolanus.gle.domain.*;
import com.roxolanus.gle.service.LgroupService;
import com.roxolanus.gle.service.CourseService;

import com.roxolanus.gle.vo.Result;
import static com.roxolanus.gle.web.SecurityHelper.getSessionUser;

import java.util.List;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/lgroup")
public class LgroupHandler extends AbstractHandler {

    @Autowired
    protected LgroupService lgroupService;
    @Autowired
    protected CourseService courseService;
    
    @RequestMapping(value = "/find", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String find(
            @RequestParam(value = "idLgroup", required = true) Integer idLgroup,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }
        
        Result<Lgroup> ar = lgroupService.find(idLgroup, sessionUser.getUsername());

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
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }

        JsonObject jsonObj = parseJsonObject(jsonData);
                
        Result<Lgroup> ar = lgroupService.store(
                getIntegerValue(jsonObj.get("idLgroup")), 
                jsonObj.getString("lgroupTitle"), 
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessData(ar.getData());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    @RequestMapping(value = "/findAll", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String findAll(HttpServletRequest request) {

        User sessionUser = getSessionUser(request);
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }

        Result<List<Lgroup>> ar = lgroupService.findAll(sessionUser.getUsername());

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
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }

        JsonObject jsonObj = parseJsonObject(jsonData);

        Result<Lgroup> ar = lgroupService.remove(
                getIntegerValue(jsonObj.get("idLgroup")), 
                sessionUser.getUsername());

        if (ar.isSuccess()) {

            return getJsonSuccessMsg(ar.getMsg());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }
    
    @RequestMapping(value = "/tree", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getLgroupTreeJson(HttpServletRequest request) {

        User sessionUser = getSessionUser(request);
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }

        Result<List<Lgroup>> ar = lgroupService.findAll(sessionUser.getUsername());

        if (ar.isSuccess()) {

            JsonObjectBuilder builder = Json.createObjectBuilder();
            builder.add("success", true);
            JsonArrayBuilder lgroupChildrenArrayBuilder = Json.createArrayBuilder();
            
            for(Lgroup lgroup : ar.getData()){

                List<Course> courses = lgroup.getCourses();
                    
                JsonArrayBuilder courseChildrenArrayBuilder = Json.createArrayBuilder();
                
                for(Course course : courses){

                    List<Assignment> assignments = course.getAssignments();
                                        
                    JsonArrayBuilder assignmentChildrenArrayBuilder = Json.createArrayBuilder();
                    
                    for(Assignment assignment : assignments){

                        assignmentChildrenArrayBuilder.add(
                           Json.createObjectBuilder()
                               .add("id", getTreeNodeId(assignment))
                               .add("text", assignment.getAssignmentTitle())
                               .add("leaf", true)
                       );                        
                    }

                    courseChildrenArrayBuilder.add(
                        Json.createObjectBuilder()
                            .add("id", getTreeNodeId(course))
                            .add("text", course.getCourseTitle())
                            .add("leaf", assignments.isEmpty())
                            .add("expanded", assignments.size() > 0)
                            .add("children", assignmentChildrenArrayBuilder)
                    );                    
                    
                }

                lgroupChildrenArrayBuilder.add(
                    Json.createObjectBuilder()
                        .add("id", getTreeNodeId(lgroup))
                        .add("text", lgroup.getLgroupTitle())
                        .add("leaf", courses.isEmpty())
                        .add("expanded", courses.size() > 0)
                        .add("children", courseChildrenArrayBuilder)
                );
            }

            builder.add("children", lgroupChildrenArrayBuilder);

            return toJsonString(builder.build());

        } else {

            return getJsonErrorMsg(ar.getMsg());

        }
    }

    private String getTreeNodeId(EntityItem obj){
        String id = null;

        if(obj instanceof Lgroup){

            id = "L_" + obj.getId();

        } else if(obj instanceof Course){

            id = "C_" + obj.getId();

        } else if(obj instanceof Assignment){

            id = "A_" + obj.getId();

        }
        return id;
    }

    @RequestMapping(value = "/treenode", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getLgroupTreeNode(
            @RequestParam(value = "node", required = true) String node,
            HttpServletRequest request) {

        User sessionUser = getSessionUser(request);
        if (sessionUser == null) {
            return getJsonErrorMsg("User is not logged on");
        }

        logger.info(node);

        JsonObjectBuilder builder = Json.createObjectBuilder();
        builder.add("success", true);
        JsonArrayBuilder childrenArrayBuilder = Json.createArrayBuilder();
        
        if(node.equals("root")){

            Result<List<Lgroup>> ar = lgroupService.findAll(sessionUser.getUsername());
            if (ar.isSuccess()) {                                
                
                for(Lgroup lgroup : ar.getData()){                   
                    childrenArrayBuilder.add(
                        Json.createObjectBuilder()
                            .add("id", getTreeNodeId(lgroup))
                            .add("text", lgroup.getLgroupTitle())
                            .add("leaf", lgroup.getCourses().isEmpty())
                    );
                }
            } else {

                return getJsonErrorMsg(ar.getMsg());
            }
        } else if (node.startsWith("L")){

            String[] idSplit = node.split("_");
            int idLgroup = Integer.parseInt(idSplit[1]);
            Result<Lgroup> ar = lgroupService.find(idLgroup, sessionUser.getUsername());

            for(Course course : ar.getData().getCourses()){

                childrenArrayBuilder.add(
                    Json.createObjectBuilder()
                        .add("id", getTreeNodeId(course))
                        .add("text", course.getCourseTitle())
                        .add("leaf", course.getAssignments().isEmpty())
                );
            }
                
         } else if (node.startsWith("C")){

            String[] idSplit = node.split("_");
            int idCourse = Integer.parseInt(idSplit[1]);
            Result<Course> ar = courseService.find(idCourse, sessionUser.getUsername());

            for(Assignment assignment : ar.getData().getAssignments()){

                 childrenArrayBuilder.add(
                    Json.createObjectBuilder()
                        .add("id", getTreeNodeId(assignment))
                        .add("text", assignment.getAssignmentTitle())
                        .add("leaf", true)
                );
            }
        }
        
        builder.add("children", childrenArrayBuilder);

        return toJsonString(builder.build());
    }
}
