package com.example.demo;



import com.example.demo.pojo.Merchant;
import com.example.demo.pojo.Town;
import com.example.demo.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequestMapping("/hired")
@RestController
public class hired {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${hired.path}")
    private String path;

    @Value("${website}")
    private String website;

    private Map<String,String> createTown(String townName,String selectImg,String unselectImg){
        Map<String,String> townMap=new HashMap<>();
        townMap.put("townName",townName);
        selectImg=website+"hired"+selectImg;
        unselectImg=website+"hired"+unselectImg;
        townMap.put("selectImg",selectImg);
        townMap.put("unselectImg",unselectImg);
        return townMap;
    }

    @GetMapping("/town")
    public List<Town> gettown(){
        List<Town> towns = new ArrayList<Town>();
        String sql = "select * from town";

        towns= jdbcTemplate.query(
                sql, // SQL 查询语句
                new BeanPropertyRowMapper<>(Town.class)
        );

        for(Town town:towns){
            town.setSelectImg(website+"hired"+town.getSelectImg());
            town.setUnselectImg(website+"hired"+town.getUnselectImg());
        }

        return towns;
    }


    @GetMapping("/village")
    public List<String> getvillage(String town){
        List<String> village=new ArrayList<>();
        String SQL="SELECT area FROM `area` WHERE town= ?";

        village = jdbcTemplate.query(
                SQL,
                new Object[]{town}, // 参数传入 town
                (ResultSet rs, int rowNum) -> {
                    return rs.getString("area");
                }
        );
        village.add(0,"全部");
        return village;
    }


    @GetMapping("/Merchant")
    public List<Merchant> getMerchant(String town, String area){
        List<Merchant> merchant=new ArrayList<Merchant>();
        String SQL1="SELECT staffID,head, name, sexImg, age, manager, money, asess, asessImg FROM `hire` WHERE town=? AND village = ?";
        String SQL2="SELECT staffID,head, name, sexImg, age, manager, money, asess, asessImg FROM `hire` WHERE town = ?";

        if("全部".equals(area)){
            merchant = jdbcTemplate.query(
                    SQL2,
                    new Object[]{town}, // 参数传入 town
                   new BeanPropertyRowMapper<>(Merchant.class)
            );
        }else{
            merchant = jdbcTemplate.query(
                    SQL1,
                    new Object[]{town,area}, // 参数传入 town
                    new BeanPropertyRowMapper<>(Merchant.class)
            );
        }

        for(Merchant mc:merchant){
            mc.setHead(website+"hired"+mc.getHead());
            mc.setSexImg(website+"hired"+mc.getSexImg());
            mc.setAsessImg(website+"hired"+mc.getAsessImg());
            mc.setAge(mc.getAge()+"岁");
            mc.setMoney(mc.getMoney()+"元/小时");
        }

        return merchant;
    }


}


