package com.example.demo.pojo;

public class Merchant {
    private int staffID;
    private String head;
    private String name;
    private String sexImg;
    private String age;
    private String manager;
    private String money;
    private String asess;
    private String asessImg;

    public Merchant() {
    }

    public Merchant(int staffID, String head, String name, String sexImg, String age, String manager, String money, String asess, String asessImg) {
        this.staffID = staffID;
        this.head = head;
        this.name = name;
        this.sexImg = sexImg;
        this.age = age;
        this.manager = manager;
        this.money = money;
        this.asess = asess;
        this.asessImg = asessImg;
    }

    public String getAsess() {
        return asess;
    }

    public void setAsess(String asess) {
        this.asess = asess;
    }

    public int getStaffID() {
        return staffID;
    }

    public void setStaffID(int staffID) {
        this.staffID = staffID;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSexImg() {
        return sexImg;
    }

    public void setSexImg(String sexImg) {
        this.sexImg = sexImg;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getAsessImg() {
        return asessImg;
    }

    public void setAsessImg(String asessImg) {
        this.asessImg = asessImg;
    }
}
