package com.example.demo.pojo;

public class UploadResponse {
    private String state;
    private String fileName;

    public UploadResponse() {
    }

    public UploadResponse(String state, String fileName) {
        this.state = state;
        this.fileName = fileName;
    }

    // 生成 getter 和 setter 方法
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}