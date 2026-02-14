package com.example.demo;

import com.example.demo.pojo.Merchant;
import com.example.demo.pojo.order;
import com.example.demo.pojo.orderRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class orders {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${orders.path}")
    private String path;

    @Value("${website}")
    private String website;

    @PostMapping("/postOrder")
    public Map<String,String> postOrder(@RequestBody orderRequest order) {
        Map<String,String> map = new HashMap<>();
        String sql = "INSERT INTO `order` (staffID, imgArry, starttime, ordertime, location,demand,openid,manager) VALUES (?,?,?,?,?,?,?,?)";
       String s="";
       int st=0;
       for(String a:order.getImgArry()){
           if(st>0) {
               s = s + "," + a;
           }else s=a;
           st++;
       }
        int row=jdbcTemplate.update(
                sql,
                new Object[]{order.getStaffID(),s,order.getStarttime(),order.getOrdertime(),order.getLocation(),order.getDemand(),order.getOpenid(),order.getManager()}
                );

        if(row>0){
            map.put("state","true");
            return map;
        }
        else{
            map.put("state","false");
            return null;
        }

    }


    @GetMapping("/getorders")
    public List<order> getorder(String openid){
        List<order> orders = new ArrayList<order>();
        String sql = "select * from `order` WHERE openid=?";
        orders=jdbcTemplate.query(
                sql,
                new Object[]{openid},
                new BeanPropertyRowMapper<order>(order.class));


        return orders;
    }


    @GetMapping("/getinfo")
    public order getinfo(String openid,String orderId){
    order info = new order();
    String sql = "select * from `order` WHERE openid=? and orderid=?";

    info=jdbcTemplate.queryForObject(
            sql,
            new Object[]{openid,orderId},
            new BeanPropertyRowMapper<>(order.class)
    );

        List<String> imgarr = info.getImgArry();
        // 使用索引更新集合内容
        for (int i = 0; i < imgarr.size(); i++) {
            imgarr.set(i, website + "upload/" + imgarr.get(i));
        }
        info.setImgArry(imgarr);

    return info;
    }

    @GetMapping("/getmerchat")
    public Merchant getMerchant(String staffID){
        Merchant mc = new Merchant();
        String SQL="SELECT * FROM `hire` WHERE staffID=?";

        mc=jdbcTemplate.queryForObject(
                SQL,
                new Object[]{staffID},
                new BeanPropertyRowMapper<>(Merchant.class)
        );

        mc.setHead(website+"hired"+mc.getHead());
        mc.setSexImg(website+"hired"+mc.getSexImg());
        mc.setAsessImg(website+"hired"+mc.getAsessImg());
        mc.setAge(mc.getAge()+"岁");
        mc.setMoney(mc.getMoney()+"元/小时");

        return mc;
    }


    @GetMapping("/deleteOrder")
    public Map<String,String> deleteOrder(String orderId){
        Map<String,String> map = new HashMap<>();
        String sql = "DELETE FROM `order` WHERE orderId=?";

        int row=jdbcTemplate.update(
                sql,
                orderId);

        if(row>0){
            map.put("state","true");
        }else {
            map.put("state","false");
        }

        return map;
    }


    @PostMapping("/alertOrder")
    public Map<String, String> alertOrder(@RequestBody order od) {
        Map<String,String> map = new HashMap<>();
        // 更新 SQL
        String sql = "UPDATE `order` " +
                "SET " +
                "`imgArry` = ?, " +       // imgArry 存储为 JSON 字符串
                "`starttime` = ?, " +     // 开始时间
                "`ordertime` = ?, " +     // 订单时间
                "`location` = ?, " +      // 地址
                "`staffID` = ?, " +       // 员工ID
                "`openid` = ?, " +        // 用户openid
                "`demand` = ? " +         // 需求
                "WHERE `orderId` = ?";    // WHERE 条件

        String s="";
        int st=0;
        for(String a:od.getImgArry()){
            if(st>0) {
                s = s + "," + a;
            }else s=a;
            st++;
        }
        int row = jdbcTemplate.update(sql,
                new Object[]{s,od.getStarttime(),od.getOrdertime(),od.getLocation(),od.getStaffID(),od.getOpenid(),od.getDemand(),od.getOrderId()});
        if(row>0){
            map.put("state","true");
        }else{
            map.put("state","false");
        }
        return map;
    }

}
