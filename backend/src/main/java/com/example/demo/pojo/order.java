package com.example.demo.pojo;

import java.util.List;

public class order {
    private int orderId;
    private String staffID;
    private List<String>imgArry;
    private String starttime;
    private String ordertime;
    private String location;
    private String demand;
    private String openid;
    private String manager;

    public order() {
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public order(int orderId, String staffID, List<String> imgArry, String starttime, String ordertime, String location, String demand, String openid, String manager) {
        this.orderId = orderId;
        this.staffID = staffID;
        this.imgArry = imgArry;
        this.starttime = starttime;
        this.ordertime = ordertime;
        this.location = location;
        this.demand = demand;
        this.openid = openid;
        this.manager = manager;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getStaffID() {
        return staffID;
    }

    public void setStaffID(String staffID) {
        this.staffID = staffID;
    }

    public List<String> getImgArry() {
        return imgArry;
    }

    public void setImgArry(List<String> imgArry) {
        this.imgArry = imgArry;
    }

    public String getStarttime() {
        return starttime;
    }

    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }

    public String getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(String ordertime) {
        this.ordertime = ordertime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDemand() {
        return demand;
    }

    public void setDemand(String demand) {
        this.demand = demand;
    }
}
