package com.example.demo.pojo;

public class article {
    private int id;
    private String add_date;
    private String title;
    private String content;
    private String poster;
    private String openid;
    private String write;
    public article() {
    }

    public article(int id, String add_date, String title, String content, String poster, String openid, String write) {
        this.id = id;
        this.add_date = add_date;
        this.title = title;
        this.content = content;
        this.poster = poster;
        this.openid = openid;
        this.write = write;
    }

    public String getWrite() {
        return write;
    }

    public void setWrite(String write) {
        this.write = write;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdd_date() {
        return add_date;
    }

    public void setAdd_date(String add_date) {
        this.add_date = add_date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }
}
