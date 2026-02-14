package com.example.demo;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.example.demo.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class WxLogin {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/wxLogin")
    public String wxLogin(String code) {
        System.out.println("Received code: " + code);

        // 定义微信API的URL
        String url = "https://api.weixin.qq.com/sns/jscode2session";
        // 微信小程序的AppID
        String appId = "wxbd553f922f3675a9";
        // 微信小程序的AppSecret
        String secret = "45d8918b1c69d57708c9107fafec2497";
        // 授权类型
        String grantType = "authorization_code";

        // 构造请求参数
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("appid", appId);
        paramMap.put("secret", secret);
        paramMap.put("js_code", code);
        paramMap.put("grant_type", grantType);
        Map<String, String> result = new HashMap<>();
        try {
            // 发送GET请求到微信服务器
            String response = HttpUtil.get(url, paramMap);
            JSONObject object = JSONUtil.parseObj(response);

            // 从响应中获取 openid
            String openId = object.getStr("openid");
            System.out.println("openid: " + openId);
            result.put("state",validateOrCreateUser(openId));
            result.put("openid", openId);
            // 判断用户是否存在
            return JSONUtil.toJsonStr(result);
        } catch (Exception e) {
            // 捕获异常并记录日志
            System.err.println("Error during wxLogin process: " + e.getMessage());
            result.put("error", e.getMessage());
            return JSONUtil.toJsonStr(result);
        }
    }

    public String validateOrCreateUser(String openId) {
        String sql = "SELECT * FROM user WHERE openid = ?";
        User user = null;

        try {
            // 查询用户
            user = jdbcTemplate.queryForObject(
                    sql,
                    new Object[]{openId},
                    new BeanPropertyRowMapper<>(User.class)
            );
        } catch (EmptyResultDataAccessException e) {
         return "unregistered";
        } catch (Exception e) {
            // 捕获其他异常
            System.err.println("Error during user validation: " + e.getMessage());
            return "false";
        }

        return "true";
    }


    @GetMapping("/userQuery")
    public User getUser(String openid) {
        // 插入用户数据的 SQL 语句
        String insertSql = "INSERT INTO user (openid, username, userImg) VALUES (?, ?, ?)";
        // 查询用户数据的 SQL 语句
        String selectSql = "SELECT * FROM user WHERE openid = ?";

        User user = null;

        try {
                user = jdbcTemplate.queryForObject(
                        selectSql,
                        new Object[]{openid},
                        new BeanPropertyRowMapper<>(User.class)
                );

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }


        return user;
    }


    @GetMapping("/register")
    public User createUser(String name,String img,String openid) {
        // 插入用户数据的 SQL 语句
        String insertSql = "INSERT INTO user (openid, username, userImg) VALUES (?, ?, ?)";
        // 查询用户数据的 SQL 语句
        String selectSql = "SELECT * FROM user WHERE openid = ?";

        User user = null;

        try {
            // 插入数据
            int rowsAffected = jdbcTemplate.update(insertSql, openid, name, img);

            if (rowsAffected > 0) {
                // 插入成功后查询
                user = jdbcTemplate.queryForObject(
                        selectSql,
                        new Object[]{openid},
                        new BeanPropertyRowMapper<>(User.class)
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }


        return user;
    }

}
