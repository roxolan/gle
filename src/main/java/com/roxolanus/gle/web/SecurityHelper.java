package com.roxolanus.gle.web;

import com.roxolanus.gle.domain.User;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SecurityHelper {

    static final String SESSION_ATTRIB_USER = "sessionuser";

    public static User getSessionUser(HttpServletRequest request) {

        User user = null;

        HttpSession session = request.getSession(true);

        Object obj = session.getAttribute(SESSION_ATTRIB_USER);

        if (obj != null && obj instanceof User) {
            user = (User) obj;
        }

        return user;

    }

}
