package com.roxolanus.gle.service;

import java.util.List;
import com.roxolanus.gle.domain.Lgroup;
import com.roxolanus.gle.vo.Result;

public interface LgroupService {

    public Result<Lgroup> store(
        Integer idLgroup,
        String lgroupTitle,
        String actionUsername);

    public Result<Lgroup> remove(Integer idLgroup, String actionUsername);
    public Result<Lgroup> find(Integer idLgroup, String actionUsername);
    public Result<List<Lgroup>> findAll(String actionUsername);

}