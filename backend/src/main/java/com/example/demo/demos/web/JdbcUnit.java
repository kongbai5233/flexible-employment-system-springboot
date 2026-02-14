package com.example.demo.demos.web;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JdbcUnit {

    private static Connection staticConnection;

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            staticConnection = DriverManager.getConnection(
                    "jdbc:mysql://127.0.0.1:3306/xcx?useUnicode=true&characterEncoding=utf8&useSSL=false",
                    "root",
                    "kongbai520.."
            );
        } catch (ClassNotFoundException e) {
            System.err.println("JDBC Driver not found: " + e.getMessage());
        } catch (SQLException e) {
            System.err.println("Failed to connect to database: " + e.getMessage());
            staticConnection = null;
        }
    }


    public static Connection getConnection() {
        return staticConnection;
    }
}
