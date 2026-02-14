package com.example.demo;

import com.example.demo.pojo.article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/article")
@RestController
public class Article {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Value("${website}")
    private String website;


    @GetMapping("/getArticle")
    public List<article> getArticle() {
        List<article> list=new ArrayList<article>();
        String sql = "select * from `article`";
        list=jdbcTemplate.query(sql,
                new BeanPropertyRowMapper<article>(article.class));

        for(article a:list){
            a.setPoster(website+"upload/"+a.getPoster());
        }

     return list;
    }

    @GetMapping("/getthisarticle")
    public article getArticle(String id) {

        String sql = "SELECT * FROM `article` WHERE id=?";

        article at=jdbcTemplate.queryForObject(sql,
                new Object[]{id},
        new BeanPropertyRowMapper<article>(article.class));


        at.setPoster(website+"upload/"+at.getPoster());


        return at;
    }

}
