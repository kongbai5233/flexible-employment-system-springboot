package com.example.demo;

import com.example.demo.demos.web.JdbcUnit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class index {
//    public static void main(String[] args) throws SQLException, ClassNotFoundException {
//        Class.forName("com.mysql.cj.jdbc.Driver");
//        Connection conn = DriverManager.getConnection(
//                "jdbc:mysql://127.0.0.1:3306/xcx?useUnicode=true&characterEncoding=utf8&useSSL=false",
//                "root",
//                "kongbai520.."
//        );
//        if (conn != null) {
//            System.out.println("数据库连接成功！");
//        } else {
//            System.out.println("数据库连接失败！");
//        }
//    }

    @Value("${website}")
    String website;

    private Map<String, String> createService(String src, String title) {
        src=website+"index"+src;
        Map<String, String> service = new HashMap<>();
        service.put("src", src);
        service.put("title", title);
        return service;
    }

    @GetMapping("/GetNavBar")
    public List<List<Map<String, String>>> navBar() {
        List<List<Map<String, String>>> res = new ArrayList<>();
        try {

            Connection conn = JdbcUnit.getConnection();
            String SQL = "SELECT * FROM `index`";
            PreparedStatement pstm = conn.prepareStatement(SQL);
            ResultSet rs = pstm.executeQuery();

            List<Map<String, String>> group = new ArrayList<>();
            int cnt = 0;
            while (rs.next()) {
                if (cnt == 10) {
                    res.add(group);
                    group = new ArrayList<>();
                }
                String imgtitle = rs.getString("imgtitle");
                String imgsrc = rs.getString("imgsrc");
                group.add(createService(imgsrc, imgtitle));
                cnt++;
            }
            rs.close();
            pstm.close();
            if (!group.isEmpty()) res.add(group);

        } catch (SQLException e) {
            e.printStackTrace();
            // 如果捕获到异常，返回空数组或友好的错误信息
            return res;
        }
        return res;
    }



}
